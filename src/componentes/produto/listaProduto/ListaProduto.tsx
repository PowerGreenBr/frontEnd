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

import styles from './ListaProduto.module.css';
import { ModeEditOutline } from '@mui/icons-material';
import { DeleteForever } from '@material-ui/icons';

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
    <main className={styles.content}>
      {produtos.map(produto=> (
        <div className={styles.cardProduto}>
          <div className={styles.imgProduto} style={{backgroundImage:`url(${produto.foto})`}}>
            <Link 
              to={`/editar-produto/${produto.id}`}
              className={styles.alterar}
            >
              <ModeEditOutline />
            </Link>
    
            <Link 
              to={`/deletarproduto/${produto.id}`}
            >
              <DeleteForever className={styles.apagar}/>
            </Link>
          </div>
          <div className={styles.infoProduto}>
            <p><span>Produto: </span>{produto.nome}</p>
            <p><span>Plano: </span>{produto.plano?.nome}</p>
          </div>
        </div>
      ))}
    </main>
  )
}
export default ListaProduto;
