import React from 'react';
import image from '../assets/banner.png';

const Header = () => {
  return (
    <header className="relative h-screen mt-16 overflow-hidden">
      {/* Contenedor para el fondo con la imagen en movimiento */}
      <div
        className="relative h-1/2 w-full bg-cover bg-center animation-moveBackground"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
      <div className="relative h-1/2 bg-white p-8 flex flex-col items-center justify-center">
        {/* Aquí puedes agregar tus tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Título de la Tarjeta</h2>
            <p className="mt-2">Contenido de la tarjeta.</p>
          </div>
          {/* Repite el bloque de tarjeta según sea necesario */}
        </div>
      </div>
    </header>
  );
};

export default Header;






