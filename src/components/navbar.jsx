import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-blue-500 shadow-md flex items-center px-6">
      {/* Logo */}
      <img
        src="https://www.mof4air.eu/wp-content/uploads/2022/06/General_Electric_logo.svg.png"
        alt="GE Logo"
        className="h-16 w-auto border-4 border-white rounded-full"
      />
    </nav>
  );
};

export default Navbar;
