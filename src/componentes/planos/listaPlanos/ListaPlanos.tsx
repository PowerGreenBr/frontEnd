import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import Planos from '../../../model/Planos';
import { busca } from '../../../services/Services';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { DeleteForever, ModeEditOutline } from '@mui/icons-material';

import styles from './ListaPlanos.module.css';

function ListaPlanos() {
  const [planos, setPlanos] = useState<Planos[]>([]);
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado pra ficar aqui.',{
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

  async function getPlanos() {
    await busca('/planos', setPlanos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPlanos();
  }, [planos.length]);
  
  return (
    <main className={styles.content}>
      <div className={styles.title}>
        <h1>Planos</h1>
        <Link to='/cadastrar-planos'>
          <button>Cadastrar plano</button>
        </Link>
      </div>
      <div className={styles.lista}>
      {planos.map(plano=> (
        <div className={styles.cardPlano}>
          <div className={styles.imgPlano} style={{backgroundImage:`url(https://i.imgur.com/gl3eMog.png)`}}>
            <Link 
              to={`/editar-planos/${plano.id}`}
              className={styles.alterar}
            >
              <ModeEditOutline />
            </Link>
    
            <Link 
              to={`/deletarPlanos/${plano.id}`}
            >
              <DeleteForever className={styles.apagar}/>
            </Link>
          </div>
          <div className={styles.infoProduto}>
            <p><span>Plano: </span>{plano.nome}</p>
            <p><span>R$ </span>{plano.preco}</p>
          </div>
        </div>
      ))}
      </div>
  </main>
  );
}
export default ListaPlanos;
