import { useLocation } from 'react-router-dom';
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderRoutes = ['/register', '/login', '/panel'];
  
  return (
    <>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      {children}
      
    </>
  );
};

export default Layout;
