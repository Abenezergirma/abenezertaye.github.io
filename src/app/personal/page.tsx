import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Personal Interests' };

const photos = [
  { src: '/images/site/soccer.jpg', alt: 'Playing soccer', caption: 'Playing soccer – Washington, DC' },
  { src: '/images/site/biking.jpg', alt: 'Biking in Washington, DC', caption: 'Biking – Washington, DC' },
  { src: '/images/site/hiking.jpg', alt: 'Hiking in Harpers Ferry', caption: 'Hiking – Harpers Ferry, West Virginia' },
];

export default function Personal() {
  return (
    <>
      <h1>Personal Interests</h1>
      <p>
        When I&rsquo;m not working on my research, I like to spend time outdoors biking, hiking, and flying airplanes. I
        also enjoy running, playing soccer, and reading nonfiction books.
      </p>

      <figure className="mt-10">
        <Image
          src="/images/site/aircraft_flying.jpg"
          alt="Flying a general aviation aircraft"
          width={1680}
          height={1260}
          priority
        />
        <figcaption>Learning to fly</figcaption>
      </figure>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {photos.map((p) => (
          <figure key={p.src}>
            <Image src={p.src} alt={p.alt} width={1680} height={1260} className="aspect-[4/3] object-cover" priority />
            <figcaption>{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
