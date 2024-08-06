import React, { useState, useEffect } from 'react';
import image1 from '../../public/imgLLano.png';
//import image2 from '../../public/llanoBaner.png';

const Header = () => {
  const images = [image1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative h-screen header-container overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
    </header>
  );
};

export default Header;











