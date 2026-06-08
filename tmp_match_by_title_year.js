const fs = require('fs');
const path = require('path');

const src = fs.readFileSync('src/app/publications/page.tsx','utf8');
const start = src.indexOf('const publications');
if(start === -1){
  console.error('publications array not found');
  process.exit(1);
}
const slice = src.slice(start);
const arrStart = slice.indexOf('[');
const arrEnd = slice.indexOf('];');
const arrText = slice.slice(arrStart+1, arrEnd);

// split entries by pattern of closing brace followed by comma and newline
const entries = arrText.split(/\},\s*\n\s*\{/g).map(s=>s.trim()).filter(Boolean);

const pubs = entries.map(e=>{
  const titleMatch = e.match(/title:\s*"([^"]+)"/);
  const yearMatch = e.match(/year:\s*"([^"]+)"/);
  const urlMatch = e.match(/url:\s*"([^"]+)"/);
  const authorsMatch = e.match(/authors:\s*"([^"]+)"/);
  return {
    title: titleMatch? titleMatch[1].trim() : null,
    year: yearMatch? yearMatch[1].trim() : null,
    url: urlMatch? urlMatch[1].trim() : null,
    authors: authorsMatch? authorsMatch[1].trim() : null,
  };
});

const filesDir = path.join(process.cwd(),'public','papers');
let files = [];
if(fs.existsSync(filesDir)){
  files = fs.readdirSync(filesDir).filter(f=>/\.pdf$/i.test(f));
}

function normalize(s){
  return s.toLowerCase().replace(/[^a-z0-9\s]/g,' ');
}

function scoreMatch(title, year, filename){
  const tnorm = normalize(title);
  const fname = normalize(filename);
  const words = tnorm.split(/\s+/).filter(w=>w.length>3);
  if(words.length===0) return 0;
  let matches = 0;
  for(const w of words){ if(fname.includes(w)) matches++; }
  const wordScore = matches/words.length; // 0..1
  const yearScore = year && filename.includes(year) ? 1 : 0; // 0 or 1
  // weight year moderately
  return wordScore*0.7 + yearScore*0.3;
}

console.log('Found', files.length, 'PDF files in public/papers');
console.log('');

let unmatched=0;
for(let i=0;i<pubs.length;i++){
  const p = pubs[i];
  if(!p.title) continue;
  let best = null;
  for(const f of files){
    const sc = scoreMatch(p.title, p.year, f.toLowerCase());
    if(!best || sc>best.score) best={file:f,score:sc};
  }
  const threshold = 0.35;
  const matched = best && best.score>=threshold ? best.file : null;
  if(!matched) unmatched++;
  console.log(`${i+1}. ${p.title} (${p.year})`);
  console.log(`   -> ${matched? '/papers/' + matched : p.url}`);
}

console.log('\nUnmatched titles:', unmatched, '/', pubs.length);
