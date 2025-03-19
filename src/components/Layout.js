"use client";

import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import NavBar from "@/components/NavBar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip } from "@mui/material";

export default function Layout({ children }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <SidebarLayout>{children}</SidebarLayout>
    </SidebarProvider>
  );
}
function SidebarLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  useEffect(() => {
    // Keep sidebar state persistent by storing in localStorage
    const savedState = localStorage.getItem("sidebarState");
    if (savedState !== null) {
      setIsSidebarOpen(JSON.parse(savedState));
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => {
      localStorage.setItem("sidebarState", JSON.stringify(!prev)); // Save state
      return !prev;
    });
  };

  return (
    <div className="flex flex-col w-screen min-h-screen">
      {" "}
      {/* Changed h-screen to min-h-screen */}
      <div className="w-full bg-base-100">
        <NavBar isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="flex flex-grow bg-base-100">
        <AppSidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-grow px-4 sm:px-6 md:px-12 lg:px-24 overflow-auto relative">
          <Tooltip title="បើក/បិទសឺមី" arrow>
            <SidebarTrigger
              className="absolute top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md transform translate-x-0 transition-transform duration-300 ease-in-out hover:translate-x-1"
              onClick={handleSidebarToggle}
            />
          </Tooltip>
          {children}
        </div>
      </div>
    </div>
  );
}
