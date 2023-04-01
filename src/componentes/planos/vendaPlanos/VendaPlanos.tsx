import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Planos from '../../../model/Planos';
import { busca } from '../../../services/Services';
import { TokenState } from '../../../store/tokens/tokensReducer';

import styles from './VendaPlanos.module.css';

function VendaPlanos() {
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
      <h2 className={styles.assinatura}>Planos: <span>Escolha o plano que melhor atenda o seu perfil</span></h2>
      <div className={styles.cardsLine}>
        {planos.map((plano) => (
          <div className={styles.card}>
          <div className={styles.top}>
            <div>
              <h1>{plano.nome}</h1>
              <p>Veja o que temos disponivel no plano {plano.nome}</p>

              {plano.produto?.map((produto) => (
                <>
                  <img className={styles.fotoProdutoCard} src={produto.foto} alt={`${produto.nome}`} />
                <p>{produto.nome}</p>
                </>
              ))}
            </div>

            <h3>Valor: {Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(plano.preco)}</h3>
          </div>
          <div className={styles.bottom}>
            <button>Assinar</button>
          </div>
        </div>
        ))}
      </div>
    </main>
  )
}

export default VendaPlanos