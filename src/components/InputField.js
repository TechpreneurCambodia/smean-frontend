import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <>
    <p className="text-left text-sm mt-6 mb-6 text-darkGray">{placeholder}</p>
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered border border-primary w-full bg-white text-black"
    />
    </>
  );
};

export default InputField;