import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCustomerSiigo } from '../../Redux/ActionsSiigo/actionsSiigo';

// eslint-disable-next-line react/prop-types
const UpdateClient = ({ customer }) => {
  const [formData, setFormData] = useState(customer);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(customer);
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(updateCustomerSiigo(formData));
    if (response.success) {
      alert('Cliente actualizado correctamente');
    } else {
      alert(`Error al actualizar el cliente: ${response.errorMessage}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {/* Resto de los campos del formulario */}
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
        Actualizar Cliente
      </button>
    </form>
  );
};

export default UpdateClient;
