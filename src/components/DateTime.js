"use client"; // ✅ Fix for Next.js

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now
        .toLocaleString("en-GB", { 
          day: "2-digit", month: "2-digit", year: "numeric",
          hour: "2-digit", minute: "2-digit",
          hour12: false // 24-hour format
        })
        .replace(",", ""); // Removes the comma between date and time

      setDateTime(formattedDateTime);
    };

    updateDateTime(); // Run immediately
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium">{dateTime}</span>
    </div>
  );
};

export default DateTime;
