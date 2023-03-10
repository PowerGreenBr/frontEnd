import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../model/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {
 
    return (
        <Container maxWidth="sm" className="topo">
            <form >
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Produto </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper">
                    </Select>
                    <FormHelperText>Escolha um produto para Cadastrar</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;