const axios = require('axios');
const getAccessToken = require('./getAccessToken');
const response = require('../utils/response');
const { PARTNER_ID } = require('../config/envs');

module.exports = async (req, res) => {
  try {
    // Obtener el token de acceso
    //const accessToken = await getAccessToken();
    const originalData = req.body;

    // Modificar los datos al formato requerido por la API
    const body = {
      
      person_type: originalData.person_type,
      id_type: originalData.id_type,
      identification: originalData.identification,
      check_digit: originalData.check_digit || '',
      name: originalData.name,
      commercial_name: originalData.commercial_name || '',
      branch_office: 0, // Valor por defecto
      active: true, // Valor por defecto
      vat_responsible: false, // Valor por defecto
      fiscal_responsibilities: [{ code: originalData.fiscal_responsibilities }

      ],
      address: {
        address: originalData.address,
        city: {
          country_code: originalData.country_code,
          state_code: originalData.state_code,
          city_code: originalData.city_code,
        },
        postal_code: originalData.postal_code,
      },
      phones: [
        {
          indicative: originalData.indicative,
          number: originalData.number,
          extension: originalData.extension || '',
        },
      ],
      contacts: [
        {
          first_name: originalData.name[0] || originalData.first_name,
          last_name: originalData.name[1] || originalData.last_name,
          email: originalData.email,
          phone: {
            indicative: originalData.indicative,
            number: originalData.number,
            extension: originalData.extension || '',
          },
        },
      ],
      comments: originalData.comments,
      related_users: {
        seller_id: originalData.seller_id,
        collector_id: originalData.collector_id,
      },
    };

   
    //  const customersResponse = await axios.post('https://private-anon-e45f86fe00-siigoapi.apiary-mock.com/v1/customers/id', body, {
    //     headers: {
    //    'Content-Type': 'application/json',
    //    'Authorization': `Bearer ${accessToken}`,
    //    'Partner-Id': 'PARTNER_ID'
    // },
     
    // });

    console.log(JSON.stringify(body, null, 2));

    return response(res, 201, 'Cliente creado correctamente'); // Devolver la respuesta de la API
  } catch (error) {
    if (error.response) {
      // Si hay una respuesta de error de la API de Siigo
      const { status, data } = error.response;
      const { Errors } = data;
      const siigoErrors = Errors.map((err) => ({
        code: err.Code,
        message: err.Message,
        params: err.Params,
        detail: err.Detail,
      }));

      console.error('Error al enviar los datos a la API:', siigoErrors);
      return res.status(status).json({ errors: siigoErrors });
    } else {
      // Si el error no tiene una respuesta de la API de Siigo
      console.error('Error al enviar los datos a la API:', error.message);
      return res
        .status(500)
        .json({ error: 'No se pudo enviar los datos a la API' });
    }
  }
};


