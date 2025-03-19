"use client";
import React from "react";
import { FaBook } from "react-icons/fa";
import { useSidebar } from "@/components/ui/sidebar";

function Header() {
  const { isHeaderMoved } = useSidebar();
  return (
    <header
      className={`flex items-center p-4 bg-background shadow-md transition-transform duration-500 ${
        isHeaderMoved ? "ml-0" : "ml-0 md:ml-[16rem]"
      }`}
    >
      <FaBook className="text-xl text-black" />
      <h1 className="ml-2 text-lg font-semibold text-primary">ស្មៀន / Smean</h1>
    </header>
  );
}

export default Header;
