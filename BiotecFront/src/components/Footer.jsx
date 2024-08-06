import React from 'react';
import logo1 from '../assets/restrepo.png'; // Asegúrate de tener estas imágenes en tu carpeta de assets
import logo2 from '../assets/sena.png';
import logo3 from '../assets/fondoEmprender.png';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer  className="bg-amber-600 p-4 text-white py-4">
       <div className="container mx-auto flex flex-col items-center space-y-2">
        <div className="flex space-x-4 mb-2">
          <img src={logo1} alt="Logo 1" className="w-64 h-64" />
          <img src={logo2} alt="Logo 2" className="w-64 h-64" />
          <img src={logo3} alt="Logo 3" className="w-64 h-64" />
        </div>
        <div className="text-center mb-2">
          <a href="/terms-and-conditions" className="text-white hover:underline">
            Términos y Condiciones
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/llanobiotec_sas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-8 w-8 text-white" />
          </a>
          <a href="mailto:contact@example.com">
            <FaEnvelope className="h-8 w-8 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
