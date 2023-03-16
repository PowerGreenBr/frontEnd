import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroPlanos.css';
import Planos from '../../../model/Planos';
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import useLocalStorage from 'react-use-localstorage';



function CadastroPlanos() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [planos, setPlanos] = useState<Planos>({
        id: 0,
        nome: '',
        preco: 0

    })

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

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/planos/${id}`, setPlanos, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedPlanos(e: ChangeEvent<HTMLInputElement>) {

            setPlanos({
                ...planos,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("planos" + JSON.stringify(planos))
    
            if (id !== undefined) {
                console.log(planos)
                put(`/planos`, planos, setPlanos, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Plano atualizado com sucesso', {
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
                post(`/planos`, planos, setPlanos, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Plano cadastrado com sucesso', {
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
            navigate('/planos')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro planos</Typography>
                <TextField value={planos.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPlanos(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroPlanos;