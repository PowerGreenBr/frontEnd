import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core";
import './CadastroProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Planos from '../../../model/Planos';
import Produto from '../../../model/Produto';
import { busca, buscaId, post, put } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroProdutos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [planos, setPlanos] = useState<Planos[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    const [planos, setPlanos] = useState<Planos>(
        {
            id: 0,
            descricao: ''
        })
    const [produtos, setProdutos] = useState<Produto>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => { 
        setProdutos({
            ...produtos,
        
        })
    }, [planos])

    useEffect(() => {
        getPlanos()
        if (id !== undefined) {
            findByIdProdutos(id)
        }
    }, [id])

    async function getPlanos() {
        await busca("/planos", setPlanos, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProdutos(id: string) {
        await buscaId(`produtos/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProdutos(e: ChangeEvent<HTMLInputElement>) {

        setProdutos({
            ...produtos,
            [e.target.name]: e.target.value,
        
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produtos, setProdutos, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/produtos`, produtos, setProdutos, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={produtos.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={produtos.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Planos </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/planos/${e.target.value}`, setPlanos, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            planos.map(planos=> (
                                <MenuItem value={planos.id}>{planos.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProdutos;