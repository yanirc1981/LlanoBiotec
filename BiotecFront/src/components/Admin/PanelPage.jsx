import { Link, Route, Routes } from 'react-router-dom';
import CreateClient from './CreateClient';
import UpdateClient from './UpdateClient';
import DeleteClient from './CustomerList';

const PanelPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <ul className="space-y-2">
        <li>
          <Link to="/panel/clients" className="text-blue-500 hover:underline">Gestionar Clientes</Link>
          <ul className="space-y-2 ml-4">
            <li>
              <Link to="/panel/clients/create" className="text-blue-500 hover:underline">Crear Cliente</Link>
            </li>
            <li>
              <Link to="/panel/clients/update" className="text-blue-500 hover:underline">Actualizar Cliente</Link>
            </li>
            <li>
              <Link to="/panel/clients/list" className="text-blue-500 hover:underline">Listar Clientes</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/panel/products" className="text-blue-500 hover:underline">Gestionar Productos</Link>
        </li>
        <li>
          <Link to="/panel/invoices" className="text-blue-500 hover:underline">Gestionar Facturación</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/panel/clients/create" element={<CreateClient />} />
        <Route path="/panel/clients/update" element={<UpdateClient />} />
        <Route path="/panel/clients/delete" element={<DeleteClient />} />
      </Routes>
    </div>
  );
};

export default PanelPage;



