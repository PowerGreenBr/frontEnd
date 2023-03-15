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
import ListaPlanos from './componentes/categoria/listaPlanos/ListaPlanos';
import ListaProduto from './componentes/produto/listaProduto/ListaProduto';
import CadastroProduto from './componentes/produto/cadastroProduto/CadastroProduto';
import CadastroPlanos from './componentes/categoria/cadastroPlanos/CadastroPlanos';
import DeletarProduto from './componentes/produto/deletarProduto/DeletarProduto';
import DeletarPlanos from './componentes/categoria/deletarPlanos/DeletarPlanos';
import '/App.css'
function App() {
  return (
    <>
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

        <Route path="/produto" element={<ListaProduto />} />

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
    </>
  );
}

export default App;