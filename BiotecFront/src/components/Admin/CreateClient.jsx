import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomerSiigo } from '../../Redux/ActionsSiigo/actionsSiigo';

const CreateClient = () => {
  const [formData, setFormData] = useState({
    person_type: '',
    identification: '',
    check_digit: '',
    commercial_name: '',
    address: {
      address: '',
      country_code: 'Co', 
      state_code: '', 
      city_code: '',
      postal_code: ''
    },
    indicative: '',
    number: '',
    extension: '',
    email: '',
    comments: '',
    seller_id: '',
    collector_id: '',
    fiscal_responsibilities: '',
    contacts: [ 
      {
        first_name: '',
        last_name: '',
        email: '',
        phone: {
          indicative: '',
          number: '',
          extension: ''
        }
      }
    ]
  });

  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [personType, setPersonType] = useState('');
  const [idType, setIdType] = useState('');
  const [showCheckDigit, setShowCheckDigit] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prevData => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePersonTypeChange = (e) => {
    const value = e.target.value;
    setPersonType(value);
    setFormData(prevData => ({
      ...prevData,
      person_type: value
    }));
  };

  const handleIdTypeChange = (e) => {
    const value = e.target.value;
    setIdType(value);
    setFormData({ ...formData, id_type: value });
    setShowCheckDigit(value === '31'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = personType === 'Company' ? [formData.commercial_name] : [firstName, lastName];

    const response = await dispatch(createCustomerSiigo({ 
      ...formData, 
      id_type: idType,
      name
    }));
    if (response.success) {
      alert('Cliente creado correctamente');
    } else {
      alert(`Error al crear el cliente: ${response.errorMessage}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="border-b border-gray-900/10 pb-8">
        <p className="mt-1 ml-2 text-sm leading-6 text-gray-600 mb-6">Completa todos los campos para crear un nuevo Cliente en Siigo</p>

        <div className="grid ml-4 grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-10">
          <div className="sm:col-span-3">
            <label htmlFor="person_type" className="block text-sm font-medium leading-6 text-gray-900">Person Type</label>
            <div className="mt-2">
              <select
                id="person_type"
                name="person_type"
                value={personType}
                onChange={handlePersonTypeChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select...</option>
                <option value="Person">Persona</option>
                <option value="Company">Compañía</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="id_type" className="block text-sm font-medium leading-6 text-gray-900 capitalize">
              Tipo de Identificación
            </label>
            <div className="mt-2">
              <select
                id="id_type"
                name="id_type"
                value={idType}
                onChange={handleIdTypeChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Seleccione una opción</option>
                <option value="13">Cédula</option>
                <option value="31">NIT</option>
                <option value="22">Cédula de extranjería</option>
                <option value="42">Documento de identificación extranjero</option>
                <option value="50">NIT de otro país</option>
                <option value="R-00-PN">No obligado a registrarse en el RUT PN</option>
                <option value="91">NUIP</option>
                <option value="41">Pasaporte</option>
                <option value="47">Permiso especial de permanencia PEP</option>
                <option value="11">Registro civil</option>
                <option value="43">Sin identificación del exterior o para uso definido por la DIAN</option>
                <option value="21">Tarjeta de extranjería</option>
                <option value="12">Tarjeta de identidad</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="identification" className="block text-sm font-medium leading-6 text-gray-900">
             Numero Documento
            </label>
            <div className="mt-2">
            <input
                type="number"
                id="identification"
                name="identification"
                value={formData.identification}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {showCheckDigit && (
            <div className="sm:col-span-3">
              <label htmlFor="check_digit" className="block text-sm font-medium leading-6 text-gray-900">
                Check Digit
              </label>
              <div className="mt-2">
                <select
                  id="check_digit"
                  name="check_digit"
                  value={formData.check_digit}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                <option value="">Selecciona una opción</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    </select>
              </div>
            </div>
          )}

          {personType === 'Person' && (
            <>
              <div className="sm:col-span-3">
                <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </>
          )}

          {personType === 'Company' && (
            <div className="sm:col-span-3">
              <label htmlFor="commercial_name" className="block text-sm font-medium leading-6 text-gray-900">Nombre Comercial</label>
              <div className="mt-2">
                <input
                  type="text"
                  id="commercial_name"
                  name="commercial_name"
                  value={formData.commercial_name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          <div className="sm:col-span-3">
            <label htmlFor="fiscal_responsibilities" className="block text-sm font-medium leading-6 text-gray-900">Responsabilidades Fiscales</label>
            <div className="mt-2">
              <select
                id="fiscal_responsibilities"
                name="fiscal_responsibilities"
                value={formData.fiscal_responsibilities}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecciona una opción</option>
                  <option value="R-99-PN">No Aplica - Otros*</option>
                  <option value="O-13">Gran contribuyente</option>
                  <option value="O-15">Autorretenedor</option>
                  <option value="O-23">Agente de retención IVA</option>
                  <option value="O-47">Régimen simple de tributación</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="address.address" className="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
            <div className="mt-2">
              <input
                type="text"
                id="address.address"
                name="address.address"
                value={formData.address.address}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="address.state_code" className="block text-sm font-medium leading-6 text-gray-900">Código de Estado</label>
            <div className="mt-2">
              <select
                id="address.state_code"
                name="address.state_code"
                value={formData.address.state_code}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecciona una opción</option>
                  <option value="05">Antioquía</option>
                  <option value="91">Amazonas</option>
                  <option value="81">Arauca</option>
                  <option value="08">Atlántico</option>
                  <option value="11">Bogotá D.C</option>
                  <option value="13">Bolivar</option>
                  <option value="15">Boyacá</option>
                  <option value="17">Caldas</option>
                  <option value="19">Cauca</option>
                  <option value="85">Casanare</option>
                  <option value="20">Cesar</option>
                  <option value="23">Córdoba</option>
                  <option value="25">Cundinamarca</option>
                  <option value="27">Chocó</option>
                  <option value="94">Guainía</option>
                  <option value="95">Guaviare</option>
                  <option value="41">Huila</option>
                  <option value="44">La Guajira</option>
                  <option value="47">Magdalena</option>
                  <option value="50">Meta</option>
                  <option value="52">Nariño</option>
                  <option value="54">Norte de Santander</option>
                  <option value="86">Putumayo</option>
                  <option value="63">Quindio</option>
                  <option value="66">Risaralda</option>
                  <option value="68">Santander</option>
                  <option value="70">Sucre</option>
                  <option value="73">Tolima</option>
                  <option value="76">Valle del Cauca</option>
                  <option value="97">Vaupés</option>
                  <option value="99">Vichada</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="address.city_code" className="block text-sm font-medium leading-6 text-gray-900">Código de Ciudad</label>
            <div className="mt-2">
            <select
                id="address.city_code"
                name="address.city_code"
                value={formData.address.city_code}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
              <option value="">Selecciona una opción</option>
                  <option value="50006">Acacías - Meta</option>
                  <option value="85010">Aguazul - Casanare</option>
                  <option value="50110">Barranca De Upía - Meta</option>
                  <option value="05088">Bello - Antioquía</option>
                  <option value="11001">Bogotá - Bogotá D.C</option>
                  <option value="50124">Cabuyaro - Meta</option>
                  <option value="25126">Cajicá - Cundinamarca</option>
                  <option value="95015">Calamar - Guaviare</option>
                  <option value="25151">Caqueza - Cundinamarca</option>
                  <option value="50150">Castilla La Nueva - Meta</option>
                  <option value="50223">Cubarral - Meta</option>
                  <option value="50226">Cumaral - Meta</option>
                  <option value="50245">El Calvario - Meta</option>
                  <option value="50251">El Castillo - Meta</option>
                  <option value="50270">El Dorado - Meta</option>
                  <option value="50287">Fuente De Oro - Meta</option>
                  <option value="50313">Granada - Meta</option>
                  <option value="50318">Guamal - Meta</option>
                  <option value="73001">Ibagué - Tolima</option>
                  <option value="05360">Itagui - Antioquia</option>
                  <option value="25377">La Calera - Cundinamarca</option>
                  <option value="50350">La Macarena - Meta</option>
                  <option value="50400">Lejanías - Meta</option>
                  <option value="85139">Maní - Casanare</option>
                  <option value="50325">Mapiripán - Meta</option>
                  <option value="05001">Medellín - Antioqua</option>
                  <option value="25438">Medina - Cundinamarca</option>
                  <option value="50330">Mesetas - Meta</option>
                  <option value="19001">Popayan - Cauca</option>
                  <option value="50450">Puerto Concordia - Meta</option>
                  <option value="50568">Puerto Gaitán - Meta</option>
                  <option value="50577">Puerto Lleras - Meta</option>
                  <option value="50573">Puerto López - Meta</option>
                  <option value="50590">Puerto Rico - Meta</option>
                  <option value="50606">Restrepo - Meta</option>
                  <option value="50680">San Carlos De Guaroa - Meta</option>
                  <option value="50683">San Juan De Arama - Meta</option>
                  <option value="50686">San Juanito - Meta</option>
                  <option value="50689">San Martín - Meta</option>
                  <option value="50370">Uribe - Meta</option>
                  <option value="50001">Villavicencio - Meta</option>
                  <option value="50711">Vistahermosa - Meta</option>
                  </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="address.postal_code" className="block text-sm font-medium leading-6 text-gray-900">Código Postal</label>
            <div className="mt-2">
              <input
                type="text"
                id="address.postal_code"
                name="address.postal_code"
                value={formData.address.postal_code}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="indicative" className="block text-sm font-medium leading-6 text-gray-900">Indicativo</label>
            <div className="mt-2">
              <select
                id="indicative"
                name="indicative"
                value={formData.indicative}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecciona una opción</option>
                  <option value="57">57 - Celular</option>
                  <option value="601">601 - Cundinamarca - Bogotá</option>
                  <option value="602">602 - Cauca - Nariño - Valle</option>
                  <option value="604">604 - Antioquia - Córdoba - Chocó</option>
                  <option value="605">605 - Atlántico - Bolívar - César</option>
                  <option value="605">605 - Guajira - Magdalena - Sucre</option>
                  <option value="606">
                    606 - Caldas - Quindío - Risaralda
                  </option>
                  <option value="607">
                    607 - Arauca - Santander - Norte de Santander
                  </option>
                  <option value="608">
                    608 - Amazonas - Boyacá - Casanare
                  </option>
                  <option value="608">
                    608 - Caquetá - Guainía - Guaviare
                  </option>
                  <option value="608">
                    608 - Huila - Meta - Tolima - Putumayo
                  </option>
                  <option value="608">
                    608 - San Andrés - Vaupés - Vichada
                  </option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">Número de Teléfono</label>
            <div className="mt-2">
              <input
                type="number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                min="1000000000"
                max="9999999999"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="extension" className="block text-sm font-medium leading-6 text-gray-900">Extensión</label>
            <div className="mt-2">
              <input
              type="number"
                id="extension"
                name="extension"
                value={formData.extension}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

<div className="sm:col-span-3">
            <label htmlFor="contacts[0].first_name" className="block text-sm font-medium leading-6 text-gray-900">Nombre del Contacto</label>
            <div className="mt-2">
              <input
                type="text"
                id="contacts[0].first_name"
                name="contacts.0.first_name"
                value={formData.contacts[0].first_name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="contacts[0].last_name" className="block text-sm font-medium leading-6 text-gray-900">Apellido del Contacto</label>
            <div className="mt-2">
              <input
                type="text"
                id="contacts[0].last_name"
                name="contacts.0.last_name"
                value={formData.contacts[0].last_name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="contacts[0].email" className="block text-sm font-medium leading-6 text-gray-900">Email del Contacto</label>
            <div className="mt-2">
              <input
                type="email"
                id="contacts[0].email"
                name="contacts.0.email"
                value={formData.contacts[0].email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="indicative" className="block text-sm font-medium leading-6 text-gray-900">Indicativo del Telefono de contacto</label>
            <div className="mt-2">
              <select
                id="contacts[0].indicative"
                name="contacts.0.indicative"
                value={formData.contacts[0].indicative}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecciona una opción</option>
                  <option value="57">57 - Celular</option>
                  <option value="601">601 - Cundinamarca - Bogotá</option>
                  <option value="602">602 - Cauca - Nariño - Valle</option>
                  <option value="604">604 - Antioquia - Córdoba - Chocó</option>
                  <option value="605">605 - Atlántico - Bolívar - César</option>
                  <option value="605">605 - Guajira - Magdalena - Sucre</option>
                  <option value="606">
                    606 - Caldas - Quindío - Risaralda
                  </option>
                  <option value="607">
                    607 - Arauca - Santander - Norte de Santander
                  </option>
                  <option value="608">
                    608 - Amazonas - Boyacá - Casanare
                  </option>
                  <option value="608">
                    608 - Caquetá - Guainía - Guaviare
                  </option>
                  <option value="608">
                    608 - Huila - Meta - Tolima - Putumayo
                  </option>
                  <option value="608">
                    608 - San Andrés - Vaupés - Vichada
                  </option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="contacts[0].number" className="block text-sm font-medium leading-6 text-gray-900">Teléfono del Contacto</label>
            <div className="mt-2">
              <input
                type="number"
                id="contacts[0].number"
                name="contacts.0.number"
                value={formData.contacts[0].number}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div className="sm:col-span-3">
            <label htmlFor="comments" className="block text-sm font-medium leading-6 text-gray-900">Comentarios</label>
            <div className="mt-2">
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="seller_id" className="block text-sm font-medium leading-6 text-gray-900">ID del Vendedor</label>
            <div className="mt-2">
              <input
                type="text"
                id="seller_id"
                name="seller_id"
                value={formData.seller_id}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="collector_id" className="block text-sm font-medium leading-6 text-gray-900">ID del Recaudador</label>
            <div className="mt-2">
              <input
                type="text"
                id="collector_id"
                name="collector_id"
                value={formData.collector_id}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="flex gap-x-4">
        <button
          type="submit"
          className="inline-block rounded-md px-3.5 py-1.5 text-base font-semibold leading-6 ring-1 ring-900/10 text-gray-900 shadow-sm ring-gray-900/10 hover:ring-gray-900/20 focus:ring-2 focus:ring-indigo-600"
        >
          Crear Cliente
        </button>
      </div>
    </form>
  );
};

export default CreateClient;