"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp, TimerIcon } from "lucide-react";

function MinuteOption({ onSelect }) {
  const [selectedChoice, setSelectedChoice] = useState('សង្ខេបអត្ថបទ៖ 3 នាទី ម្តង');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (minutes) => {
    setSelectedChoice(`សង្ខេបអត្ថបទ៖ ${minutes} នាទី ម្តង`);
    setIsOpen(false);
    if (onSelect) {
      onSelect(minutes);
    }
  };

  return (
    <div className='w-[300px] items-center justify-center m-0'>
      <details
        className="dropdown"
        open={isOpen}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary className="w-[300px] shadow-md text-normal btn m-0 font-medium bg-base-100 border border-primary text-primary flex items-center justify-between">
          <span className='flex flex-row justify-center items-center gap-2'><TimerIcon/>{selectedChoice}</span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </summary>
        <ul className="w-full text-primary font-medium menu border border-primary dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow ">
          <li>
            <a onClick={() => handleSelection(1)}>
              1 នាទី
            </a>
          </li>
          <li>
            <a onClick={() => handleSelection(3)}>
              3 នាទី
            </a>
          </li>
          <li>
            <a onClick={() => handleSelection(5)}>
              5 នាទី
            </a>
          </li>
          <li>
            <a onClick={() => handleSelection(10)}>
              10 នាទី
            </a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default MinuteOption;