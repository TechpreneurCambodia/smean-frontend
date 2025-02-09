import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <>
    <p className="text-left text-sm mt-4 text-darkGray">{placeholder}</p>
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full bg-gray text-black"
    />
    </>
  );
};

export default InputField;