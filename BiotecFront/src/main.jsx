import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './Redux/Store/store.jsx'; // Asegúrate de que la ruta sea correcta
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
        <Router>
          <App />
        </Router>
      
    </Provider>
  </React.StrictMode>
);


