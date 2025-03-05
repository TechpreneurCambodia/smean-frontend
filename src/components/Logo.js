import React from 'react';
const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Logo Image */}
      <img
        src={"https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"} // Replace with your logo path
        alt="Logo"
        className="h-24 w-24 " // Adjust size as needed
      />
      {/* Logo Name */}
      {/* <span className="text-2xl font-bold text-gray-800">Smean</span> */}
    </div>
  );
};

export default Logo;