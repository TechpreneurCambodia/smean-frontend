"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import NavBar from "@/components/NavBar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip } from "@mui/material";
import { UserProvider } from "@/contexts/userContext";

export default function Layout({ children }) {
  return (
    <UserProvider>
      <SidebarProvider defaultOpen={false}>
        <SidebarLayout>{children}</SidebarLayout>
      </SidebarProvider>
    </UserProvider>
  );
}

function SidebarLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
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
