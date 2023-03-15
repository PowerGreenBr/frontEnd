import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer() {
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box style={{ backgroundColor: "#000", height: "120px" }}>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Conheça nossa Equipe e Projeto </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" >
                            <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" >
                            <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" >
                            <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "#000", height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:T59G2</Typography>
                    </Box>
                    <Box>
                        <a href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">PowerGreenBr</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
    )
}

export default Footer;