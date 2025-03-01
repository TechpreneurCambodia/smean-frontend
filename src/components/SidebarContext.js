// 'use server'
// SidebarContext.js
'use client'
import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext({
  isSidebarOpen: false,
  setSidebarOpen: () => {},
});

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
