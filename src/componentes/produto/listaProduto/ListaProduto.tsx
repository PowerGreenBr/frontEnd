import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Services';
import { useSelector } from 'react-redux';
import Produto from '../../../model/Produto';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaProduto() {
const [produtos, setProdutos] = useState<Produto[]>([])
const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);
let navigate = useNavigate();

useEffect(() => {
    if (token == "") {
        toast.warn('Você precisa estar logado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    navigate("/login")

    }
}, [token])

async function getPost() {
    await busca("/produto", setProdutos, {
    headers: {
        'Authorization': token
    }
    })
}

useEffect(() => {

    getPost()

}, [produtos.length])

return (
    <>
    {
        produtos.map(produtos => (
        <Box m={2} >
            <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                produto
                </Typography>
                <Typography variant="h5" component="h2">
                {produtos.nome}
                </Typography>
                <Typography variant="body2" component="p">
                {produtos.plano}
                </Typography>
                
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to={`/formularioproduto/${produtos.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                    </Button>
                    </Box>
                </Link>
                <Link to={`/deletarproduto/${produtos.id}`} className="text-decorator-none">
                    <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                        deletar
                    </Button>
                    </Box>
                </Link>
                </Box>
            </CardActions>
            </Card>
        </Box>
        ))
    }
    </>
)
}

export default ListaProduto;