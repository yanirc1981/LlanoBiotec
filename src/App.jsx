import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
  

  return (
<div>
  <Navbar/>
  <Header/>
  <Body/>
  <Footer/>
</div>
  );
}

export default App
