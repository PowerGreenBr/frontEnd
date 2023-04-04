import { GitHub } from '@material-ui/icons';

import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.content}>
			<div className={styles.prefooter}>
					<a href='https://github.com/PowerGreenBr/frontEnd' target={'_blank'} rel="noreferrer">
						<p><GitHub /> Repositório - front-end</p>
					</a>
					<a href='https://github.com/PowerGreenBr/backEnd' target={'_blank'} rel="noreferrer">
						<p><GitHub /> Repositório - back-end</p>
					</a>
			</div>
			<section className={styles.footer}>
				<p>© 2023 Copyright - Colaboradores PowerGreen|Brasil</p>
			</section>
		</footer>
	)
}
