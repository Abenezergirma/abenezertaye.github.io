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
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <ScrollProgress />
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        {showSidebar && (
          <aside
            className="
              hidden lg:block
              w-80
              ml-10 /* Added left margin for distance from edge */
              bg-white
              border-r border-gray-200
              z-30
              shrink-0
              sticky top-16 
              h-[calc(100vh-4rem)] 
              overflow-y-auto
              rounded-r-lg 
              shadow-sm
            "
          >
            <Sidebar />
          </aside>
        )}

        {/* MAIN CONTENT */}
        <main
          className={`
            flex-1
            pt-16  /* space for header */
            ${showSidebar ? "" : ""}
            min-h-[calc(100vh-8rem)] /* Ensure minimum height */
            px-8 /* Add horizontal padding */
          `}
        >
          <div className="max-w-7xl mx-auto"> {/* Optional: constrain max width */}
            {children}
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}