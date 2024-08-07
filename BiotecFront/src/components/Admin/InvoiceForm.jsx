import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { getCustomerDetailsByIdentification } from '../../Redux/ActionsSiigo/actionsSiigo'
import CreateClient from './CreateClient'


const InvoiceForm = () => {
  const navigate = useNavigate()
  const [identification, setIdentification] = useState('');
  const dispatch = useDispatch();
  const customerDetails = useSelector((state) => state.customerDetails);
  const { customer, loading, error } = customerDetails;
  const [showCreateCustomerForm, setShowCreateCustomerForm] = useState(false);

  const checkCustomer = (identification) => {
    dispatch(getCustomerDetailsByIdentification(identification));
  };

  useEffect(() => {
    if (customer && Object.keys(customer).length > 0) {
      console.log('Cliente encontrado:', customer);
      setShowCreateCustomerForm(false);
    } else if (error) {
      console.log('Cliente no encontrado, mostrar formulario de creación de cliente');
      setShowCreateCustomerForm(true);
    }
  }, [customer, error]);

  return (

    <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold mb-6">Facturación</h2>
    <button
      onClick={() => navigate("/panel")}
      className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
    >
      Volver
    </button>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="identification" className="block text-sm font-medium text-gray-700 mb-2">
            Identificación
          </label>
          <input
            id="identification"
            type="text"
            placeholder="Ingrese identificación"
            value={identification}
            onChange={(e) => setIdentification(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={() => checkCustomer(identification)}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Verificar Cliente
        </button>
        {loading && <p className="mt-4 text-gray-500">Cargando...</p>}
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
        {customer && Object.keys(customer).length > 0 && (
          <p className="mt-4 text-green-500">Cliente encontrado: {customer.name}</p>
        )}
        {showCreateCustomerForm && <CreateClient />}
      </div>
    </div>
  );
};

export default InvoiceForm;





