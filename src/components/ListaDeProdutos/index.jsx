import { ArrowForward, Visibility } from '@mui/icons-material';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

const ListaDeProdutos = () => {
    return(
        <>
            <Box
                component='div'
                sx={
                    {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom:'20px'
                    }
                    }>
                <Typography 
                    variant='h1'
                    sx={{
                        fontSize:'24px', 
                        fontWeight:'bold', 
                        color:'#474747',
                        lineHeight: '38px'}}>Lista de produtos</Typography>
                <Button 
                    endIcon={<ArrowForward/>} 
                    sx={
                        {
                            textTransform:'initial', 
                            color:'#C92071',
                            '&:hover':{
                                backgroundColor:'transparent'
                            }
                        }}>Ver todos</Button>
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto1</Grid>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto2</Grid>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto2</Grid>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto2</Grid>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto1</Grid>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto2</Grid>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto2</Grid>
                <Grid item sm={3} xs={12} sx={{border: '1px solid red'}}>produto2</Grid>
            </Grid>
        </>
    );
}

export default ListaDeProdutos;