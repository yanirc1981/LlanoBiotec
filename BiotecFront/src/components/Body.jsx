import React from 'react';
import image from '../assets/banner.png';

import TabbedImages from './TabbedImages';
import FlipCards from './FlipCards';
import MapaLlanos from './MapaLlanos';
import Photo_1 from '../assets/vacasVarias.jpg'
import Photo_2 from '../assets/imgLlano.jpg'

function Body() {
  return (
    <main className="p-16">
 <section id="about" className="mb-8">
 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-700 mb-3 bg-orange-400 p-8 text-center mt-16">
    Distribuidor de importantes Casas de Genética Bovina y respaldado por las mejores marcas en implementos, medicamentos hormonales y productos para salud reproductiva bovina.
  </h1>
  <img src={image} alt="About us" className="w-full h-auto mb-24 mt-24 rounded-lg" />
  
  <div>
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-700 mb-3 bg-orange-400 p-8 text-center mt-16">Nivel Productivo y Reproductivo a Máxima Capacidad.</h1>
  <FlipCards/>
  </div>
  {/* <img src={image2} alt="About us" className="w-full h-auto mt-4" /> */}
  <TabbedImages />
</section>



      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Card 1" description="This is the description for card 1." imageSrc="../public/biotec.png" />
        <Card title="Card 2" description="This is the description for card 2." imageSrc="../public/biotec.png" />
        <Card title="Card 3" description="This is the description for card 3." imageSrc="../public/biotec.png" />
      </section>

      <section>
  <div className="py-10">
    <div className="flex flex-wrap justify-center mb-6">
      <div className="hidden lg:block h-1 w-64 mr-10 bg-customGreen"></div>
      <h1 green={true} styleAdd="py-2">
        Conocenos
      </h1>
      <div className="h-1 w-64 lg:ml-10 bg-customGreen"></div>
    </div>

    <div className="lg:flex lg:flex-col lg:items-center">
      <div className="text-center lg:w-3/5 lg:mx-auto mb-6 px-5">
        <p>
          Somos una empresa dedicada a la producción de leche con los mejores estándares de calidad. También somos educación tecnología, turismo y producción para la evolución de la región llanera y de Restrepo Meta. Con LLanoBioTec tendrás asegurada una calidad inigualable, nos destacamos por el manejo de buenas prácticas donde se hará la implementación de varios procesos con tecnología de ultima calidad en el mercado.
          Buen ganado, buena leche y buena carne, no busques más.
        </p>
        <p>
          Somos una empresa dedicada a la producción de leche con los mejores estándares de calidad. También somos educación tecnología, turismo y producción para la evolución de la región llanera y de Restrepo Meta.
          Villavicencio, Meta, Colombia · Cumaralito, Meta, Colombia · Guacavia, Cundinamarca, Colombia · Parate Paratebueno, Arauca, Colombia · Paratebueno, Colombia · Cumaral, Meta, Colombia · Restrepo, Meta, Colombia
        </p>
      </div>

      <div className="lg:flex lg:justify-center lg:w-4/5 lg:mx-auto">
        <div className="flex flex-col items-center lg:w-1/2 p-5">
          <img src={Photo_2} alt="Grupo de fotos" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flex items-center lg:w-1/2 p-5">
          <MapaLlanos />
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="relative w-full h-64 perspective">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-face card-front rounded-lg">
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
          <img src={imageSrc} alt="Card Background" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Body;

