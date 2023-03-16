import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

import Produto from '../../../model/Produto';
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
                
								{/* <TextField value={produto.plano?.id} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="plano" label="plano" variant="outlined" name="plano" margin="normal" fullWidth /> */}
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroProduto;