const axios = require('axios');
const https = require('https');
const getAccessToken = require('./getAccessToken');
const response = require('../utils/response');

module.exports = async (req, res) => {
  try {
    // Obtener el token de acceso
    //const accessToken = await getAccessToken();

    // Crear un agente HTTPS que use TLS 1.2
    // const agent = new https.Agent({
    //   secureProtocol: 'TLSv1_2_method'
    // });

    // Datos a enviar a la API
    const { id } = req.params;
    const newData = req.body;

    // Modificar los datos al formato requerido por la API
    const data = {
      type: newData.type,
      person_type: newData.person_type,
      id_type: newData.id_type,
      identification: newData.identification,
      check_digit: newData.check_digit || '',
      name: newData.name,
      commercial_name: newData.commercial_name || '',
      branch_office: 0, // Valor por defecto
      active: newData.active, // Valor por defecto
      vat_responsible: false, // Valor por defecto
      fiscal_responsibilities: [{ code: newData.fiscal_responsibilities }],
      address: {
        address: newData.address,
        city: {
          country_code: newData.country_code,
          state_code: newData.state_code,
          city_code: newData.city_code,
        },
        postal_code: newData.postal_code,
      },
      phones: [
        {
          indicative: newData.indicative,
          number: newData.number,
          extension: newData.extension || '',
        },
      ],
      contacts: [
        {
          first_name: newData.name[0] || newData.first_name,
          last_name: newData.name[1] || newData.last_name,
          email: newData.email,
          phone: {
            indicative: newData.indicative,
            number: newData.number,
            extension: newData.extension || '',
          },
        },
      ],
      comments: newData.comments,
      related_users: {
        seller_id: newData.seller_id,
        collector_id: newData.collector_id,
      },
    };
 console.log(data)
    //Realizar la solicitud a la API con los datos modificados
    // const response = await axios.put(`https://private-anon-e45f86fe00-siigoapi.apiary-mock.com/v1/customers/id`, data, {
    //     headers: {
    //    'Content-Type': 'application/json',
    //    'Authorization': `Bearer ${accessToken}`,
    //    'Partner-Id': 'NombreDeTuAplicacion'
    // },
    //  httpsAgent: agent
    // });

   
    return response(res, 201, 'Cliente actualizado correctamente'); // Devolver la respuesta de la API
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



