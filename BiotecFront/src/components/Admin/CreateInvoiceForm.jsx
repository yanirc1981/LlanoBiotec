import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypeInvoiceSiigo,
  postGenerateInvoice,
  getUsersSiigo,
  getTaxes,
  getProductsSiigo,
  getPaymentsTypeSiigo
} from "../../Redux/ActionsSiigo/actionsSiigo";

const CreateInvoiceForm = () => {
  const [identification] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    formatDateToYYYYMMDD(new Date().toISOString().split("T")[0])
  );
  const [dueDate, setDueDate] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [showDueDate, setShowDueDate] = useState();
  const [selectedSeller, setSelectedSeller] = useState("");
  const [sendToDian, setSendToDian] = useState();
  const [sendToEmail, setSendToEmail] = useState();
  const [observations] = useState("");
  const [customer] = useState({});
  const [costCenter, setCostCenter] = useState("");
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    code: "",
    description: "",
    quantity: 1,
    price: 0,
    discount: 0,
    taxes: [],
  });
  const [payments, setPayments] = useState([
    { id: '', value: 0, due_date: '' }
  ]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const typeInvoices = useSelector((state) => state.typeInvoices);
  const usersSiigo = useSelector((state) => state.usersSiigo);
  const taxes = useSelector((state) => state.taxes);
  const productsSiigo = useSelector((state) => state.products_siigo);
  const paymentsType = useSelector((state) => state.paymentsType);

  useEffect(() => {
    dispatch(getTypeInvoiceSiigo());
    dispatch(getUsersSiigo());
    dispatch(getTaxes());
    dispatch(getProductsSiigo());
    dispatch(getPaymentsTypeSiigo());
  }, [dispatch]);

  useEffect(() => {
    if (documentType === "Factura Crédito") {
      setShowDueDate(true);
    } else {
      setShowDueDate(false);
    }
  }, [documentType]);

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({
      ...currentItem,
      [name]: value,
    });
  };

  const handleTaxChange = (e) => {
    const selectedTax = parseInt(e.target.value);
    setCurrentItem((prevItem) => ({
      ...prevItem,
      taxes: [...prevItem.taxes, selectedTax],
    }));
  };

  const handleAddItem = () => {
    setItems([...items, currentItem]);
    setCurrentItem({
      code: '',
      description: '',
      quantity: 1,
      price: 0,
      discount: 0,
      taxes: []
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedInvoiceDate = formatDateToYYYYMMDD(invoiceDate);

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
        send: sendToDian,
      },
      mail: {
        send: sendToEmail,
      },
      observations: observations,
      items: items,
      payments: payments,
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
            <label
              htmlFor="documentType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
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
            <label
              htmlFor="invoiceDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Fecha de Comprobante
            </label>
            <input
              id="invoiceDate"
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]} // Asegura que la fecha sea hoy o futura
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {showDueDate && (
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
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
            <label
              htmlFor="seller"
              className="block text-sm font-medium text-gray-700 "
            >
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
            <label
              htmlFor="sendToDian"
              className="block text-sm font-medium text-gray-700 mt-4"
            >
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
          {sendToDian && (
            <div className="mb-4">
              <label
                htmlFor="sendToEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ¿Enviar factura al cliente por correo electrónico?
              </label>
              <select
                id="sendToEmail"
                value={sendToEmail}
                onChange={(e) => setSendToEmail(e.target.value === "true")}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="false">No</option>
                <option value="true">Sí</option>
              </select>
            </div>
          )}
          <div className="mb-4">
            <div className="mb-4">
              <label
                htmlFor="cost_center"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Centro de Costos
              </label>
              <select
                id="cost_center"
                value={costCenter}
                onChange={(e) => setCostCenter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Selecciona un centro de costos</option>
                <option value="1">Centro de Costos 1</option>
                <option value="2">Centro de Costos 2</option>
                <option value="3">Centro de Costos 3</option>
                <option value="4">Centro de Costos 4</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Código del Producto
            </label>
            <select
              id="productCode"
              name="code"
              value={currentItem.code}
              onChange={handleItemChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Seleccione un producto</option>
              {productsSiigo.map((product) => (
                <option key={product.code} value={product.code}>
                  {product.code} - {product.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Descripción del Producto
            </label>
            <input
              id="itemDescription"
              name="description"
              value={currentItem.description}
              onChange={handleItemChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemQuantity"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Cantidad
            </label>
            <input
              id="itemQuantity"
              name="quantity"
              type="number"
              min="1"
              value={currentItem.quantity}
              onChange={handleItemChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemPrice"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Precio
            </label>
            <input
              id="itemPrice"
              name="price"
              type="number"
              min="0"
              value={currentItem.price}
              onChange={handleItemChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemDiscount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Descuento
            </label>
            <input
              id="itemDiscount"
              name="discount"
              type="number"
              min="0"
              value={currentItem.discount}
              onChange={handleItemChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemTaxes"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Impuestos
            </label>
            <select
              id="itemTaxes"
              onChange={handleTaxChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Selecciona un impuesto</option>
              {taxes.map((tax) => (
                <option key={tax.id} value={tax.id}>
                  {tax.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <button
              type="button"
              onClick={handleAddItem}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Agregar Producto
            </button>
          </div>
          <div className="mb-4">
  <h3 className="text-lg font-medium text-gray-700 mb-2">Formas de Pago</h3>
  {payments.map((payment, index) => (
    <div key={index} className="mb-4">
      <div className="mb-2">
        <label htmlFor={`paymentType_${index}`} className="block text-sm font-medium text-gray-700 mb-2">
          Medio de Pago
        </label>
        <select
          id={`paymentType_${index}`}
          value={payment.id}
          onChange={(e) => {
            const newPayments = [...payments];
            newPayments[index].id = e.target.value;
            setPayments(newPayments);
          }}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Selecciona un medio de pago</option>
          {paymentsType.map((paymentType) => (
            <option key={paymentType.id} value={paymentType.id}>
              {paymentType.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor={`paymentValue_${index}`} className="block text-sm font-medium text-gray-700 mb-2">
          Valor
        </label>
        <input
          id={`paymentValue_${index}`}
          type="number"
          value={payment.value}
          onChange={(e) => {
            const newPayments = [...payments];
            newPayments[index].value = e.target.value;
            setPayments(newPayments);
          }}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor={`dueDate_${index}`} className="block text-sm font-medium text-gray-700 mb-2">
          Fecha de Pago
        </label>
        <input
          id={`dueDate_${index}`}
          type="date"
          value={payment.due_date}
          onChange={(e) => {
            const newPayments = [...payments];
            newPayments[index].due_date = e.target.value;
            setPayments(newPayments);
          }}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  ))}
  <button
    type="button"
    onClick={() =>
      setPayments([...payments, { id: '', value: 0, due_date: '' }])
    }
    className="text-blue-500"
  >
    Agregar otro pago
  </button>
</div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Crear Factura
          </button>
          {loading && <p className="mt-4 text-gray-500">Enviando...</p>}
          {success && (
            <p className="mt-4 text-green-500">Factura creada exitosamente.</p>
          )}
          {error && <p className="mt-4 text-red-500">Error: {error}</p>}
        </form>
      </div>
    </div>
  );
};

const formatDateToYYYYMMDD = (date) => {
  const [year, month, day] = date.split("-");
  return `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
};

export default CreateInvoiceForm;
