import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../services/Services';
import UsuarioLogin from '../../model/UsuarioLogin';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addId, addToken } from '../../store/tokens/actions';

import styles from './Login.module.css';

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
      await login('/usuarios/logar', userLogin, setToken)
      toast.success('Usuário logado com sucesso!', {
        position: "top-center",
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
      toast.warning('Dados do usuário inconsistentes. Erro ao logar!', {
        position: "top-center",
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
  }, [token])

  useEffect(()=> {
    if(respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/produtos')
    }
  }, [respUserLogin.token])

  return (
    <>
      <div className={styles.header}>
        <div>
          <div>
            <p>PowerGreen</p>
            <p>Brasil</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <aside>
          <img src='https://i.imgur.com/gl3eMog.png' alt="" />
        </aside>
        <main>
          <form onSubmit={onSubmit}>
            <h1>Entrar</h1>
            <TextField  
              value={userLogin.usuario} 
              onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
              id='usuario' 
              label="usuário" 
              variant="outlined" 
              name="usuario" 
              margin="normal" 
              fullWidth 
            />
            <TextField 
              value={userLogin.senha} 
              onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
              id='senha' 
              label="senha" 
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
    </>
  );

  // return (
  //   <Grid container direction='row' justifyContent='center' alignItems='center'>
  //     <Grid alignItems='center' xs={6}>
  //       <Box paddingX={20} >
  //         <form onSubmit={onSubmit}>
  //           <Typography variant='h3' gutterBottom color='textPrimary' component="h3" align="center" className='texto1'>Entrar</Typography>
  //           <TextField  value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
  //           <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
  //           <Box marginTop={2} textAlign="center">
  //             <Button type="submit" variant="contained" color="primary" >
  //               Logar
  //             </Button>
  //           </Box>
  //         </form>
  //         <Grid>
  //           <Box display='flex' justifyContent="center" marginTop={2}>
  //             <Box marginRight={1}>
  //               <Typography variant="subtitle1" gutterBottom align="center" >
  //                 Ainda não tem uma conta?
  //               </Typography>
  //             </Box>
  //             <Link to="/cadastro">
  //               <Typography variant="subtitle1" gutterBottom align="center" className='texto1'>
  //                 cadastre-se
  //               </Typography>
  //             </Link>
  //           </Box>
  //         </Grid>
  //       </Box>
  //     </Grid>
  //     <Grid xs={6} className='img'>
  //     </Grid>
  //   </Grid>
  // );
}
export default Login;

