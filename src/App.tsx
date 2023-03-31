import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Home from './paginas/home/Home';
import Navbar from './componentes/estaticos/navbar/Navbar';
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

import VendaPlanos from './componentes/planos/vendaPlanos/VendaPlanos';

import styles from './global.module.css';

export default function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/planos" element={<ListaPlanos />} />
            <Route path="/assinar" element={<VendaPlanos />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/cadastrar-produto" element={<CadastroProduto />} />
            <Route path="/cadastrar-planos" element={<CadastroPlanos />} />
            <Route path="/editar-produto/:id" element={<CadastroProduto />} />
            <Route path="/editar-planos/:id" element={<CadastroPlanos />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            <Route path="/deletarPlanos/:id" element={<DeletarPlanos/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}
