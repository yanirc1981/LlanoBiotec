import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomersSiigo, updateCustomerSiigo } from '../../Redux/ActionsSiigo/actionsSiigo';

const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState(null);
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers); 
  
  useEffect(() => {
    dispatch(getCustomersSiigo());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.identification.includes(searchTerm)
  );

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setUpdatedCustomer(customer);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCustomer({
      ...updatedCustomer,
      [name]: value
    });
  };

  const handleUpdateCustomer = () => {
    dispatch(updateCustomerSiigo(updatedCustomer));
    setSelectedCustomer(null);
  };

  return (
    <div className="mt-32 flex items-center justify-center">
      <input
        type="text"
        placeholder="Buscar por identificación"
        value={searchTerm}
        onChange={handleSearch}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <ul>
        {filteredCustomers.map(customer => (
          <li 
            key={customer.id} 
            onClick={() => handleSelectCustomer(customer)}
            className="cursor-pointer"
          >
            {customer.identification} - {customer.name}
          </li>
        ))}
      </ul>
      {selectedCustomer && (
        <div>
          <h2>Actualizar Cliente</h2>
          <input
            type="text"
            name="identification"
            value={updatedCustomer.identification}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type="text"
            name="name"
            value={updatedCustomer.name}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            onClick={handleUpdateCustomer}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md"
          >
            Actualizar Cliente
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerList;


