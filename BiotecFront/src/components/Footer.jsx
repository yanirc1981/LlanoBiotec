import React from 'react';
import logo1 from '../assets/restrepo.png';
import logo2 from '../assets/sena.png';
import logo3 from '../assets/fondoEmprender.png';
import { FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-600 p-4 text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <img src={logo1} alt="Logo 1" className="w-16 h-16 sm:w-24 sm:h-24" />
          <img src={logo2} alt="Logo 2" className="w-16 h-16 sm:w-24 sm:h-24" />
          <img src={logo3} alt="Logo 3" className="w-16 h-16 sm:w-24 sm:h-24" />
        </div>
        <div className="flex flex-col sm:items-end items-center space-y-4 sm:space-y-0 sm:mr-8 lg:mr-32">
          <a href="/terms-and-conditions" className="text-white hover:underline mb-2 sm:mb-0">
            Términos y Condiciones
          </a>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/llanobiotec_sas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-8 w-8 text-white" />
            </a>
            <a href="https://www.facebook.com/Llanobiotecsas" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-8 w-8 text-white" />
            </a>
            <a href="mailto:llanobiotecsas@gmail.com">
              <FaEnvelope className="h-8 w-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



