import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {TextField} from '@material-ui/core';
import { toast } from 'react-toastify';

import { addId, addToken } from '../../store/tokens/actions';
import UsuarioLogin from '../../model/UsuarioLogin';
import { login } from '../../services/Services';

import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import './LoginInputs.css';

// import OutlinedInput from '@mui/material/OutlinedInput';
// or
import { OutlinedInput } from '@mui/material';

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useState('')
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  })

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id:0,
    nome:'',
    usuario:'',
    senha:'',
    foto:'',
    token:''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      setIsLoading(true)
      await login("/usuarios/logar", userLogin, setRespUserLogin)
      toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }catch(error){
      setIsLoading(false)
      toast.warning('Usuárioe/ou senha inválidos', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  }

  useEffect(()=>{
    if(token !== ''){
      dispatch(addToken(token))
      navigate('/produtos')
    }
  }, [dispatch, navigate, token])

  useEffect(()=> {
    if(respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(`${respUserLogin.id}`))
      navigate('/produtos')
    }
  }, [dispatch, navigate, respUserLogin.id, respUserLogin.token])

  return (
    <div className={styles.content}>
      <aside>
        <img src='https://i.imgur.com/gl3eMog.png' alt="" />
      </aside>
      <main>
        <form onSubmit={onSubmit}>
          <h1>Entrar</h1>
          <TextField
            className='inputLogin'  
            value={userLogin.usuario} 
            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
            id='usuario' 
            label="E-mail" 
            variant="outlined" 
            name="usuario" 
            margin="normal" 
            fullWidth 
          />
          <TextField
            className='inputLogin' 
            value={userLogin.senha} 
            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
            id='senha' 
            label="Senha" 
            variant="outlined" 
            name="senha" 
            margin="normal" 
            type="password" 
            fullWidth 
          />
          <footer>
            <button type="submit">
              {isLoading ? 'Aguarde' : 'Logar'}
            </button>
            <p>Ainda não tem uma conta?
              <Link to="/cadastro">
                Cadastre-se
              </Link>
            </p>
          </footer>
        </form>
      </main>
    </div>
  );
}
export default Login;

