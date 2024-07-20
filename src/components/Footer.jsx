import React from 'react';
import logo1 from '../assets/restrepo.png'; // Asegúrate de tener estas imágenes en tu carpeta de assets
import logo2 from '../assets/sena.png';
import logo3 from '../assets/fondoEmprender.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-amber-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <img src={logo1} alt="Logo 1" className="w-12 h-12" />
          <img src={logo2} alt="Logo 2" className="w-12 h-12" />
          <img src={logo3} alt="Logo 3" className="w-12 h-12" />
        </div>
        <div>
          <a href="https://instagram.com" className="mr-4">Instagram</a>
          <a href="mailto:contacto@miaplicacion.com">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
