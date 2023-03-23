import React from "react";
import './Home.css';
import { Carousel } from '@trendyol-js/react-carousel';
import { Typography } from '@material-ui/core';
import { Box } from "@mui/material";

export default function Home (){
	return(
		<>
    <Box textAlign='center'>
    <Typography >
			<h1 >Locação de baterias para veículos elétricos por assinatura </h1>
			</Typography>
      <p>Bem-vindo à Power Green BR,
        a empresa líder em locação de baterias para veículos elétricos
        por assinatura. Estamos comprometidos em fornecer uma solução 
        sustentável e acessível para a mobilidade elétrica, permitindo
        que você desfrute dos benefícios de um veículo elétrico sem se 
        preocupar com a compra e manutenção da bateria. Nossa equipe 
        altamente qualificada está pronta para ajudá-lo em todas as etapas
        do processo, desde a escolha do plano de assinatura até a instalação
        da bateria em seu veículo. Junte-se a nós agora e torne-se parte
        da mudança para um futuro mais verde e limpo.</p>
      
                <Carousel show={2} slide={1} >
                <img src="https://i.imgur.com/V96FdnV.jpg" className='img' />
                <img src="https://i.imgur.com/R4S3PGP.jpg" className='img' />
                <img src="https://i.imgur.com/gUXbaZZ.jpg" className='img' />
                <img src="https://i.imgur.com/dcUnvaU.jpg" className='img' />
                <img src="https://i.imgur.com/vpCvw2t.jpg" className='img' />
                </Carousel>
              </Box>
		</>
	);
}