import React from "react";

const InputField = ({ type, placeholder, name, value, onChange ,...props}) => {
  return (
    <>
    <p className="text-left text-sm my-2 text-darkGray">{placeholder}</p>
    <input
      type={type}
      name={name}
      autoComplete="on"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
      className="input input-bordered border border-primary w-full bg-white text-black"
    />
    </>
  );
};

export default InputField;