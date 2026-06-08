const fs = require('fs');
const path = require('path');
const child = require('child_process');

function readPublications(){
  const src = fs.readFileSync('src/app/publications/page.tsx','utf8');
  const start = src.indexOf('const publications');
  const slice = src.slice(start);
  const arrStart = slice.indexOf('[');
  const arrEnd = slice.indexOf('];');
  const arrText = slice.slice(arrStart+1, arrEnd);
  const entries = arrText.split(/\},\s*\n\s*\{/g).map(s=>s.trim()).filter(Boolean);
  const pubs = entries.map(e=>{
    const titleMatch = e.match(/title:\s*"([^"]+)"/);
    const yearMatch = e.match(/year:\s*"([^"]+)"/);
    const urlMatch = e.match(/url:\s*"([^"]+)"/);
    return {
      title: titleMatch? titleMatch[1].trim() : null,
      year: yearMatch? yearMatch[1].trim() : null,
      url: urlMatch? urlMatch[1].trim() : null,
    };
  });
  return pubs;
}

function listPdfs(){
  const dir = path.join(process.cwd(),'public','papers');
  if(!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f=>/\.pdf$/i.test(f));
}

function extractTextSnippet(filePath){
  try{
    // Using macOS strings to extract readable text from PDF binary
    const cmd = `strings "${filePath}" | head -n 200`;
    const out = child.execSync(cmd, {encoding:'utf8', maxBuffer: 20*1024*1024});
    return out.split('\n').map(s=>s.trim()).filter(Boolean).slice(0,80).join('\n');
  }catch(e){
    return '';
  }
}

function normalize(s){
  return (s||'').toLowerCase().replace(/[^a-z0-9\s]/g,' ');
}

function scoreTextMatch(title, year, text){
  const tnorm = normalize(title);
  const words = tnorm.split(/\s+/).filter(w=>w.length>3);
  if(words.length===0) return 0;
  const lname = normalize(text);
  let matches=0;
  for(const w of words){ if(lname.includes(w)) matches++; }
  const wordScore = matches/words.length;
  const yearScore = (year && lname.includes(year))?1:0;
  return wordScore*0.75 + yearScore*0.25;
}

const pubs = readPublications();
const files = listPdfs();
console.log('Found', files.length, 'PDF files in public/papers');
console.log('');

// Pre-extract snippets
const snippets = {};
for(const f of files){
  const p = path.join('public','papers',f);
  snippets[f] = extractTextSnippet(p);
}

let unmatched=0;
for(let i=0;i<pubs.length;i++){
  const p = pubs[i];
  if(!p.title) continue;
  const scores = files.map(f=>({file:f,score:scoreTextMatch(p.title,p.year,snippets[f])}));
  scores.sort((a,b)=>b.score-a.score);
  const best = scores[0];
  const threshold = 0.35;
  const matched = best && best.score>=threshold ? best.file : null;
  if(!matched) unmatched++;
  console.log(`${i+1}. ${p.title} (${p.year})`);
  if(matched){
    console.log(`   -> /papers/${matched}  (score=${best.score.toFixed(2)})`);
  } else {
    console.log(`   -> [no confident local PDF] fallback to: ${p.url}`);
  }
  if(matched){
    console.log('   snippet (first readable lines):');
    const sn = snippets[matched].split('\n').slice(0,8).map(s=>'     '+s).join('\n');
    console.log(sn);
  } else {
    // show top 2 candidates with scores and short snippet
    for(let k=0;k<Math.min(2,scores.length);k++){
      const c = scores[k];
      console.log(`   candidate: /papers/${c.file} (score=${c.score.toFixed(2)})`);
      const sn = snippets[c.file].split('\n').slice(0,6).map(s=>'     '+s).join('\n');
      console.log(sn);
    }
  }
  console.log('');
}

console.log('Unmatched titles:', unmatched, '/', pubs.length);

// Write a JSON mapping for manual confirmation
const mapping = {};
for(let i=0;i<pubs.length;i++){
  const p = pubs[i];
  const scores = files.map(f=>({file:f,score:scoreTextMatch(p.title,p.year,snippets[f])}));
  scores.sort((a,b)=>b.score-a.score);
  mapping[p.title] = {year:p.year, best: scores[0]?scores[0].file:null, score: scores[0]?scores[0].score:0};
}
fs.writeFileSync('tmp_papers_mapping.json', JSON.stringify(mapping,null,2));
console.log('Wrote tmp_papers_mapping.json with best candidates.');
