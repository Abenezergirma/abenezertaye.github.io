'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/lib/data';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Talks', href: '/things' },
  { name: 'Personal', href: '/personal' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const here = pathname.replace(/(.)\/$/, '$1');

  return (
    <header className="site-header">
      <Link href="/" className="site-name">
        {profile.name}
      </Link>
      <nav className="site-nav" aria-label="Main">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} aria-current={here === item.href ? 'page' : undefined}>
            {item.name}
          </Link>
        ))}
        <a href={profile.cv}>CV</a>
      </nav>
    </header>
  );
}
