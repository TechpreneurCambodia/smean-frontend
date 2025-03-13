"use client"
import React, { useState } from 'react';
import {ChevronDown, ChevronUp} from "lucide-react";

function MinuteOption() {
  
  const [selectedChoice, setSelectedChoice] = useState('កំណត់ពេលវេលាថត');

  const handleSelection = (choice) => {
    setSelectedChoice(choice); 
  };

  return (
    <div>
      <details className="dropdown">
        <ChevronDown />
        <ChevronUp />
        <summary className="btn m-1">{selectedChoice}</summary>
        <ul className="text-black menu dropdown-content border-2 border-black bg-primary70 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a  onClick={() => handleSelection('3 នាទី')}>3 នាទី</a>
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