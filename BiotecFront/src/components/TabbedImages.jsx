import { useState } from 'react';
import guzerat1 from '../assets/guzerat1.png';
import gyr from '../assets/gyr1.png';
import jersey from '../assets/jersey1.png';
import brahman from '../assets/img2.png';

const TabbedImages = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getImageAndText = (tab) => {
    switch (tab) {
      case 'tab1':
        return {
          image: guzerat1,
          text: 'Asesoría en mejoramiento genérico. Mejora parámetros productivos(carne y leche). Busca mejorar la eficiencia productiva. Mejor relación entre conformación y salud mamaria.',
        };
      case 'tab2':
        return {
          image: gyr,
          text: 'Distribuidor de importantes Casas de Genética Bovina y respaldado por las mejores marcas en implementos, medicamentos hormonales y productos para salud reproductiva bovina.',
        };
      case 'tab3':
        return {
          image: jersey,
          text: 'Con LLanoBioTec tendrás asegurada una calidad inigualable, nos destacamos por el manejo de buenas prácticas donde se hará la implementación de varios procesos con tecnología de ultima calidad en el mercado.',
        };
      case 'tab4':
        return {
          image: brahman,
          text: 'También somos educación tecnología, turismo y producción para la evolución de la región llanera y de Restrepo Meta.',
        };
      default:
        return {
          image: guzerat1,
          text: 'Texto explicativo por defecto.',
        };
    }
  };

  const { image, text } = getImageAndText(activeTab);

  return (
    <div className="flex flex-col items-center mt-4 p-4 md:p-8 bg-opacity-50 bg-gray-500 rounded-lg">
      <div className="flex justify-center mb-4 p-2 md:p-4 gap-2 md:gap-6 flex-wrap ">
        <button
          className={`px-2 py-1 md:px-4 md:py-2 rounded text-sm lg:text-lg ${activeTab === 'tab1' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab1')}
        >
          Asesoría
        </button>
        <button
          className={`px-2 py-1 md:px-4 md:py-2 rounded text-sm lg:text-lg mx-1 md:mx-2 ${activeTab === 'tab2' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab2')}
        >
          Distribuidor
        </button>
        <button
          className={`px-2 py-1 md:px-4 md:py-2 rounded text-sm lg:text-lg mx-1 md:mx-2 ${activeTab === 'tab3' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab3')}
        >
          Calidad
        </button>
        <button
          className={`px-2 py-1 md:px-4 md:py-2 rounded text-sm lg:text-lg ${activeTab === 'tab4' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab4')}
        >
          Educación
        </button>
      </div>
      {/* Añadimos un contenedor con un tamaño fijo */}
      <div className="w-full md:w-1/2 lg:w-2/3 h-96 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 bg-gray-300 p-4 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={image} 
            alt="Tab Image" 
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-lg" 
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <p className="text-sm md:text-lg lg:text-2xl font-bold text-gray-700 text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TabbedImages;
