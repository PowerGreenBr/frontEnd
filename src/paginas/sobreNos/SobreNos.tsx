import { buscaGitUser } from '../../services/Services';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import styles from './SobreNos.module.css';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';

function SobreNos() {
  const contribuidores:object = [
    {
      nome: 'Carolina Bertulli',
      objetivo:'Desenvolvedora Java Full Stack',
      funcoes: 'Tester, PM, Desenvolvedora, UI'
    }
  ]
  return (
    <main className={styles.content}>
      <div className={styles.title}>
        <h1>Colaboradores</h1>
        <Link to='/cadastrar-planos'>
          <button>O projeto</button>
        </Link>
      </div>
      <div className={styles.lista}>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/CarolBertulli.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Carol Bertulli</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>SCRUM Master, Desenvolvedora, QA</p>
            <div>
              <a href="https://github.com/CarolBertulli" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/no_muggles_pls/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/HenriqueFerreirav.png" alt="Henrique" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Henrique Ferreira</p>
            <p><span>Objetivo: </span>Desenvolvedor Java Full Stack</p>
            <p><span>Funções: </span>Desenvolvedor, QA</p>
            <div>
              <a href="https://github.com/HenriqueFerreirav" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              {/* <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <LinkedIn />
              </a> */}
              {/* <a href="https://www.instagram.com/no_muggles_pls/" target="_blank" rel="noreferrer">
                <Instagram />
              </a> */}
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/jess59cavalcante.png" alt="Jessica" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Jessica</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>Product Owner, SCRUM Master, Desenvolvedora, QA</p>
            <div>
              <a href="https://github.com/jess59cavalcante" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://www.linkedin.com/in/jessicavalcante88" target="_blank" rel="noreferrer">
                <LinkedIn />
              </a>
              {/* <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <Instagram />
              </a> */}
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/joeljrbeginner.png" alt="Joel" style={{background:'var(--gray-500)'}} />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Joel jr</p>
            <p><span>Objetivo: </span>Desenvolvedor Java Full Stack</p>
            <p><span>Funções: </span>Desenvolvedor, QA</p>
            <div>
              <a href="https://github.com/joeljrbeginner" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              {/* <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <LinkedIn />
              </a> */}
              {/* <a href="https://www.instagram.com/no_muggles_pls/" target="_blank" rel="noreferrer">
                <Instagram />
              </a> */}
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/killbazz.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Marlon Bassoto</p>
            <p><span>Objetivo: </span>Desenvolvedor Java Full Stack</p>
            <p><span>Funções: </span>Product Owner, SCRUM Master, Desenvolvedor, QA</p>
            <div>
              <a href="https://github.com/killbazz" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://www.linkedin.com/in/marlon-bassoto-93b187261" target="_blank" rel="noreferrer">
                <LinkedIn />
              </a>
              {/* <a href="https://www.instagram.com/no_muggles_pls/" target="_blank" rel="noreferrer">
                <Instagram />
              </a> */}
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/wagnermor.png" alt="Carolina Bertulli" style={{background:'var(--gray-500)'}}/>
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Wagner Moreira</p>
            <p><span>Objetivo: </span>Desenvolvedor Java Full Stack</p>
            <p><span>Funções: </span>Tech Lead, Product Owner, SCRUM Master, Desenvolvedor, QA</p>
            <div>
              <a href="https://github.com/wagnermor" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/in/wagnermor" target="_blank" rel="noreferrer">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  )
}
export default SobreNos;
