// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PanelPage from "./components/Admin/PanelPage";
import ClientsPage from "./components/Admin/ClientsPage";
import ProductsPage from "./components/Admin/ProductsPage";
import InvoicesPage from "./components/Admin/InvoicesPage";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/register', '/panel'];

  return (
    <div>
      { !hideHeaderRoutes.includes(location.pathname) && <Header /> }
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<PanelPage />} />
        <Route path="/panel/clients" element={<ClientsPage />} />
        <Route path="/panel/products" element={<ProductsPage />} />
        <Route path="/panel/invoices" element={<InvoicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


