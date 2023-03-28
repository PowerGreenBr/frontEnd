import { GitHub } from '@material-ui/icons';

import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a href='https://github.com/PowerGreenBr' target={'_blank'} rel="noreferrer">
        <GitHub />
      </a>
			<h3>
				<a href="https://bit.ly/powergreenbr" target={'_blank'} rel="noreferrer">
          Conheça nosso projeto e equipe de desenvolvimento
        </a>
			</h3>
			<p>© 2023 Copyright - Colaboradores PowerGreen|Brasil</p>
		</footer>
	)
}
