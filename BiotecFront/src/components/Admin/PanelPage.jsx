import { Link } from 'react-router-dom';

const PanelPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <ul className="space-y-2">
        <li>
          <Link to="/panel/clients" className="text-blue-500 hover:underline">Gestionar Clientes</Link>
        </li>
        <li>
          <Link to="/panel/products" className="text-blue-500 hover:underline">Gestionar Productos</Link>
        </li>
        <li>
          <Link to="/panel/invoices" className="text-blue-500 hover:underline">Gestionar Facturación</Link>
        </li>
      </ul>
    </div>
  );
};

export default PanelPage;

