"use client"
import React, { useState } from 'react';
import {ChevronDown} from "lucide-react";

function MinuteOption() {
  
  const [selectedChoice, setSelectedChoice] = useState('open or close');

  const handleSelection = (choice) => {
    setSelectedChoice(choice); 
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">{selectedChoice}</summary>
        <ul className="text-white menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a onClick={() => handleSelection('5 នាទី')}>5 នាទី</a>
          </li>
          <li>
            <a onClick={() => handleSelection('20 នាទី')}>20 នាទី</a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default MinuteOption;