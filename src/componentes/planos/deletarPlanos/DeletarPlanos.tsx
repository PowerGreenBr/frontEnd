import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Services';
import Plano from '../../../model/Planos';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

import styles from './DeletarPlanos.module.css';

function DeletarPlanos() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );
  const [plano, setPlano] = useState<Plano>();

  useEffect(() => {
    if (token === '') {
      navigate('/login');
    }
  }, [token]);

  async function findById(id: string) {
    await buscaId(`/planos/${id}`, setPlano, {
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
    navigate('/planos');
    deleteId(`/planos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.info('Plano apagado com sucesso',{
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
    navigate('/planos');
  }
          
  return (
    <main className={styles.content}>
      <div className={styles.info}>
        <p><span>Deseja apagar o plano: </span>{plano?.nome}</p>
      </div>
      <footer className={styles.deletaFooter}>
        <button className={styles.btn_nao} onClick={nao}>NÃO</button>
        <button className={styles.btn_sim} onClick={sim}>SIM</button>
      </footer>
    </main>
  );
}
export default DeletarPlanos;
