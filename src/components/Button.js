"use client";
import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-primary w-full bg-primary text-white" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;