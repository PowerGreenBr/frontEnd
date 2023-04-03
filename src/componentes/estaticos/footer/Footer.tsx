import { GitHub } from '@material-ui/icons';

import styles from './Footer.module.css';

export default function Footer() {
	return (
		<>
		<footer className={styles.footer}>
			<div className={styles.prefooter}>
				<div>
					<h3>Equipe</h3>
					<ul>
						<li>Carolina Bertulli</li>
						<li>Henrique</li>
						<li>Jessica Cavalcante</li>
						<li>Joel Junior</li>
						<li>Marlon Bassoto</li>
						<li>Wagner Moreira</li>
					</ul>
				</div>
			</div>

			<div className={styles.footerFooter}>
				<a href='https://github.com/PowerGreenBr' target={'_blank'} rel="noreferrer">
  	      <GitHub />
    	  </a>
				<p>
					<a href="https://bit.ly/powergreenbr" target={'_blank'} rel="noreferrer">
          	Conheça nosso projeto e equipe de desenvolvimento
        	</a>
				</p>
				<p>© 2023 Copyright - Colaboradores PowerGreen|Brasil</p>
			</div>
		</footer>
		</>
	)
}
