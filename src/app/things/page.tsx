import type { Metadata } from 'next';
import { vcpsChapters } from '@/lib/data';

export const metadata: Metadata = { title: 'Things' };

export default function Things() {
  return (
    <>
      <h1>Things</h1>

      <section className="mt-10">
        <h2>Ph.D. Defense</h2>
        <p>
          <a
            className="text"
            href="https://docs.google.com/presentation/d/1w2aAPsw9pp3_g2LhY6R7q_HyjHYob2Cm/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enhancing Safety and Energy-Efficiency in Advanced Air Mobility Through Trajectory Planning and Mission
            Feasibility Assessment Strategies
          </a>
        </p>
        <p>
          <em>The George Washington University</em>
        </p>
      </section>

      <section className="mt-14">
        <h2>
          Seminar: <em>Verifying Cyber-Physical Systems</em>
        </h2>
        <p className="mb-6">
          I initiated, designed, and taught an informal seminar based on Prof. Sayan Mitra&rsquo;s book{' '}
          <a
            className="text"
            href="https://mitpress.mit.edu/9780262044806/verifying-cyber-physical-systems/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Verifying Cyber-Physical Systems</em>
          </a>
          . The group met monthly and was primarily intended for Ph.D. students interested in safety-critical
          cyber-physical systems research.
        </p>
        <ul className="space-y-2">
          {vcpsChapters.map((ch) => (
            <li key={ch.pdf} className="sm:grid sm:grid-cols-[8.5rem_1fr]">
              <span className="block">{ch.label}</span>
              <a className="text" href={ch.pdf} target="_blank" rel="noopener noreferrer">
                {ch.titles.join('; ')}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2>B.Sc. Thesis</h2>
        <p>
          <a className="text" href="/pdf/bsc_thesis.pdf" target="_blank" rel="noopener noreferrer">
            Design and Control of an Autonomous Forklift for EPHARM Pharmaceuticals
          </a>
        </p>
        <p>
          <em>Addis Ababa Science and Technology University</em>
        </p>
      </section>
    </>
  );
}
