import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useSelector((state) => ({
        
        isAuthenticated: state.isAuthenticated,
      }));

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
