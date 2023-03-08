import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Grid, Typography, TextField } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import { Link,useNavigate} from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import { api, login } from '../../shared/themes/services/Service';
import UsuarioLogin from '../models/UserLogin';
import "./Login.css";


function Login() {
  let navigate = useNavigate()
  const [token, setToken] = useLocalStorage('token')
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  })
  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    if(token !== '') {
      navigate('/home')
    }
  }, [token])
  
  
      
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try{
      await login('/usuarios/logar', userLogin, setToken)
      alert('Usuário logado com sucesso')
    } catch(error) {
      alert('Usuário e/ou senha inválidos')
    }
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={8} alignItems="center">
        <Box padding={8}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              color="textPrimary"
              component="h1"
              align="center"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
                <Button type="submit" variant="contained" color="primary">
                  Entrar
                </Button>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography
                variant='subtitle1'
                align="center"
                gutterBottom
              >
                Cadastre-se <span> </span>
                <Link to="/cadastro">
                  AQUI
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className='img'>
      </Grid>
    </Grid>
  )
}

export default Login;