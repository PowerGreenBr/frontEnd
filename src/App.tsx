import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Cadastro from './paginas/cadastro/Cadastro';
import Login from './paginas/login/Login';
import Footer from './componentes/estaticos/footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
