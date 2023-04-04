import React, {useState, useEffect, ChangeEvent} from 'react'
import { TextField } from "@material-ui/core"
import {Link, useNavigate, useParams } from 'react-router-dom'
import Plano from '../../../model/Planos';
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

import styles from './CadastroPlanos.module.css';
import './CadastroPlanos.css';

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
        toast.success('Plano cadastrado com sucesso',{
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
      toast.success('Plano cadastrado com sucesso',{
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
    <div className={styles.content}>
      <aside>
        <img src='https://i.imgur.com/gl3eMog.png' alt="" />
      </aside>
      <main>
        <form onSubmit={onSubmit}>
          <h1>{plano.id !== 0 ? 'Editar plano' : 'Cadastrar plano'}</h1>
          <TextField 
            className='inputCadastro'
            value={plano.nome} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPlano(e)} 
            id="nome" 
            label="Nome do plano" 
            variant="outlined" 
            name="nome" 
            margin="normal" 
            fullWidth 
          />
          <TextField
            className='inputCadastro' 
            value={plano.preco} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPlano(e)} 
            id="preco" 
            label="Preço" 
            variant="outlined" 
            name="preco" 
            margin="normal" 
            fullWidth 
          />
					<footer>
						<Link to='/planos' className='text-decorator-none'>
 							<button className={styles.btn_cancelar}>
								Cancelar
							</button>
						</Link>
            <button type="submit">
              {plano.id !== 0 ? 'Editar' : 'Cadastrar'}
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}
export default CadastroPlanos;
