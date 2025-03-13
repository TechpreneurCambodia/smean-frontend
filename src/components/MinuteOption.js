"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

function MinuteOption() {
  // Set initial state with full text format
  const [selectedChoice, setSelectedChoice] = useState('សង្ខេបអត្ថបទ៖ 3 នាទី ម្តង');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (minutes) => {
    // Format the selection with the prefix and suffix
    setSelectedChoice(`សង្ខេបអត្ថបទ៖ ${minutes} ម្តង`);
    setIsOpen(false);
  };

  return (
    <div>
      <details 
        className="dropdown" 
        open={isOpen}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary className="btn font-medium bg-white border-2 border-primary text-primary m-1 flex items-center justify-between">
          <span>{selectedChoice}</span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </summary>
        <ul className="text-primary font-medium menu border-2 border-primary dropdown-content bg-white rounded-box z-[1] w-[200px] p-2 shadow ml-1">
          <li>
            <a onClick={() => handleSelection('3 នាទី')}>
              3 នាទី
            </a>
          </li>
          <li>
            <a onClick={() => handleSelection('5 នាទី')}>
              5 នាទី
            </a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default MinuteOption;