// Navbar.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/ActionsSiigo/actionsSiigo';
import logo from '../assets/logoNegro.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated); // Ajuste aquí si es necesario
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate('/');
  };

  return (
    <nav className="bg-amber-600 text-white p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="w-64 h-auto" />
        </div>
        <div className="space-x-6 flex items-center">
          <a
            href="/"
            className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white"
          >
            Home
          </a>
          <a
            href="#quienesSomos"
            className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white"
          >
            Quienes Somos
          </a>
          <a
            href="#quienesSomos"
            className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white"
          >
            Contacto
          </a>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-zinc-700 text-2xl font-semibold tracking-wide hover:text-white focus:outline-none"
            >
              Panel
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 p-2 opacity-95">
                {!isAuthenticated ? (
                  <a
                    href="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-600 hover:text-white"
                  >
                    Login
                  </a>
                ) : (
                  <>
                    {/* <a
                      href="/panel"
                      className="block px-4 py-2 text-gray-800 hover:bg-amber-600 hover:text-white"
                    >
                      Administración
                    </a> */}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-amber-600 hover:text-white"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








