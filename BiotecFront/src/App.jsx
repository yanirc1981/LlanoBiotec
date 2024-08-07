import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PanelPage from "./components/Admin/PanelPage";
import CreateClient from "./components/Admin/CreateClient";
import UpdateClient from "./components/Admin/UpdateClient";
import ProductForm from "./components/Admin/ProductForm";
import InvoiceForm from "./components/Admin/InvoiceForm";
import CustomerList from "./components/Admin/CustomerList";
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/register', '/panel', '/panel/products/create', '/panel/clients/create','/panel/invoices'];

  return (
    <div>
      <Navbar />
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/register" element={<PrivateRoute element={<Register />} />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/panel/*" element={<PrivateRoute element={<PanelPage />} />} />
        <Route path="/panel/products/create" element={<PrivateRoute element={<ProductForm />} />} />
        <Route path="/panel/invoices" element={<PrivateRoute element={<InvoiceForm />} />} />
        <Route path="/panel/clients/create" element={<PrivateRoute element={<CreateClient />} />} />
        <Route path="/panel/clients/update" element={<PrivateRoute element={<UpdateClient />} />} />
        <Route path="/panel/clients/list" element={<PrivateRoute element={<CustomerList />} />} />
      </Routes>
    </div>
  );
};

export default App;




