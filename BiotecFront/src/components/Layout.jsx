import { useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderRoutes = ['/register', '/login', '/panel'];
  const noFooterRoutes = ['/login', '/register', '/panel', 
    '/panel/products/create', '/panel/clients/create', 
    '/panel/invoices', '/panel/clients/update', 
    '/panel/clients/list', '/panel/invoices/prueba'];
  return (
    <>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
      {children}
      
    </>
  );
};

export default Layout;
