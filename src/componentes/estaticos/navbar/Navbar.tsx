import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import './Navbar.css'


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

	return(
		<>
		{/* <div className='banner'>
			<img src="https://i.imgur.com/gl3eMog.png" alt="" />
		</div> */}
		<header>
    	<div className="container">
				<div className='logo'>
					<div>
						<p>PowerGreen</p>
						<p>Brasil</p>
					</div>
      	</div>

      	<div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
					<div className="menu-toggle">
						<div className="one"></div>
						<div className="two"></div>
						<div className="three"></div>
					</div>

					<nav>
						<ul>
							<li>
								<Link to='/home'>
									HOME
								</Link>
							</li>
							<li>
								<Link to='/produtos'>
                PRODUTOS
								</Link>
							</li>
							<li>
								<Link to='/planos'>
	            		PLANOS
								</Link>
							</li>
              <li>
								<Link to='/assinar'>
            			ASSINATURAS
								</Link>
              </li>
              <li>
								<Link to='/cadastrar-planos'>
            			CADASTRAR PLANO
								</Link>
              </li>
              <li>
								<Link to='/cadastrar-produto'>
            			CADASTRAR PRODUTO
								</Link>
              </li>
              <li onClick={goLogout}>
                <span className='sair'>SAIR</span>
              </li>
            </ul>
          </nav>

				</div>
			</div>
		</header>
		</>
	)
}
export default Navbar;
