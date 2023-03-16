import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPlanos from './componentes/planos/listaPlanos/ListaPlanos';
import ListaProduto from './componentes/produto/listaProduto/ListaProduto';
import CadastroProduto from './componentes/produto/cadastroProduto/CadastroProduto';
import CadastroPlanos from './componentes/planos/cadastroPlanos/CadastroPlanos';
import DeletarProduto from './componentes/produto/deletarProduto/DeletarProduto';
import DeletarPlanos from './componentes/planos/deletarPlanos/DeletarPlanos';
import store from './store/store';

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
      <Navbar />
    
        <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cadastro" element={<CadastroUsuario />} />

        <Route path="/planos" element={<ListaPlanos />} />

        <Route path="/produtos" element={<ListaProduto />} />

        <Route path="/CadastroProduto" element={<CadastroProduto />} />

        <Route path="/CadastroProduto/:id" element={<CadastroProduto />} />

        <Route path="/CadastroPlanos" element={<CadastroPlanos />} />

        <Route path="/CadastroPlanos/:id" element={<CadastroPlanos />} />

        <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

        <Route path="/deletarPlanos/:id" element={<DeletarPlanos/>} />


        </Routes>
        </div>
    
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;