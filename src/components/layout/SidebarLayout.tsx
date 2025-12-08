'use client';

import { ReactNode } from 'react';



interface SidebarLayoutProps {
  children: ReactNode;
  sidebarContent?: ReactNode;
}



export default function SidebarLayout({ children, sidebarContent }: SidebarLayoutProps) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
      
      {/* Page-Specific Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">

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
