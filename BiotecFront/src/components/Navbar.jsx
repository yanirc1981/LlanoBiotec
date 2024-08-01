import React from 'react';
import logo from '../assets/logoNegro.png'

function Navbar() {
  return (
    <nav className="bg-amber-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <img src={logo} alt="Logo" className="w-64 h-auto" /> {/* Ajusta el tamaño según necesites */}
        </div>
        <div className="space-x-4">
          <a href="#header" className="hover:underline">Home</a>
          <a href="#body" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
);
};

export default Navbar