import React from "react";

const InputField = ({ type, placeholder, name, value, onChange }) => {
  return (
    <>
    <p className="text-left text-sm my-2 text-darkGray">{placeholder}</p>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input input-bordered border border-primary w-full bg-white text-black"
    />
    </>
  );
};

export default InputField;