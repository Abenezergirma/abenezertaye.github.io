'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Teaching', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  // { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const id = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname, mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <nav className="container-custom" aria-label="Global">
          <div className="flex items-center justify-between h-16"> 
            {/* Logo */}
            <div className="flex">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center group-hover:bg-green-800 transition-colors duration-200">
                  <span className="text-white font-bold text-lg">AT</span>
                </div>
                <div className="hidden sm:block">
                  <span className="font-semibold text-gray-900 block text-sm">Abenezer Taye</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Always visible */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-200 relative py-2",
                      isActive 
                        ? "text-green-900 font-semibold" 
                        : "text-gray-700 hover:text-green-900"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-900 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button - Only visible on mobile */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Separate component for better control */}
      <div className={cn(
        'lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-out',
        mobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      )}>
        {/* Backdrop overlay */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Menu panel */}
        <div className={cn(
          'fixed inset-y-0 right-0 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className="h-full overflow-y-auto">
            {/* Menu header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AT</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Abenezer Taye</h3>
                  <p className="text-sm text-gray-600">Vanderbilt University</p>
                </div>
              </div>
            </div>

            {/* Navigation links */}
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
                      <div className="ml-auto w-2 h-2 bg-green-900 rounded-full"></div>
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