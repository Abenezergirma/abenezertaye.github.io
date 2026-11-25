import type { Metadata } from 'next';
import Image from 'next/image';
import { findPub, projects, type Figure } from '@/lib/data';
import Publication from '@/components/Publication';

export const metadata: Metadata = { title: 'Research' };

function ProjectFigure({ fig }: { fig: Figure }) {
  return (
    <figure className="figure" style={{ maxWidth: fig.display }}>
      {fig.video ? (
        <video controls muted loop playsInline preload="none" poster={fig.src} width={fig.width} height={fig.height} aria-label={fig.alt}>
          <source src={fig.video} type="video/mp4" />
        </video>
      ) : (
        <Image src={fig.src} alt={fig.alt} width={fig.width} height={fig.height} />
      )}
      <figcaption>{fig.caption}</figcaption>
    </figure>
  );
}

export default function Research() {
  return (
    <>
      <h1>Research</h1>
      {projects.map((project, i) => (
        <section key={project.slug} id={project.slug}>
          {i > 0 && <hr />}
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
          {project.figures.map((fig) => (
            <ProjectFigure key={fig.src} fig={fig} />
          ))}
          <ul className="space-y-5">
            {project.papers.map((title) => (
              <li key={title}>
                <Publication pub={findPub(title)} showCode={false} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
