import Image from 'next/image';
import { findPub, profile, selected } from '@/lib/data';
import Publication from '@/components/Publication';

export default function Home() {
  return (
    <>
      <section className="intro">
        <div className="prose">
          <p>
            I&rsquo;m a postdoctoral scholar at the{' '}
            <a href="https://www.isis.vanderbilt.edu/">Institute for Software Integrated Systems</a> at Vanderbilt
            University, where I work with <a href="https://my.vanderbilt.edu/bryancward/">Prof. Bryan C. Ward</a> and{' '}
            <a href="https://my.vanderbilt.edu/gautambiswas/">Prof. Gautam Biswas</a>. I received my Ph.D. in Aerospace
            Engineering from The George Washington University, advised by{' '}
            <a href="https://web.seas.gwu.edu/pwei/">Prof. Peng Wei</a>, where I studied safety and decision-making in
            autonomous aircraft operations. My research sits at the intersection of control theory, optimization, and
            artificial intelligence, with a focus on developing algorithms that enable safe, secure, and reliable
            next-generation air transportation systems.
          </p>
          <p>
            During my time at GW, I was part of{' '}
            <a href="https://www.nasa.gov/directorates/armd/aosp/sws/">NASA&rsquo;s System-Wide Safety program</a>,
            contributing to research on the safe integration of autonomous aircraft into the national airspace. In
            addition, I served as a Teaching Assistant for{' '}
            <a href="https://bulletin.gwu.edu/courses/mae/">MAE 4182: Electromechanical Controls</a>. I also completed
            two research internships at <a href="https://www.mathworks.com/">MathWorks</a>, where I worked on
            multi-agent perception and trajectory planning.
          </p>
          <p>
            Currently, my work focuses on securing aerospace systems. I develop methods to identify vulnerabilities in
            autonomous aviation platforms and design defense strategies against cyberattacks, with the goal of building
            autonomy that is safe and trustworthy.
          </p>
        </div>

        <div className="aside">
          <Image className="portrait" src="/images/image.jpg" alt="Abenezer G. Taye" width={621} height={620} priority />
          <div className="contact">
            <p className="email">{profile.email}</p>
            <p>
              <a className="text" href={profile.scholar}>Google Scholar</a>
              <br />
              <a className="text" href={profile.github}>GitHub</a>
              <br />
              <a className="text" href={profile.linkedin}>LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      <figure className="mt-14">
        <Image
          src="/images/site/flight-test.jpg"
          alt="A multirotor aircraft hovers over a field in front of a tent where the test team is standing"
          width={1800}
          height={872}
        />
        <figcaption>Flight test, July 2024.</figcaption>
      </figure>

      <section className="mt-16">
        <h2>Selected Research</h2>
        <ul className="mt-8 space-y-10">
          {selected.map((s) => (
            <li key={s.title} className="selected-item">
              <div className="thumb">
                <Image src={s.image} alt="" width={s.width} height={s.height} />
              </div>
              <Publication pub={findPub(s.title)} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
