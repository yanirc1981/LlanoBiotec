import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      <WhatsAppButton/>
      <Footer/>
    </Router>
  </React.StrictMode>
);

