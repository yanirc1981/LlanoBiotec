// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FlipCard.css";
import PropTypes from "prop-types";
// import { FaProjectDiagram, FaCogs, FaGlobe, FaHandshake } from "react-icons/fa"; // Iconos no son necesarios
import vacasx4 from '../assets/vaca2.jpg';
import vaca1 from '../assets/vaca1.jpg';
import yerseyBrahman from '../assets/yerseyBrahman.jpg';
import vacasVarias from '../assets/vacasVarias.jpg';

const FlipCard = ({ frontText, backTitle, backSteps, backHighlight, frontColor, backColor, frontImage }) => {
  return (
    <div className="group perspective my-4 mb-0">
      <div className="flip-card relative w-70 h-160 md:w-80 md:h-180 rounded-lg shadow-lg transition-transform duration-500 preserve-3d">
        <div
          className={`flip-card-front absolute rounded-lg text-white flex flex-col items-center justify-center ${frontColor}`}
          style={{ backgroundImage: `url(${frontImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Imagen de fondo sin textos ni iconos */}
        </div>
        <div
          className={`flip-card-back absolute w-full h-full rounded-lg text-white flex flex-col items-center justify-center p-6 ${backColor}`}
        >
          <h2 className="text-3xl font-bold mb-4">{backTitle}</h2>
          <ul className="text-center mb-4">
            {backSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-3">{backHighlight}</h3>
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  frontText: PropTypes.string.isRequired,
  backTitle: PropTypes.string.isRequired,
  backSteps: PropTypes.arrayOf(PropTypes.string).isRequired,
  backHighlight: PropTypes.string.isRequired,
  frontColor: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  frontImage: PropTypes.string.isRequired, // Imagen de fondo para la parte frontal
};

const FlipCards = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-around my-8 md:space-x-4">
      <FlipCard
        frontText="Planificación"
        backTitle="Primer Paso"
        backSteps={[
          "Recolección de Requisitos y Planificación"
        ]}
        backHighlight="Calidad"
        frontColor="bg-customBlue"
        backColor="bg-customRed"
        frontImage={vaca1}
         // Ruta de la imagen de fondo para la primera tarjeta
      />
      <FlipCard
        frontText="Distribución"
        backTitle="Segundo Paso"
        backSteps={[
          "Implementación de Funcionalidades",
          "Pruebas Continuas"
        ]}
        backHighlight="Desarrollo"
        frontColor="bg-customGreen"
        backColor="bg-customYellow"
        frontImage={vacasVarias} 
         // Ruta de la imagen de fondo para la segunda tarjeta
      />
      <FlipCard
        frontText="Lanzamiento"
        backTitle="Tercer Paso"
        backSteps={[
          "Pruebas Finales",
          "Preparación de Producción",
          "Despliegue"
        ]}
        backHighlight="Distribución"
        frontColor="bg-customPurple"
        backColor="bg-customPink"
        frontImage={yerseyBrahman} // Ruta de la imagen de fondo para la tercera tarjeta
      />
      <FlipCard
        frontText="Mantenimiento"
        backTitle="Cuarto Paso"
        backSteps={[
          "Monitoreo Continuo",
          "Actualizaciones Regulares",
          "Soporte Técnico"
        ]}
        backHighlight="Educación"
        frontColor="bg-customPurple"
        backColor="bg-customBlue"
        frontImage={vacasx4} // Ruta de la imagen de fondo para la cuarta tarjeta
      />
    </div>
  );
};

export default FlipCards;

