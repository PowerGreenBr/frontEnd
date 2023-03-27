import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Services';
import { useSelector } from 'react-redux';
import Produto from '../../../model/Produto';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import './ListaProduto.css'

function ListaProduto() {
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  );

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado pra ficar aqui',{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate('/login');
    }
  });

  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function getProdutos() {
    await busca('/produtos', setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.map(produto => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                produto
              </Typography>
              <Typography variant="h5" component="h2">
                {produto.nome}
              </Typography>
              <Typography variant="body2" component="p">
                {produto.plano?.nome}
              </Typography>
              <img className='fotoProduto' src={produto.foto} alt="" />
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/editar-produto/${produto.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarproduto/${produto.id}`} className="text-decorator-none">
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
      ))}
    </>
  )
}
export default ListaProduto;
