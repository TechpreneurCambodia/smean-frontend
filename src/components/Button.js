"use client";
import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick }) => {
  return (
    // <button className="btn btn-primary w-full bg-primary text-white border-none" onClick={onClick}>
    //   {text}
    // </button>

    /* From Uiverse.io by ItsEnigma143 */
    <motion.div
    className="w-full bg-transparent flex items-center justify-center border-2 border-primary shadow-lg text-primary cursor-pointer duration-300 rounded-md hover:bg-primary hover:text-white active:scale-[0.98]"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <button className="px-5 py-2" onClick={onClick}>
      {text}
    </button>
  </motion.div>
  );
};

export default Button;
