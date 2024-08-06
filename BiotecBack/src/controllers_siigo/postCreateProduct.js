const axios = require('axios');
const response = require('../utils/response');
const getAccessToken = require('./getAccessToken');
const { PARTNER_ID } = require('../config/envs');
const Product = require('../models/Product'); // Importa tu modelo de Sequelize

module.exports = async (req, res) => {
  try {
    // Obtener el token de acceso
    const accessToken = await getAccessToken();

    // Datos originales del cuerpo de la solicitud
    const originalData = req.body;

    // Parseo y estructura de los datos a enviar a la API
    const accountGroupNumber = parseInt(originalData.account_group);
    const taxConsumptionValue = parseFloat(originalData.tax_consumption_value);
    const taxesId = parseInt(originalData.taxes_id);
    const positionNumber = parseInt(originalData.prices_price_list_position);
    const valueNumber = parseFloat(originalData.prices_price_list_value);
    const stockControl = Boolean(originalData.stock_control);
    const taxIncluded = Boolean(originalData.tax_included);

    const data = {
      code: originalData.code,
      name: originalData.name,
      account_group: accountGroupNumber,
      type: originalData.type || 'Product',
      stock_control: stockControl,
      active: originalData.active || true,
      tax_classification: originalData.tax_classification || 'Taxed',
      tax_included: taxIncluded,
      tax_consumption_value: taxConsumptionValue || 0,
      taxes: [
        {
          id: taxesId,
          rate: originalData.rate || '', // Omitir milliliters si no es necesario
        },
      ],
      prices: [
        {
          currency_code: originalData.prices_currency_code || 'COP',
          price_list: [
            {
              position: positionNumber,
              value: valueNumber,
            },
          ],
        },
      ],
      unit: originalData.unit || '',
      unit_label: originalData.unit_label || 'unidad',
      reference: originalData.reference || '',
      description: originalData.description || '',
      additional_fields: {
        barcode: originalData.barcode || '',
        brand: originalData.brand || '',
        tariff: originalData.tariff || '',
        model: originalData.model || '',
      },
    };

    // Guardar el producto en la base de datos local
    const newProductLocal = await Product.create({
      code: originalData.code,
      name: originalData.name,
      account_group: accountGroupNumber,
      stock_control: stockControl,
      tax_classification: originalData.tax_classification || 'Taxed',
      tax_included: taxIncluded,
      tax_consumption_value: taxConsumptionValue || 0,
      taxes_id: taxesId,
      prices_currency_code: originalData.prices_currency_code || 'COP',
      prices_price_list_position: positionNumber,
      prices_price_list_value: valueNumber,
      unit: originalData.unit || '',
      description: originalData.description || '',
      tariff: originalData.tariff || '',
      model: originalData.model || '',
      barcode: originalData.barcode || '',
      brand: originalData.brand || '',
      reference: originalData.reference || '',
    });

    // Enviar el producto a la API de Siigo
    const newProduct = await axios.post(
      'https://private-anon-e40583f2a6-siigoapi.apiary-proxy.com/v1/products',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'Partner-Id': PARTNER_ID,
        },
      }
    );

    const productData = newProduct.data;

    // Devolver la respuesta de la API junto con los datos guardados localmente
    return response(res, 201, { productData, newProductLocal });
  } catch (error) {
    console.error('Error al enviar los datos a la API:', error);
    return response(res, 500, { error: error.message });
  }
};


