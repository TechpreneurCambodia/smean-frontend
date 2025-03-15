'use client';

import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSideBar';
import NavBar from '@/components/NavBar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import ProtectedRoute from './ProtectedRoute';
import { Tooltip } from '@mui/material';

export default function Layout({ children }) {
  return (
    <ProtectedRoute>
      <SidebarProvider defaultOpen={false}>
        <SidebarLayout children={children} />
      </SidebarProvider>
    </ProtectedRoute>
  );
}

function SidebarLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle sidebar toggle (to be passed to SidebarTrigger)
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow">
      <div className="w-full bg-base-100">
        {/* Pass isSidebarOpen as a prop to NavBar */}
        <NavBar isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="flex flex-grow bg-base-100">
        {/* Sidebar */}
        <AppSidebar isOpen={isSidebarOpen} /> {/* Pass the state to AppSidebar if it needs it */}
        <div className="flex flex-col flex-grow px-4 sm:px-6 md:px-12 lg:px-24 overflow-auto relative">
          {/* SidebarTrigger with sliding animation and toggle handler */}
          <Tooltip title="បើក/បិទសឺមី" arrow>
            <SidebarTrigger
              className="absolute top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md transform translate-x-0 transition-transform duration-300 ease-in-out hover:translate-x-1"
              onClick={handleSidebarToggle} // Toggle the sidebar state
            />
          </Tooltip>

          {children}
        </div>
      </div>
    </div>
  );
}