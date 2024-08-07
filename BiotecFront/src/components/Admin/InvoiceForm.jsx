import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postGenerateInvoice } from '../../Redux/ActionsSiigo/actionsSiigo'; 
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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
    <form className="mt-32 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold mb-6">Facturación</h2>
    <button
      onClick={() => navigate("/panel")}
      className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
    >
      Volver
    </button>
  </div>
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
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
            className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
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
            className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
        >
          Crear Factura
        </button>
      </div>
    </form>
  );
};

export default InvoiceForm;

  