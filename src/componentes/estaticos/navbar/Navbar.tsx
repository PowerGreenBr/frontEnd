import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
function Navbar() {
    let dispatch = useDispatch()
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
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
    let navbarComponent

    if (token !== '') {
        navbarComponent = (
            
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Box className='cursor'>
                            <Typography variant="h5" color="inherit">
                                PowerGreenBr
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="start">
                            <Link to="/home" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/produto" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Produtos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/planos" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Planos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/formularioPlanos" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Cadastrar Assinatura
                                    </Typography>
                                </Box>
                            </Link>

                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Sair
                                </Typography>
                            </Box>

                        </Box>

                    </Toolbar>
                </AppBar>
            
        )
    }
    return(
        <>
            {navbarComponent}
        </>
    )
    }

    export default Navbar;