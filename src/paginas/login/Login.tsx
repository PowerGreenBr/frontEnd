import { Grid, Typography, TextField } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={8} alignItems="center">
        <Box padding={8}>
          <form>
            <Typography
              variant="h3"
              color="textPrimary"
              component="h1"
              align="center"
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" color="primary">
                  Entrar
                </Button>
              </Link>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography 
                variant='subtitle1' 
                align="center"
                gutterBottom
              >
                Cadastre-se <span> </span>
                <Link to="/cadastro">
                  AQUI
                </Link>
            
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className='img'>
      </Grid>
    </Grid>
  )
}

export default Login