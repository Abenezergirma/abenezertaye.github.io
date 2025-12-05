'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { usePathname } from 'next/navigation';

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Show sidebar on all pages except homepage
  const showSidebar = pathname !== '/';

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - Always visible on all pages */}
      <Header />
      
      <div className="flex">
        {/* Sidebar - Fixed on left for desktop, hidden on mobile */}
        {showSidebar && (
          <div className="hidden lg:block fixed left-30 top-16 h-[calc(100vh-4rem)] w-80 bg-white border-r border-gray-200 z-30">
            <Sidebar />
          </div>
        )}
        
        {/* Main Content Area */}
        <main className={`flex-1 ${showSidebar ? 'lg:ml-80' : ''} min-h-screen`}>
          <div className="pt-16"> {/* Offset for fixed header */}
            <div className="p-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}