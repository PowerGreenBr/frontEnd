import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaPlanos.css';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Services';
import Planos from '../../../model/Planos';

function ListaPlanos() {
  const [Planos, setPlanos] = useState<Planos[]>([])
  const [token, setToken] = useLocalStorage('tokens');
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])


  async function getPlanos(){
    await busca("/Planos", setPlanos, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getPlanos()
  }, [Planos.length])

  return (
    <>
    {
      Planos.map(planos =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Planos
            </Typography>
            <Typography variant="h5" component="h2">
            {planos.descricao}
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