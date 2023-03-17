import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroPlanos.css';
import Plano from '../../../model/Planos';
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function CadastroPlanos() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );
  const [plano, setPlano] = useState<Plano>({
    id: 0,
    nome: '',
    preco: 0
  });
  
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
  
  function updatedPlano(event: ChangeEvent<HTMLInputElement>) {
    setPlano({
      ...plano,
      [event.target.name]: event.target.value,
    });
  }
  
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
  
  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      try {
        // sempre vai tentar essa parte
        await put('/planos', plano, setPlano, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema cadastrado com sucesso',{
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch {
        // se der ruim, vem pra ca
        toast.error('Erro no cadastro, por favor confira o campo de descrição',{
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
    } else {
      try {
        // sempre vai tentar essa parte
        await post('/planos', plano, setPlano, {
          headers: {
            Authorization: token,
          },
      });
      toast.success('Tema cadastrado com sucesso',{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch {
      // se der ruim, vem pra ca
      toast.error('Erro no cadastro, por favor confira o campo de descrição',{
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
  }
  back();
}

  function back() {
    navigate('/planos');
  }
  
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro plano</Typography>
        <TextField value={plano.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPlano(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
        <TextField value={plano.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPlano(e)} id="preco" label="preco" variant="outlined" name="preco" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}
export default CadastroPlanos;
