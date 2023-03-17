import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import Planos from '../../../model/Planos';
import { busca } from '../../../services/Services';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './ListaPlanos.css';

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
    <>
    {
      planos.map(planos =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Planos
            </Typography>
            <Typography variant="h5" component="h2">
            {planos.nome}
            </Typography>
            <Typography variant="h5" component="h2">
            {planos.preco}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioPlanos/${planos.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPlanos/${planos.id}`} className="text-decorator-none">
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
export default ListaPlanos;
