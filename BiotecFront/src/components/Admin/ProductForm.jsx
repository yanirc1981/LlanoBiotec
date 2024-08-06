// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProductSiigo } from '../../Redux/ActionsSiigo/actionsSiigo';
// eslint-disable-next-line react/prop-types, no-unused-vars
const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    account: '',
    stockControl: false,
    tax_classification: 'Taxed',
    taxIncluded: false,
    taxConsumptionValue: 0,
    idTax: '',
    rate: '',
    currencyCode: 'COP',
    position: 1,
    price: 0,
    unit: '',
    unit_label: 'unidad',
    description: '',
    tariff: '',
    model: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el payload según la estructura esperada por la API de Siigo
    const payload = {
      code: formData.code,
      name: formData.name,
      account: formData.account,
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
      tariff: formData.tariff,
      model: formData.model
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
          <input
            type="number"
            name="account"
            value={formData.account}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
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
          <input
            type="number"
            name="idTax"
            value={formData.idTax}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
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
          />
        </div>

        <div>
          <label className="block text-gray-700">Posición de Lista de Precios</label>
          <input
            type="number"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Valor de Lista de Precios</label>
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

        <div>
          <label className="block text-gray-700">Referencia</label>
          <input
            type="text"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Arancel</label>
          <input
            type="text"
            name="tariff"
            value={formData.tariff}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Modelo</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <button type="submit" className="w-full mt-6 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
        Crear Producto
      </button>
    </form>
  );
};

export default ProductForm;


  