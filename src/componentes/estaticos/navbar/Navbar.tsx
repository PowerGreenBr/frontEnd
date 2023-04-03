import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

import styles from './Navbar.module.css';
import icon from '../../../assets/powergreenbr-icon.png';


function Navbar() {
	const [classOn, setClassOn] = useState<boolean>(true);
	
	let dispatch = useDispatch()
	const token = useSelector<TokenState, TokenState['token']>(
		(state) => state.token
	);
	let navigate = useNavigate();

	function goLogout() {
		dispatch(addToken(''))
		toast.info('Usuário deslogado', {
			position: "top-right",
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

	return(
		<header className={styles.content}>
    	<div className={styles.container}>
				<Link to="/home">
					<div className={styles.logo}>
						<div className={styles.logoIcon}>
							<img src={icon} alt="" />
						</div>
						<div>
							<p>PowerGreen</p>
							<p>Brasil</p>
						</div>
	      	</div>
				</Link>

      	<div className = { classOn ? `${styles['menu-section']} ${styles.on}` : `${styles['menu-section']}`} onClick={() => setClassOn(!classOn)}>
					<div className={styles['menu-toggle']}>
						<div className={styles.one}></div>
						<div className={styles.two}></div>
						<div className={styles.three}></div>
					</div>

					<nav>
						<ul>
							<li>
								<Link to='/planos'>
	            		PLANOS
								</Link>
							</li>
							<li>
								<Link to='/produtos'>
                PRODUTOS
								</Link>
							</li>
              <li>
								<Link to='/assinar'>
            			ASSINATURAS
								</Link>
              </li>
							<li>
								<Link to='/sobre-nos'>
	            		Sobre nós
								</Link>
							</li>
								{/* <Link to='/cadastrar-planos'>
								<Link to='/cadastrar-produto'> */}
              <li onClick={goLogout}>
                <span className={styles.sair}>{token === '' ? 'LOGIN' : 'SAIR'}</span>
              </li>
            </ul>
          </nav>

				</div>
			</div>
		</header>
	)
}
export default Navbar;
