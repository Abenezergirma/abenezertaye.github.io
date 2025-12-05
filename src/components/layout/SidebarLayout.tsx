'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface SidebarLink {
  href: string;
  label: string;
}

interface SidebarLayoutProps {
  children: ReactNode;
  sidebarContent?: ReactNode;
}

const sidebarLinks: SidebarLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/contact', label: 'Contact' },
];

export default function SidebarLayout({ children, sidebarContent }: SidebarLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      {/* Page-Specific Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">

          {/* Navigation */}
          <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                      pathname === link.href
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`h-4 w-4 ${
                        pathname === link.href ? 'text-blue-500' : 'text-gray-400'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {sidebarContent}
        </div>
      </div>

      {/* Main page content */}
      <div className="lg:col-span-3">
        {children}
      </div>
    </div>
  );
}
