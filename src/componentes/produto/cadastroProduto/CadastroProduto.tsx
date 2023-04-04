import React, {useState, useEffect, ChangeEvent} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { busca, buscaId, post, put } from '../../../services/Services';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, FormHelperText, MenuItem } from "@material-ui/core"

import Produto from '../../../model/Produto';
import Planos from '../../../model/Planos';

import styles from './CadastroProduto.module.css';
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
    plano: null
  });

  const [planos, setPlanos] = useState<Planos[]>([])
  const [plano, setPlano] = useState<Planos>({
    id: 0,
    preco: 0,
    nome: ''
  })

useEffect(() => {
  setProduto({
    ...produto,
    plano: plano
  })
},[plano])

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
        toast.success('Produto cadastrado com sucesso',{
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
        toast.success('Produto cadastrado com sucesso',{
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
    <div className={styles.content}>
      <aside>
        <img src='https://i.imgur.com/gl3eMog.png' alt="" />
      </aside>
      <main>
        <form onSubmit={onSubmit}>
          <h1>{produto.id !== 0 ? 'Editar produto' : 'Cadastrar produto'}</h1>
          <TextField
            className='inputCadastro' 
            value={produto.nome} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
            id="descricao" 
            label="Nome do produto" 
            variant="outlined" 
            name="nome" 
            margin="normal" 
            fullWidth 
          />
          <TextField
            className='inputCadastro' 
            value={produto.capacidade} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
            id="capacidade" 
            label="Capacidade (wh)" 
            variant="outlined" 
            name="capacidade" 
            margin="normal" 
            fullWidth 
          />
          <TextField
            className='inputCadastro' 
            value={produto.numero_saidas} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
            id="numero_saidas" 
            label="Número de saidas" 
            variant="outlined" 
            name="numero_saidas" 
            margin="normal" 
            fullWidth 
          />
          <TextField 
            // className='inputCadastro'
            id="foto"
            className={`${styles.foto} inputCadastro`}
            value={produto.foto} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
            label="Foto do produto (https://...)" 
            variant="outlined" name="foto" 
            margin="normal" 
            fullWidth 
          />
          <TextField 
          className='inputCadastro'
          value={produto.descricao} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
          id="descricao" 
          label="Descricao" 
          variant="outlined" 
          name="descricao" 
          margin="normal" 
          fullWidth 
          />
          <FormControl fullWidth>
            <InputLabel className='inputCadastro' id="demo-simple-select-helper-label">Planos</InputLabel>
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
					<footer>
						<Link to='/produtos' className='text-decorator-none'>
 							<button className={styles.btn_cancelar}>
								Cancelar
							</button>
						</Link>
            <button type="submit">
              {produto.id !== 0 ? 'Editar' : 'Cadastrar'}
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}
export default CadastroProduto;
