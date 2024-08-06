import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../src/Redux/Store/store.jsx'// Asegúrate de que la ruta sea correcta
import App from './App.jsx';
import './index.css';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
    <Router>
      <App />
      <WhatsAppButton/>
      <Footer/>
    </Router>
    </Provider>
  </React.StrictMode>
);


