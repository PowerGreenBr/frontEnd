import React from 'react'
import { Button,Grid, TextField, Typography } from '@material-ui/core';
import { Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Cadastro.css'

function Cadastro() {
    return (
        <Grid container>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <Box component="form">
                    <Typography variant='h3'>Criar Conta</Typography>
                    <TextField label="Nome" id="nome" name="nome" variant='outlined' fullWidth margin='normal' />
                    <TextField label="E-mail" id="email" name="email" variant='outlined' fullWidth margin='normal' />
                    <TextField label="Foto" id="foto" name="foto" variant='outlined' fullWidth margin='normal' />
                    <TextField label="Senha" type="password" id="senha" name="senha" variant='outlined' fullWidth margin='normal' />
                    <TextField label="Confirmar Senha" type="password" id="confirmarsenha" name="confirmarsenha" variant='outlined' fullWidth margin='normal' />
                    <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className="btnCad">
                                    Cadastrar
                            </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Cadastro