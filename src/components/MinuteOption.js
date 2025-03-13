"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

function MinuteOption() {
  const [selectedChoice, setSelectedChoice] = useState('កំណត់ពេលវេលាថត');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (choice) => {
    setSelectedChoice(choice);
    setIsOpen(false);
  };

  return (
    <div>
      <details 
        className="dropdown" 
        open={isOpen}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary className="btn border-none bg-primary texz m-1 flex items-center justify-between">
          <span>{selectedChoice}</span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </summary>
        <ul className="text-white font-bold menu dropdown-content bg-primary rounded-box z-[1] w-48 p-2 shadow ml-1">
          <li>
            <a onClick={() => handleSelection('3 នាទី')}>3 នាទី</a>
          </li>
          <li>
            <a onClick={() => handleSelection('5 នាទី')}>5 នាទី</a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default MinuteOption;