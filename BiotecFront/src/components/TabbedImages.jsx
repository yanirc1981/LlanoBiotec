import { useState } from 'react';
import LandingPage from '../../public/imgLlano.jpg';
import catalogo from '../../public/imgLlano.jpg';
import institucional from '../../public/empresaGanadera.png';
import complex from '../../public/biotecnologia.png';
import blog from '../../public/biotec.png';

const TabbedImages = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getImageAndText = (tab) => {
    switch (tab) {
      case 'tab1':
        return {
          image: LandingPage,
          text: 'Asesoría en mejoramiento genérico. *Mejora parámetros productivos(carne y leche) *Busca mejorar la eficiencia productiva *Mejor relación entre conformación y salud mamaria.',
        };
      case 'tab2':
        return {
          image: catalogo,
          text: 'Transforma tu idea de tienda online en una realidad con nuestras soluciones de e-commerce personalizadas. Nos encargamos de todo, desde el diseño intuitivo y atractivo hasta la integración de sistemas de pago seguros y funcionalidades avanzadas. Ya sea que vendas productos físicos o digitales, nuestra experiencia en desarrollo de e-commerce garantiza una plataforma robusta y escalable que crecerá junto a tu negocio, brindándote las herramientas necesarias para administrar tu inventario, pedidos y clientes de manera eficiente.',
        };
      case 'tab3':
        return {
          image: institucional,
          text: 'Si necesitas una presencia online efectiva y rápida, nuestras soluciones de páginas web simples son perfectas para ti. Diseñamos sitios web que combinan estética y funcionalidad, ofreciendo a tus visitantes una experiencia de usuario agradable y sin complicaciones. Ideal para pequeñas empresas, profesionales independientes y proyectos personales, nuestras páginas web están optimizadas para cargar rápidamente y adaptarse a todos los dispositivos.',
        };
      case 'tab4':
        return {
          image: complex,
          text: 'Para proyectos que requieren funcionalidades avanzadas y personalización completa, Innoweb Solutions ofrece desarrollos web complejos a medida. Trabajamos en estrecha colaboración contigo para entender tus necesidades y objetivos específicos, entregando soluciones innovadoras y técnicamente sólidas. Desde sistemas de gestión de contenido (CMS) personalizados hasta aplicaciones web interactivas, nuestro equipo de expertos está listo para afrontar cualquier desafío y llevar tu proyecto al siguiente nivel.',
        };
      case 'tab5':
        return {
          image: blog,
          text: 'En Innoweb Solutions, no solo creamos tu sitio web, sino que también te acompañamos en cada paso de tu crecimiento digital. Ofrecemos asistencia técnica continua, mejoras periódicas y optimizaciones para asegurarnos de que tu plataforma siempre esté en su mejor rendimiento. Entendemos que el mundo digital está en constante evolución, por lo que nuestras soluciones están diseñadas para ser escalables, permitiéndote añadir nuevas funcionalidades y adaptarte a las nuevas tendencias y demandas del mercado.',
        };
      default:
        return {
          image: LandingPage,
          text: 'Texto explicativo por defecto.',
        };
    }
  };

  const { image, text } = getImageAndText(activeTab);

  return (
    <div className="flex flex-col items-center ml-6 mt-4">
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-4 mb-2 md:mb-4 p-3">
        <button
          className={`px-2 py-1 rounded md:rounded-md text-xs md:text-sm lg:text-lg lg:px-8 ${activeTab === 'tab1' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab1')}
        >
          Landing Page
        </button>
        <button
          className={`px-2 py-1 rounded md:rounded-md text-xs md:text-sm lg:text-lg lg:px-4 ${activeTab === 'tab2' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab2')}
        >
          E-Commerce
        </button>
        <button
          className={`px-2 py-1 rounded md:rounded-md text-xs md:text-sm lg:text-lg lg:px-4 ${activeTab === 'tab3' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab3')}
        >
          Simple Web
        </button>
        <button
          className={`px-2 py-1 rounded md:rounded-md text-xs md:text-sm lg:text-lg lg:px-4 ${activeTab === 'tab4' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab4')}
        >
          Complex Web
        </button>
        <button
          className={`px-2 py-1 rounded md:rounded-md text-xs md:text-sm lg:text-lg lg:px-4 ${activeTab === 'tab5' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab5')}
        >
          Scalability
        </button>
      </div>
      <div className="w-full flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <div className="md:w-2/3 flex justify-center">
          <img src={image} alt="Tab Image" className="w-60 max-w-sm h-auto" />
        </div>
        <div className="md:w-3/5 flex flex-col items-center">
          <p className="text-lg text-gray-600 ml-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TabbedImages;
