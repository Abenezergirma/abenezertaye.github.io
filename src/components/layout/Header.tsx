'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Notes', href: '/notes' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Removed useEffect that closes menu on route change

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Header */}
      {/* Top Header - Green with White Text */}
      <header className="bg-[#0B6A6C] text-white fixed top-0 left-0 right-0 z-50 shadow">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Logo - Simple Text */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-gray-200 transition-colors" style={{ fontFamily: 'var(--font-eb-garamond)' }}>
                Abenezer G. Taye
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-all duration-200 relative py-2",
                      isActive
                        ? "text-white font-semibold border-b-2 border-white"
                        : "text-gray-100 hover:text-white"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}

                    {/* Underline handled by border-b-2 above */}
                  </Link>
                );
              })}
            </div>
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-all duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Dark Background */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide Panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 w-72 bg-white shadow-xl transform transition-transform duration-300 z-60",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full overflow-y-auto">

            {/* Panel Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow">
                  <span
                    className="text-xl font-semibold"
                    style={{ fontFamily: "var(--font-eb-garamond)", color: "#0B3C3D" }}
                  >
                    AT
                  </span>
                </div>



                <div>
                  <h3 className="font-bold text-gray-900">Abenezer Taye</h3>
                  <p className="text-sm text-gray-600">Vanderbilt University</p>
                </div>
              </div>

              <button
                className="p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-green-50 text-green-900 border-l-4 border-green-900"
                        : "text-gray-700 hover:bg-gray-50 hover:text-green-900"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-green-900 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
