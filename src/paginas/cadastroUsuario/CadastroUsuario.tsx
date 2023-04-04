import React, { ChangeEvent, useEffect, useState} from 'react';
import { TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastro } from '../../services/Services';
import User from '../../model/Usuario';
import { toast } from 'react-toastify';

import styles from './CadastroUsuario.module.css';
import './CadastroUsuario.css';

function CadastroUsuario() {
	let navigate = useNavigate();
	const [confirmarSenha,setConfirmarSenha] = useState<String>("")
	const [user, setUser] = useState<User>({
		id: 0,
		nome: '',
		usuario: '',
		foto: '',
		senha: ''
	})

	const [userResult, setUserResult] = useState<User>({
		id: 0,
		nome: '',
		usuario: '',
		foto: '',
		senha: ''
	})

	useEffect(() => {
		if (userResult.id !== 0) {
			navigate("/login")
		}
	}, [userResult])

	function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
		setConfirmarSenha(e.target.value)
	}

	function updatedModel(e: ChangeEvent<HTMLInputElement>) {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		if(confirmarSenha === user.senha){
			await cadastro('/usuarios/cadastrar', user, setUserResult)
			toast.success('Usuario cadastrado com sucesso')
		}else{
			toast.warn('Dados inconsistentes. Favor verificar as informações de cadastro.')
		}
	}

	return (
		<div className={styles.content}>
      <aside>
        <img src='https://i.imgur.com/gl3eMog.png' alt="" />
      </aside>
      <main>
        <form onSubmit={onSubmit}>
          <h1>Cadastro</h1>
					<TextField className='inputCadastro' value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
					<TextField className='inputCadastro' value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='e-mail' variant='outlined' name='usuario' margin='normal' fullWidth />
					<TextField className='inputCadastro' value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
					<TextField className='inputCadastro' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
					<footer>
						<Link to='/login' className='text-decorator-none'>
 							<button className={styles.btn_cancelar}>
								Cancelar
							</button>
						</Link>
            <button type="submit">
              Cadastrar
            </button>
          </footer>
        </form>
      </main>
    </div>
	);
}
// {/* <main>
// 	<form onSubmit={onSubmit}>
// 		<aside>
// 			<Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
// 			<TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
// 			<TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
// 			<TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
// 			<TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
// 		</aside>
// 			<div>
// 				<Link to='/login' className='text-decorator-none'>
// 					<button >
// 						Cancelar
// 					</button>
// 				</Link>
// 				<button type='submit'>
// 					Cadastrar
// 				</button>
// 			</div>
// 	</form>
// </main> */}
export default CadastroUsuario;
