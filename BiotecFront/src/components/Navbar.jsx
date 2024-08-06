import React from 'react';
import logo from '../assets/logoNegro.png';

function Navbar() {
  return (
    <>
      <nav className="bg-amber-600 text-white p-4 fixed top-0 w-full z-50 mb-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-64 h-auto" />
          </div>
          <div className="space-x-6">
            <a
              href="/"
              className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white"
            >
              Home
            </a>
            <a
              href="#body"
              className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white"
            >
              Quienes Somos
            </a>
            <a
              href="#contact"
              className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white"
            >
              Contacto
            </a>
            <a
              href="/panel"
              className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white"
            >
              Panel
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


