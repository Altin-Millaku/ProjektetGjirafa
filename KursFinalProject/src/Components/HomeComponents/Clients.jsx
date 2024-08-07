import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '@mui/material';
import client1 from '../../Assets/Clients/1.png'
import client2 from '../../Assets/Clients/2.png'
import client3 from '../../Assets/Clients/3.png'
import client4 from '../../Assets/Clients/4.png'
import client5 from '../../Assets/Clients/5.png'
import client6 from '../../Assets/Clients/6.png'
import client7 from '../../Assets/Clients/7.png'
import client8 from '../../Assets/Clients/8.png'
import client9 from '../../Assets/Clients/9.png'
import client10 from '../../Assets/Clients/10.png'
import client11 from '../../Assets/Clients/11.png'
import client12 from '../../Assets/Clients/12.png'

const Title = styled.div`
    text-align: center;
    padding: 60px 0px;
    h3{
        color: grey;
        font-weight: 500;
        font-size: 11px;
        letter-spacing: 3px;
        text-transform: uppercase;
    }
    h1{
        font-size: 38px;
        font-weight: 400;
        color: #222;
    }
`

const Klientat = styled.div`
    padding-bottom: 150px;
    img{
        filter: grayscale(100%);
        transition: 0.3s ease;

        &:hover {
          filter: none;
          transform: translateY(-3px);
        }
    }
`

const Clients = () => {
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6}>
                <Title>
                    <h3>AWESOME PARTNER</h3>
                    <h1>Our Clients</h1>
                </Title>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
        </Grid>
        <Klientat>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}><img src={client1} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client2} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client3} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client4} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client5} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client6} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client7} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client8} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client9} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client10} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client11} alt="" /></Grid>
                <Grid item xs={6} md={3}><img src={client12} alt="" /></Grid>
            </Grid>
        </Klientat>
    </Container>
  )
}

export default Clients