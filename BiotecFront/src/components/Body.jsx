
import image from '../assets/banner.png';

import TabbedImages from './TabbedImages';
import FlipCards from './FlipCards';
import MapaLlanos from './MapaLlanos';
import Photo_2 from '../assets/imgLlano.png'

import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

function Body() {
  return (
    <main className="p-16">
 <section id="about" className="mb-8">
 <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-zinc-200 mb-3 bg-fondo p-8 text-center mt-16">
 Nos comprometemos a proporcionar leche de alta calidad y ganado saludable que cumplan con las demandas del mercado local y nacional.
  </h1>
  <img src={image} alt="About us" className="w-full h- mb-24 mt-24 rounded-lg" />
  
  <div>
  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-zinc-200 mb-3 bg-fondo p-8 text-center mt-16">Nos esforzamos por fomentar prácticas agrícolas sostenibles y responsables, contribuyendo al desarrollo económico y social de nuestra comunidad.</h1>
  <FlipCards/>
  </div>
  {/* <img src={image2} alt="About us" className="w-full h-auto mt-4" /> */}
  <TabbedImages />
</section>


<section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
  <Card title="Card 1" description="This is the description for card 1." imageSrc={img1} />
  <Card title="Card 2" description="This is the description for card 2." imageSrc={img2} />
  <Card title="Card 3" description="This is the description for card 3." imageSrc={img3} />
</section>


      <section id="quienesSomos">
  <div className="py-10 ">
    <div className="flex flex-wrap justify-center mb-6 ">
    <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-700 mb-3 p-6 text-center mt-16">
    Conocenos
  </h6>
    </div>

    <div className="lg:flex lg:flex-col lg:items-center">
      <div className="text-center lg:w-4/5 lg:mx-auto mb-6 px-5">
      <p className="text-xl lg:text-2xl leading-relaxed  text-gray-700">
      <span className='font-bold text-fondo text-2xl'>Nuestra Misión:</span> Destacar como la principal empresa en la producción y comercialización de ganado adaptado al trópico bajo. Nos comprometemos a proporcionar leche de alta calidad y ganado saludable que cumplan con las demandas del mercado local y nacional. Asimismo, nos esforzamos por fomentar prácticas agrícolas sostenibles y responsables, contribuyendo al desarrollo económico y social de nuestra comunidad.<br></br>

      <span className='font-bold text-fondo text-2xl'>Nuestra Visión:</span> Ser referentes en la producción y comercialización agropecuaria en el trópico bajo, haciendo de la ganadería una actividad moderna, rentable, solidaria, ambientalmente sostenible y socialmente responsable. Proporcionamos leche de alta calidad y ganado adaptado a las condiciones climáticas de la región.<br></br> 
      <span className='font-bold text-fondo text-2xl'>Nuestro Compromiso:</span> firme con la responsabilidad ambiental y el bienestar animal es esencial. Aspiramos a expandir nuestro alcance a nivel nacional, estableciendo alianzas estratégicas y adaptándonos a las necesidades del mercado, para el bienestar del ganadero y del país, y para seguir siendo un referente de excelencia en la industria agropecuaria.
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
    <div className="relative w-full h-80 perspective">
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

