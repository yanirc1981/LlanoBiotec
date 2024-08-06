import { useState } from 'react';
import guzerat from '../assets/guzerat.png';
import gyr from '../assets/gyr.png';
import jersey from '../assets/jersey.png';
import brahman from '../assets/brahman.png';


const TabbedImages = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getImageAndText = (tab) => {
    switch (tab) {
      case 'tab1':
        return {
          image: guzerat,
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
          text: 'Con LLanoBioTec tendrás asegurada una calidad inigualable, nos destacamos por el manejo de buenas prácticas donde se hará la implementación de varios procesos con tecnología de ultima calidad en el mercado..',
        };
      case 'tab4':
        return {
          image: brahman,
          text: 'También somos educación tecnología, turismo y producción para la evolución de la región llanera y de Restrepo Meta..',
        };
    
      default:
        return {
          image: guzerat,
          text: 'Texto explicativo por defecto.',
        };
    }
  };

  const { image, text } = getImageAndText(activeTab);

  return (
    <div className="flex flex-col items-center mt-4 mx-6 p-16">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 mb-4 p-3">
        <button
          className={`px-4 py-2 rounded text-sm lg:text-lg lg:px-6 ${activeTab === 'tab1' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab1')}
        >
          Asesoría
        </button>
        <button
          className={`px-4 py-2 rounded text-sm lg:text-lg lg:px-6 ${activeTab === 'tab2' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab2')}
        >
          Distribuidor
        </button>
        <button
          className={`px-4 py-2 rounded text-sm lg:text-lg lg:px-6 ${activeTab === 'tab3' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab3')}
        >
          Calidad
        </button>
        <button
          className={`px-4 py-2 rounded text-sm lg:text-lg lg:px-6 ${activeTab === 'tab4' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab4')}
        >
          Educación
        </button>
      </div>
      <div className="w-full flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 lg:space-x-0">
        <div className="md:w-2/3 flex justify-center">
          <img src={image} alt="Tab Image" className="w-80 h-auto max-w-2xl lg:w-120 rounded-lg" />
        </div>
        <div className="md:w-3/5 flex flex-col items-center "> 
          <p className="text-lg lg:text-2xl font-bold text-gray-600 ml-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TabbedImages;
