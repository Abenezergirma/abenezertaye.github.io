"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import { usePathname } from "next/navigation";

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Sidebar is hidden only on home page
  const showSidebar = pathname !== "/";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header – always visible */}
      <ScrollProgress />
      <Header />

      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <aside
            className="
              hidden lg:block
              fixed top-16 left-10 
              h-[calc(100vh-4rem)]
              w-80
              bg-white
              border-r border-gray-200
              z-30
            "
          >
            <Sidebar />
          </aside>
        )}

        {/* MAIN CONTENT */}
        <main
          className={`
            flex-1 min-h-screen
            pt-16  /* space for header */
            ${showSidebar ? "lg:ml-80" : ""}
          `}
        >
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}