import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postGenerateInvoice } from '../../Redux/ActionsSiigo/actionsSiigo'; 

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    invoiceType: '',
    sendToCostCenters: '',
    sendToDian: false,
    sendToEmail: false,
    sendToCommentsInvoice: '',
    sendToUser: '',
    orderId: '',
    // Otros campos necesarios
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = { /* Aquí puedes añadir headers si es necesario */ };
    const response = await dispatch(postGenerateInvoice(formData, headers));
    if (response.success) {
      alert('Factura creada exitosamente');
      // Puedes hacer algo más si lo deseas, como redirigir al usuario
    } else {
      alert('Error: ' + response.errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-4xl mx-auto bg-white shadow-md rounded">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="invoiceType" className="block text-sm font-medium text-gray-700">
            Tipo de Factura
          </label>
          <input
            type="text"
            id="invoiceType"
            name="invoiceType"
            value={formData.invoiceType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="sendToCostCenters" className="block text-sm font-medium text-gray-700">
            Centro de Costo
          </label>
          <input
            type="text"
            id="sendToCostCenters"
            name="sendToCostCenters"
            value={formData.sendToCostCenters}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Enviar a DIAN
          </label>
          <input
            type="checkbox"
            id="sendToDian"
            name="sendToDian"
            checked={formData.sendToDian}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Enviar por Email
          </label>
          <input
            type="checkbox"
            id="sendToEmail"
            name="sendToEmail"
            checked={formData.sendToEmail}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="sendToCommentsInvoice" className="block text-sm font-medium text-gray-700">
            Comentarios
          </label>
          <textarea
            id="sendToCommentsInvoice"
            name="sendToCommentsInvoice"
            value={formData.sendToCommentsInvoice}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="sendToUser" className="block text-sm font-medium text-gray-700">
            Vendedor
          </label>
          <input
            type="text"
            id="sendToUser"
            name="sendToUser"
            value={formData.sendToUser}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
            ID de la Orden
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Crear Factura
        </button>
      </div>
    </form>
  );
};

export default InvoiceForm;

  