import React, {useState, useEffect, ChangeEvent} from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { busca, buscaId, post, put } from '../../../services/Services';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, FormHelperText, MenuItem } from "@material-ui/core"

import Produto from '../../../model/Produto';
import Planos from '../../../model/Planos';
import './CadastroProduto.css';

function CadastroProduto() {
	let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    capacidade: 0,
    numero_saidas: 0,
    foto: '',
    descricao: '',
    // plano: null
  });

  const [planos, setPlanos] = useState<Planos[]>([])
  const [plano, setPlano] = useState<Planos>({
    id: 0,
    preco: 0,
    nome: ''
  })

  async function getAllPlanos() {
    await busca('/planos', setPlanos, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getAllPlanos()
  }, [])
  
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
  
  function updatedProduto(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
    });
  }

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

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      try {
        // sempre vai tentar essa parte
        await put('/produtos', produto, setProduto, {
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
        await post('/produtos', produto, setProduto, {
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
    navigate('/produtos');
  }
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de produto</Typography>
        <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
        <TextField value={produto.capacidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="capacidade" label="capacidade" variant="outlined" name="capacidade" margin="normal" fullWidth />
        <TextField value={produto.numero_saidas} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="numero_saidas" label="numero_saidas" variant="outlined" name="numero_saidas" margin="normal" fullWidth />
        <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="foto" variant="outlined" name="foto" margin="normal" fullWidth />
        <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">Plano </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(event) =>
              buscaId(`/planos/${event.target.value}`, setPlano, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {planos.map((plano) => (
              <MenuItem value={`${plano.id}`}>{plano.nome}</MenuItem>
            ))}
          </Select>
            <FormHelperText>Escolha um plano para o produto</FormHelperText>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}
export default CadastroProduto;
