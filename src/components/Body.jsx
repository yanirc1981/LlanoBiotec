import React from 'react';
import image from '../assets/banner.png';

function Body() {
  return (
    <main className="p-8">
      <section id="about" className="mb-8">
        <h2 className="text-2xl mb-4">Acerca de Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>
        <img src={image} alt="About us" className="w-full h-auto mt-4" /> {/* Asegúrate de tener esta imagen en tu carpeta de assets */}
      </section>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Card 1" description="This is the description for card 1." />
        <Card title="Card 2" description="This is the description for card 2." />
        <Card title="Card 3" description="This is the description for card 3." />
      </section>
    </main>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="relative w-full h-64 bg-blue-500 text-white flex items-center justify-center cursor-pointer group perspective">
      <div className="absolute inset-0 bg-amber-900 group-hover:rotate-y-180 backface-hidden transition-transform duration-700 flex items-center justify-center">
        <div>
          <h3 className="text-xl">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-amber-900 rotate-y-180 backface-hidden transition-transform duration-700 flex items-center justify-center">
        <img src="./assets/card-image.jpg" alt="Card Image" className="w-full h-full object-cover" /> {/* Asegúrate de tener esta imagen en tu carpeta de assets */}
      </div>
    </div>
  );
};

export default Body