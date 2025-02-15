import React from "react";

function FloatingInput({ type = "text", placeholder, name }) {
  return (
    <div className="relative z-0">
      <input
        type={type}
        id={placeholder.toLowerCase().replace(/\s+/g, "_")}
        name={name}
        className="block py-2.5 px-0 w-full text-sm text-heading text-darkGray bg-transparent border-0 border-b-2 border-black -white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor={placeholder.toLowerCase().replace(/\s+/g, "_")}
        className="absolute text-sm text-darkGray  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {placeholder}
      </label>
    </div>
  );
}

export default FloatingInput;
