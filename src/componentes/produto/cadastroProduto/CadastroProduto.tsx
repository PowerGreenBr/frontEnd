import { Button, Container, FormControl, FormHelperText, InputLabel, Select, TextField, Typography } from '@mui/material';
import React  from 'react'


function CadastroProduto() {

    return (
        <Container maxWidth="sm" className="topo">
            <form >
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar Produto</Typography>
                <TextField id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Produto </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper">
                    </Select>
                    <FormHelperText>Escolha um produto para Cadastrar</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProduto;