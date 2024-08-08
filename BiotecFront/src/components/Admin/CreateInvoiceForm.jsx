import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypeInvoiceSiigo, postGenerateInvoice, getUsersSiigo } from '../../Redux/ActionsSiigo/actionsSiigo';

const CreateInvoiceForm = () => {
  const [identification] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(formatDateToYYYYMMDD(new Date().toISOString().split('T')[0]));
  const [dueDate, setDueDate] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [showDueDate, setShowDueDate] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [sendToDian, setSendToDian] = useState('false');
  const [customer] = useState({});
  const [costCenter] = useState('');
  const [items] = useState([]);
  const [order] = useState({});
  const [value] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const typeInvoices = useSelector((state) => state.typeInvoices);
  const usersSiigo = useSelector((state) => state.usersSiigo);

  useEffect(() => {
    dispatch(getTypeInvoiceSiigo());
    dispatch(getUsersSiigo());
  }, [dispatch]);

  useEffect(() => {
    if (documentType === 'Factura Crédito') {
      setShowDueDate(true);
    } else {
      setShowDueDate(false);
    }
  }, [documentType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedInvoiceDate = formatDateToYYYYMMDD(invoiceDate);
    const formattedDueDate = dueDate ? formatDateToYYYYMMDD(dueDate) : '';

    const body = {
      document: {
        id: documentType,
      },
      date: formattedInvoiceDate,
      customer: {
        person_type: customer.person_type,
        id_type: customer.id_type,
        identification: identification,
        branch_office: customer.branch_office || 0,
        name: customer.name,
        address: {
          address: customer.address,
          city: {
            country_code: customer.country_code,
            state_code: customer.state_code,
            city_code: customer.city_code,
          },
        },
        phones: [
          {
            number: customer.phone,
          },
        ],
        contacts: [
          {
            first_name: customer.first_name_contact || customer.first_name,
            last_name: customer.last_name_contact || customer.last_name,
            email: customer.email_contact,
            phone: {
              number: customer.phone_contact,
            },
          },
        ],
      },
      cost_center: costCenter,
      seller: selectedSeller,  
      stamp: {
        send: sendToDian === 'true',
      },
      mail: {
        send: order.sendToEmail,
      },
      observations: order.sendToCommentsInvoice || '',
      items: items,
      payments: [
        {
          id: order.paymentId,
          value: value,
          due_date: formattedDueDate,
        },
      ],
      globaldiscounts: [],
      additional_fields: {},
    };

    setLoading(true);
    const { success, errorMessage } = await dispatch(postGenerateInvoice(body));
    setLoading(false);

    if (success) {
      setSuccess(true);
    } else {
      setError(errorMessage);
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-4 mt-32">
      <h2 className="text-2xl font-bold mb-4">Crear Factura</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Comprobante
            </label>
            <select
              id="documentType"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {typeInvoices.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="invoiceDate" className="block text-sm font-medium text-gray-700 mb-2">
              Fecha de Comprobante
            </label>
            <input
              id="invoiceDate"
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]} // Asegura que la fecha sea hoy o futura
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {showDueDate && (
            <div className="mb-4">
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Vencimiento
              </label>
              <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                min={invoiceDate} 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )} 
          <div className="mb-4">
          <label htmlFor="seller" className="block text-sm font-medium text-gray-700 ">
        Seleccionar Vendedor
      </label>
      <select
        id="seller"
        value={selectedSeller}
        onChange={(e) => setSelectedSeller(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Seleccione un vendedor</option>
        {usersSiigo.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      </div>
      <div>
      <label htmlFor="sendToDian" className="block text-sm font-medium text-gray-700 mt-4">
        Enviar a DIAN
      </label>
      <select
        id="sendToDian"
        value={sendToDian}
        onChange={(e) => setSendToDian(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="false">No</option>
        <option value="true">Sí</option>
      </select>
      </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Crear Factura
          </button>
          {loading && <p className="mt-4 text-gray-500">Enviando...</p>}
          {success && <p className="mt-4 text-green-500">Factura creada exitosamente.</p>}
          {error && <p className="mt-4 text-red-500">Error: {error}</p>}
        </form>
      </div>
    </div>
  );
};

const formatDateToYYYYMMDD = (date) => {
  const [year, month, day] = date.split('-');
  return `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`;
};

export default CreateInvoiceForm;



