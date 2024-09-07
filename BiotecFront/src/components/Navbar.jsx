import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/ActionsSiigo/actionsSiigo';
import logo from '../assets/logoNegro.png';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated); // Ajuste aquí si es necesario
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-fondo text-white p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold cursor-pointer flex items-center" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="w-32 h-auto md:w-64" />
        </div>
        <div className="hidden md:flex space-x-12 items-center">
          <a
            href="/"
            className="text-zinc-200 text-xl font-semibold tracking-wide hover:text-white"
          >
            Home
          </a>
          <a
            href="#quienesSomos"
            className="text-zinc-300 text-xl font-semibold tracking-wide hover:text-white"
          >
            Quienes Somos
          </a>
          <a
            href="#contacto"
            className="text-zinc-300 text-xl font-semibold tracking-wide hover:text-white"
          >
            Contacto
          </a>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-zinc-300 text-xl font-semibold tracking-wide hover:text-white focus:outline-none"
            >
              Panel
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 p-2 opacity-95">
                {!isAuthenticated ? (
                  <a
                    href="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-700 hover:text-white"
                  >
                    Login
                  </a>
                ) : (
                  <>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-green-700 hover:text-white"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-2xl text-white hover:text-gray-300 focus:outline-none">
                &#9776;
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={`block px-4 py-2 text-gray-800 hover:bg-green-700 hover:text-white ${active ? 'bg-green-700 text-white' : 'text-gray-800'}`}
                      >
                        Home
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#quienesSomos"
                        className={`block px-4 py-2 text-gray-800 hover:bg-green-700 hover:text-white ${active ? 'bg-green-700 text-white' : 'text-gray-800'}`}
                      >
                        Quienes Somos
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#contacto"
                        className={`block px-4 py-2 text-gray-800 hover:bg-green-700 hover:text-white ${active ? 'bg-green-700 text-white' : 'text-gray-800'}`}
                      >
                        Contacto
                      </a>
                    )}
                  </Menu.Item>
                  {!isAuthenticated ? (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/login"
                          className={`block px-4 py-2 text-gray-800 hover:bg-green-700 hover:text-white ${active ? 'bg-green-700 text-white' : 'text-gray-800'}`}
                        >
                          Login
                        </a>
                      )}
                    </Menu.Item>
                  ) : (
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-green-700 hover:text-white ${active ? 'bg-green-700 text-white' : 'text-gray-800'}`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;









