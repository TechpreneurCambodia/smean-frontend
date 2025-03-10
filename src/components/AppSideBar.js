import React, { useState, useEffect } from 'react'; // Updated import for useEffect
import {
  Home,
  FolderClosed,
  SquarePen,
  Search,
  Mic,
  Upload,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import AppSideBarFooter from "./AppSideBarFooter";

// Menu items.
const items = [
  {
    title: "ផ្ទះ",
    url: "/home",
    icon: Home,
  },
  {
    title: "សឺមីឯកសារ",
    url: "/folder",
    icon: FolderClosed,
  },
  {
    title: "ថតសំឡេងភ្លាមៗ",
    url: "/recordingpage",
    icon: Mic,
  },
  {
    title: "បញ្ចូលឯកសារ",
    url: "/upload",
    icon: Upload,
  },
];

// Sample chat history items (you can customize these URLs and titles).
const chatHistory = [
  { title: "លិខិតអេឡិចត្រូនិច", url: "/chat/1", timestamp: "2025-03-03 10:30" },
  { title: "ការបញ្ចូលឯកសារ", url: "/chat/2", timestamp: "2025-03-02 15:15" },
  { title: "សំណួរពី AMK", url: "/chat/3", timestamp: "2025-03-01 09:00" },
];

export function AppSidebar() {
  // State to track the active page, initialized safely on the client side
  const [activePath, setActivePath] = useState("/");

  // Set the active path on the client side when the component mounts
  useEffect(() => {
    setActivePath(window.location.pathname || "/");
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-row gap-5 items-center mb-4 ml-2">
            <SquarePen className="w-4 h-4 text-gray-500" />
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <SidebarGroupLabel>ម៉ឺនុយកម្មវិធី</SidebarGroupLabel>
          <hr className="border-gray w-full mb-2" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                        activePath === item.url
                          ? 'bg-secondary70 text-primary font-medium  hover:bg-secondary70 hover:text-primary'
                          : 'font-medium hover:bg-secondary70 hover:text-primary'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivePath(item.url);
                        window.location.href = item.url; // Navigate (replace with router if using one)
                      }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel className="mt-5">ប្រវិត្តរបស់អ្នក</SidebarGroupLabel>
          <hr className="border-gray w-full mb-2" />
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.map((chat) => (
                <SidebarMenuItem key={chat.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={chat.url}
                      className="flex flex-row p-2 text-gray-600 hover:bg-smean-blue/20 hover:text-smean-blue rounded-lg transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = chat.url; // Navigate (replace with router if using one)
                      }}
                    >
                      <span className="text-base font-medium">{chat.title}</span>
                      {/* <span className="text-xs text-gray-500">{chat.timestamp}</span> */}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* reomove siderbar */}
    </Sidebar>
  );
}