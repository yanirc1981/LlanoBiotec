import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassChange = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPass) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/signup', {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        is_admin: true
      });
      console.log('Admin registered:', response.data);
      navigate('/panel'); // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
      setError('Error registering admin');
      console.error('Error registering admin:', error);
    }
  };

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold mb-6">Registrar Administrador</h2>
    <button
      onClick={() => navigate("/panel")}
      className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
    >
      Volver
    </button>
  </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={handleFirstNameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">
              Apellido
            </label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={handleLastNameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPass" className="block text-gray-700 font-bold mb-2">
              Confirmar Password
            </label>
            <input
              type="password"
              id="confirmPass"
              value={confirmPass}
              onChange={handleConfirmPassChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default Register;


