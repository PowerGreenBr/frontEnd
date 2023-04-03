import { GitHub } from '@material-ui/icons';

import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.content}>
			<div className={styles.prefooter}>
				<div className={styles.equipe}>
					<h3>Equipe:</h3>
					<ul>
						<li>Carol Bertulli</li>
						<li>Henrique Ferreira</li>
						<li>Jessica Cavalcante</li>
						<li>Joel Junior</li>
						<li>Marlon Bassoto</li>
						<li>Wagner Moreira</li>
					</ul>
				</div>

				<div className={styles.footerFooter}>
					<a href='https://github.com/PowerGreenBr' target={'_blank'} rel="noreferrer">
						<p><GitHub /> Repositório - front-end</p>
					</a>
					<a href='https://github.com/PowerGreenBr' target={'_blank'} rel="noreferrer">
						<p><GitHub /> Repositório - back-end</p>
					</a>
				</div>
			</div>
			<section className={styles.footer}>
				<p>© 2023 Copyright - Colaboradores PowerGreen|Brasil</p>
			</section>
		</footer>
	)
}
