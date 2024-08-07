// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProductSiigo, getAccountGroup, getTaxes } from '../../Redux/ActionsSiigo/actionsSiigo';

// eslint-disable-next-line react/prop-types, no-unused-vars
const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    account_group: '',
    stockControl: false,
    tax_classification: 'Taxed',
    taxIncluded: false,
    taxConsumptionValue: 0,
    idTax: '',
    rate: '',
    currencyCode: 'COP',
    position: 1,
    price: 0,
    unit: '94',
    unit_label: 'unidad',
    description: ''
  });

  const dispatch = useDispatch();
  const accountGroups = useSelector(state => state.accounts);
  const taxes = useSelector(state => state.taxes);

  useEffect(() => {
    dispatch(getAccountGroup());
    dispatch(getTaxes());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      code: formData.code,
      name: formData.name,
      account_group: formData.account_group,
      stockControl: formData.stockControl,
      tax_classification: formData.tax_classification,
      taxIncluded: formData.taxIncluded,
      taxConsumptionValue: formData.taxConsumptionValue,
      idTax: formData.idTax,
      rate: formData.rate,
      currencyCode: formData.currencyCode,
      position: formData.position,
      price: formData.price,
      unit: formData.unit,
      unit_label: formData.unit_label,
      description: formData.description,
    };

    console.log('Datos a enviar:', JSON.stringify(payload, null, 2));
    const response = await dispatch(createProductSiigo(payload));

    if (response.success) {
      alert('Producto creado correctamente');
    } else {
      alert(`Error al crear el producto: ${response.errorMessage}`);
    }
  };

  return (
    <form className="mt-32 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Crear Producto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700">Código del Producto</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Nombre del Producto</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Grupo de Cuentas</label>
          <select
            name="account_group"
            value={formData.account_group}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Selecciona un grupo de cuentas</option>
            {accountGroups.map(group => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Tipo de Producto</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="Product">Producto</option>
            <option value="Service">Servicio</option>
            <option value="ConsumerGood">Bien de Consumo</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="stockControl"
            checked={formData.stockControl}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Control de Inventario</label>
        </div>

        <div>
          <label className="block text-gray-700">Clasificación de Impuesto</label>
          <select
            name="tax_classification"
            value={formData.tax_classification}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="Taxed">Gravado</option>
            <option value="Exempt">Exento</option>
            <option value="Excluded">Excluido</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="taxIncluded"
            checked={formData.taxIncluded}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">IVA Incluido</label>
        </div>

        <div>
          <label className="block text-gray-700">Valor del Impuesto al Consumo</label>
          <input
            type="number"
            name="taxConsumptionValue"
            value={formData.taxConsumptionValue}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">ID del Impuesto</label>
          <select
            name="idTax"
            value={formData.idTax}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Selecciona un impuesto</option>
            {taxes.map(tax => (
              <option key={tax.id} value={tax.id}>
                {tax.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Tasa</label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Código de Moneda</label>
          <input
            type="text"
            name="currencyCode"
            value={formData.currencyCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Posición</label>
          <input
            type="number"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Unidad</label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Etiqueta de Unidad</label>
          <input
            type="text"
            name="unit_label"
            value={formData.unit_label}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
      </div>

      <button type="submit" className="w-full mt-6 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
        Crear Producto
      </button>
    </form>
  );
};

export default ProductForm;


  