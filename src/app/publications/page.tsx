import type { Metadata } from 'next';
import { profile, publications } from '@/lib/data';
import Publication from '@/components/Publication';

export const metadata: Metadata = { title: 'Publications' };

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <h1>Publications</h1>
      <p>
        Also listed on <a className="text" href={profile.scholar}>Google Scholar</a>.
      </p>
      {years.map((year) => (
        <section key={year} className="mt-12">
          <h2>{year}</h2>
          <ul className="space-y-6">
            {publications.map((p, i) =>
              p.year === year ? (
                <li key={p.id} className="numbered">
                  <span className="n">[{publications.length - i}]</span>
                  <Publication pub={p} />
                </li>
              ) : null
            )}
          </ul>
        </section>
      ))}
    </>
  );
}
