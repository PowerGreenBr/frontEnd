import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './componentes/categoria/listaCategoria/ListaCategoria';
import ListaProduto from './componentes/produto/listaProduto/ListaProduto';
import CadastroProduto from './componentes/produto/cadastroProduto/CadastroProduto';
import CadastroCategoria from './componentes/categoria/cadastroCategoria/CadastroCategoria';
import DeletarProduto from './componentes/produto/deletarProduto/DeletarProduto';
import DeletarCategoria from './componentes/categoria/deletarCategoria/DeletarCategoria';
import { Store } from '@mui/icons-material';

function App() {
  return (
    
    <Provider store={Store}>
      <ToastContainer />
    <Router>
      <Navbar />
    
        <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cadastro" element={<CadastroUsuario />} />

        <Route path="/categoria" element={<ListaCategoria />} />

        <Route path="/produto" element={<ListaProduto />} />

        <Route path="/formularioProduto" element={<CadastroProduto />} />

        <Route path="/formularioProduto/:id" element={<CadastroProduto />} />

        <Route path="/formularioCategoria" element={<CadastroCategoria />} />

        <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

        <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />


        </Routes>
        </div>
    
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;