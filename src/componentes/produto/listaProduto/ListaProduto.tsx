import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Produto from '../../../model/Produto';
import { busca } from '../../../services/Services';
import {  Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './/ListaProdutos.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaProdutos() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
    );
    const userId = useSelector<TokenState, TokenState['id']>(
      (state) => state.id
    );
    const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      navigate("/login")

    }
  })

  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProdutos()

  }, [produtos.length])

  return (
    <>
      {
        produtos.map((produto) => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.plano}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProdutos/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProdutos/${produto.id}`} className="text-decorator-none">
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
  );
}

export default ListaProdutos;