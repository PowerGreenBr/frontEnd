import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import styles from './SobreNos.module.css';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';

function SobreNos() {
  return (
    <main className={styles.content}>
      <div className={styles.title}>
        <h1>Colaboradores</h1>
      </div>
      <div className={styles.lista}>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/CarolBertulli.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Carolina Bertulli</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>Tester, PM, Desenveloper, UI</p>
            <div>
              <a href="https://github.com/CarolBertulli" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/no_muggles_pls/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/CarolBertulli.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Carolina Bertulli</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>Tester, PM, Desenveloper, UI</p>
            <div>
              <a href="https://github.com/CarolBertulli" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/no_muggles_pls/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/CarolBertulli.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Carolina Bertulli</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>Tester, PM, Desenveloper, UI</p>
            <div>
              <a href="https://github.com/CarolBertulli" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/no_muggles_pls/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/CarolBertulli.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Carolina Bertulli</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>Tester, PM, Desenveloper, UI</p>
            <div>
              <a href="https://github.com/CarolBertulli" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/no_muggles_pls/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/CarolBertulli.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Carolina Bertulli</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>Tester, PM, Desenveloper, UI</p>
            <div>
              <a href="https://github.com/CarolBertulli" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/no_muggles_pls/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cardColaborador}>
          <img src="https://github.com/CarolBertulli.png" alt="Carolina Bertulli" />
          <div className={styles.infoColaborador}>
            <p><span>Nome: </span>Carolina Bertulli</p>
            <p><span>Objetivo: </span>Desenvolvedora Java Full Stack</p>
            <p><span>Funções: </span>Tester, PM, Desenveloper, UI</p>
            <div>
              <a href="https://github.com/CarolBertulli" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/no_muggles_pls/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default SobreNos;
