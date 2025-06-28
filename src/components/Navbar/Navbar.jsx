// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 md:px-20">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500 rounded-xl w-12 h-12 flex justify-center items-center">
          <span className="text-white text-xl">✈️</span>
        </div>
        <div>
          <h1 className="text-xl font-bold">Via Bhraman</h1>
          <p className="text-sm text-gray-600">Explore new lands</p>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
        <li className="text-yellow-600 font-semibold relative">
          Home <span className="absolute top-0 right-[-12px]">⌄</span>
        </li>
        <li>Tour List ⌄</li>
        <li>Destination ⌄</li>
        <li>Pages ⌄</li>
        <li>Blog ⌄</li>
        <li>Contact Us</li>
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        <span className="text-xl">🔍</span>
        <span className="text-xl">❤️</span>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-xl">👤</span>
          <span className="font-medium">Login/Register</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
