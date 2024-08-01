
import image from '../assets/banner.png'; // Asegúrate de tener esta imagen en tu carpeta de assets

const Header = () => {
  return (
    <header className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${image})` }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl">Bienvenido a Mi Aplicación</h1>
      </div>
    </header>
  );
};

export default Header;
