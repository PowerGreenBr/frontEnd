import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Services';
import UserLogin from '../../model/UserLogin';




function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login('/usuarios/logar', userLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }

    return (
        
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} >
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component="h3" align="center" className='texto1'>Entrar</Typography>
                        <TextField  value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            

                                <Button type="submit" variant="contained" color="primary" >
                                    Logar
                                </Button>
                    
                        </Box>
                    </form>
                    <Grid>
                    <Box display='flex' justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center" >
                                Ainda não tem uma conta?
                            </Typography>

                        </Box>
                        <Link to="/cadastro">
                            <Typography variant="subtitle1" gutterBottom align="center" className='texto1'>
                                cadastre-se
                            </Typography>
                        </Link>
                    </Box>
                    </Grid>
                </Box>
            </Grid>
            <Grid xs={6} className='img'>
            </Grid>
        </Grid>
    );

}
export default Login;