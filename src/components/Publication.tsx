import type { Publication as Pub } from '@/lib/data';
import { formatVenue, paperPdf } from '@/lib/publications';

const PUBLISHERS: [string, string][] = [
  ['arc.aiaa.org', 'AIAA'],
  ['ieeexplore.ieee.org', 'IEEE Xplore'],
  ['sciencedirect.com', 'ScienceDirect'],
  ['arxiv.org', 'arXiv'],
];

function publisher(url: string) {
  return PUBLISHERS.find(([host]) => url.includes(host))?.[1] ?? 'Publisher';
}

/** "A, <strong>B</strong>, C" -> A, B (bold), and C */
function Authors({ list }: { list: string }) {
  const names = list.split(', ');
  return (
    <>
      {names.map((name, i) => {
        const own = name.match(/^<strong>(.*)<\/strong>$/);
        const last = i === names.length - 1;
        const sep = i === 0 ? '' : !last ? ', ' : names.length === 2 ? ' and ' : ', and ';
        return (
          <span key={name}>
            {sep}
            {own ? <strong>{own[1]}</strong> : name}
          </span>
        );
      })}
    </>
  );
}

export default function Publication({ pub, showCode = true }: { pub: Pub; showCode?: boolean }) {
  const pdf = paperPdf(pub.title);
  const links = [
    pdf && { href: pdf, label: 'PDF' },
    !pub.pdfOnly && { href: pub.url, label: publisher(pub.url) },
    showCode && pub.code && { href: pub.code, label: 'Code' },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <div className="pub">
      <p className="title">
        <a href={pdf ?? pub.url} target="_blank" rel="noopener noreferrer">
          {pub.title}
        </a>
      </p>
      <p className="authors">
        <Authors list={pub.authors} />
      </p>
      <p>
        <em>{formatVenue(pub.venue, pub.year)}</em>
      </p>
      <p className="links">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${l.label}: ${pub.title}`}>
            {l.label}
          </a>
        ))}
      </p>
    </div>
  );
}
