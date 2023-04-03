import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import styles from './Home.module.css';
import { Link } from "react-router-dom";
import Carousel from './Carousel';


export default function Home (){
	return(
		<main className={styles.content}>
      {/* <Carousel 
        className={styles.carousel}
        show={4} 
        slide={1}
        rightArrow={<ChevronRightIcon fontSize="large" />} 
        leftArrow={<ChevronLeftIcon fontSize="large" />} 
      >
        <img src="https://i.imgur.com/V96FdnV.jpg" className={styles.img} />
        <img src="https://i.imgur.com/R4S3PGP.jpg" className={styles.img} />
        <img src="https://i.imgur.com/gUXbaZZ.jpg" className={styles.img} />
        <img src="https://i.imgur.com/dcUnvaU.jpg" className={styles.img} />
        <img src="https://i.imgur.com/vpCvw2t.jpg" className={styles.img} />
      </Carousel> */}
      <Carousel />
      <div className={styles.text}>
			<h1 >Locação de baterias para veículos elétricos por assinatura </h1>
      <p>
        Bem vindo à Power Green BR,
        a empresa líder em locação de baterias para veículos elétricos
        por assinatura.
      </p>
      <p>
        Estamos comprometidos em fornecer uma solução 
        sustentável e acessível para a mobilidade elétrica, permitindo
        que você desfrute dos benefícios de um veículo elétrico sem se 
        preocupar com a compra e manutenção da bateria.
      </p>
      <p>
        Nossa equipe altamente qualificada está pronta para ajudá-lo em todas as etapas
        do processo, desde a escolha do plano de assinatura até a instalação
        da bateria em seu veículo. 
      </p>
      <p>
        Junte-se a nós agora e torne-se parte
        da mudança para um futuro mais verde e limpo.
      </p>
      </div>
      
      <footer>
        <Link to='/login'>
          <button>Faça seu login</button>
        </Link>
      </footer>
		</main>
	);
}