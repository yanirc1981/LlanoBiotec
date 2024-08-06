import React from 'react';
import image from '../assets/banner.png';
import image2 from '../../public/llanoBaner.png'

function Body() {
  return (
    <main className="p-8">
      <section id="about" className="mb-8">
        <h2 className="text-2xl mb-4">Acerca de Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>
        <img src={image} alt="About us" className="w-full h-auto mt-4" />
        <img src={image2} alt="About us" className="w-full h-auto mt-4" />
      </section>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Card 1" description="This is the description for card 1." imageSrc="../public/biotec.png" />
        <Card title="Card 2" description="This is the description for card 2." imageSrc="../public/biotec.png" />
        <Card title="Card 3" description="This is the description for card 3." imageSrc="../public/biotec.png" />
      </section>
    </main>
  );
};

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="relative w-full h-64 perspective">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-face card-front">
          <div>
            <h3 className="text-xl">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-face card-back p-4">
          <p>{description}</p>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={imageSrc} alt="Card Background" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Body;

