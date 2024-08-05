// const axios = require('axios');
// const getAccessToken = require('./getAccessToken');
// const response = require('../utils/response');
// const { PARTNER_ID } = require('../config/envs');

// module.exports = async (req, res) => {
//   try {
//     // Obtener el token de acceso
//     const accessToken = await getAccessToken();

//     // Realizar la solicitud a la API
//     // const response = await axios.get('https://api.siigo.com/v1/customers', {
//     //     headers: {
//     //    'Content-Type': 'application/json',
//     //    'Authorization': `Bearer ${accessToken}`,
//     //    'Partner-Id': 'NombreDeTuAplicacion'
//     // },
//     // });

//     const customersResponse = await axios.get(
//       `https://private-anon-bbaf453f05-siigoapi.apiary-proxy.com/v1/customers`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${accessToken}`,
//           'Partner-Id': PARTNER_ID,
//         },
//       }
//     );

   

//     const customers = customersResponse.data.results
    
//     return response(res, 201, customers);
//   } catch (error) {
//     console.error('Error al enviar los datos a la API:', error.message || error);
//     return res.status(500).json({ error: 'No se pudo obtener la información de usuarios.' });
//   }
// };
const response = require('../utils/response');

module.exports = async (req, res) => {
  try {
    const simulatedCustomers = [
      {
        id: 1,
        name: ['John', 'Doe'],
        commercial_name: 'JD Inc.',
        identification: '1234567890',
        address: {
          address: '123 Main St',
          city: {
            country_code: 'CO',
            state_code: '76',
            city_code: '001',
          },
          postal_code: '110111',
        },
        phones: [
          {
            indicative: '57',
            number: '3001234567',
            extension: '',
          },
        ],
        email: 'johndoe@example.com',
        comments: 'Test customer',
      },
      // Añade más clientes simulados si es necesario
    ];

    return response(res, 200, simulatedCustomers);
  } catch (error) {
    console.error('Error al obtener los datos:', error.message);
    return res.status(500).json({ error: 'No se pudo obtener la información de clientes.' });
  }
};
