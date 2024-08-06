
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PanelPage from "./components/Admin/PanelPage";
import CreateClient from "./components/Admin/CreateClient";
import UpdateClient from "./components/Admin/UpdateClient"
import ProductForm from "./components/Admin/ProductForm";
import InvoiceForm from "./components/Admin/InvoiceForm";
import CustomerList from "./components/Admin/CustomerList"

const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/register', '/panel'];

  return (
    
        <div>
          {!hideHeaderRoutes.includes(location.pathname) && <Header />}
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/panel/*" element={<PanelPage />} />
            <Route path="/panel/products/create" element={<ProductForm />} />
            <Route path="/panel/invoices" element={<InvoiceForm />} />
            <Route path="/panel/clients/create" element={<CreateClient />} />
            <Route path="/panel/clients/update" element={<UpdateClient />} />
            <Route path="/panel/clients/list" element={<CustomerList />} />
          </Routes>
          <Footer />
        </div>
      
  );
};

export default App;




