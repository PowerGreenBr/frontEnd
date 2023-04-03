import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core";
import {Box} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../model/Produto';
import { buscaId, deleteId } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

import styles from './DeletarProduto.module.css';

function DeletarProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  const [produto, setProduto] = useState<Produto>();

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado',{
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
  }, [token]);

  async function findById(id: string) {
    await buscaId(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  function sim() {
    navigate('/produtos');
    deleteId(`/produtos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.info('Produto deletado com sucesso',{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  function nao() {
    navigate('/produtos');
  }
  return (
    <main className={styles.content}>
      <div className={styles.info}>
        <p><span>Deseja apagar o produto: </span>{produto?.nome}</p>
      </div>
      <footer className={styles.deletaFooter}>
        <button className={styles.btn_nao} onClick={nao}>NÃO</button>
        <button className={styles.btn_sim} onClick={sim}>SIM</button>
      </footer>
    </main>
  );
}
export default DeletarProduto;
