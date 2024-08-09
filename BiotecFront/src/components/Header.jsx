import React, { useState, useEffect } from 'react';
import image1 from '../assets/vaca3.jpg';


const Header = () => {
  const images = [image1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative h-screen overflow-hidden hidden md:block">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
    </header>
  );
};

export default Header;











