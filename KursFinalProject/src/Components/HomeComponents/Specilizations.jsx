import React from 'react'
import { Container, Grid } from '@mui/material'
import styled from 'styled-components';
import Spec1Logo from '../../Assets/Images/service-01.png';
import Spec2Logo from '../../Assets/Images/service-02.png';
import Spec3Logo from '../../Assets/Images/service-03.png';
import bg01 from '../../Assets/Images/SpecBg01.png';
import bg02 from '../../Assets/Images/SpecBg02.png';
import bg03 from '../../Assets/Images/SpecBg03.png';

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

const Spec1 = styled.div` 
    width: 100%;
    text-align: center;
    background-image: url(${bg01});
    background-repeat: no-repeat;
    background-position: center;
    img{
        padding: 15px 0px;
        transition: 0.3s ease;
        &:hover {
          transform: translateY(-5px);
        }
    }
    h3{
        font-weight: 500;
        font-size: 18px;
        color: #222;
        text-transform: uppercase;
    }
    p{
        text-align: justify;
    }
`
const Spec2 = styled.div`
    width: 100%;
    text-align: center;
    background-image: url(${bg02});
    background-repeat: no-repeat;
    background-position: center;
    img{
        padding: 15px 0px;
        transition: 0.3s ease;
        &:hover {
          transform: translateY(-5px);
        }
    }
    h3{
        font-weight: 500;
        font-size: 18px;
        color: #222;
        text-transform: uppercase;
    }
    p{
        text-align: justify;
    }
    
`
const Spec3 = styled.div`
    width: 100%;
    text-align: center;
    background-image: url(${bg03});
    background-repeat: no-repeat;
    background-position: center;
    img{
        padding: 15px 0px;
        transition: 0.3s ease;
        &:hover {
          transform: translateY(-5px);
        }
    }
    h3{
        font-weight: 500;
        font-size: 18px;
        color: #222;
        text-transform: uppercase;
    }
    p{
        text-align: justify;
    }
    
`

const Specilizations = () => {
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6}>
                <Title>
                    <h3>What we do</h3>
                    <h1>Our specilization</h1>
                </Title>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Spec1>
                    <img src={Spec1Logo} alt="" />  
                    <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
                    <p>We are keen to adapt our projects to the latest developments and using the high-end technology by always being focused in the clients requests, which we consider the key to success.</p>
                </Spec1>
            </Grid>
            <Grid item xs={12} md={4}>
                <Spec2>
                    <img src={Spec2Logo} alt="" />
                    <h3>HVAC ENGINEERING</h3>
                    <p>Our range and technical expertise ensures we offer a convenient solution for the mechanical services industry that is the best in our region.</p>
                </Spec2>
            </Grid>
            <Grid item xs={12} md={4}>
                <Spec3>
                    <img src={Spec3Logo} alt="" />
                    <h3>WWTP</h3>
                    <p>Project Plus has a host of innovative solutions on offer, not to mention a wealth of knowledge and regional experience on completing turnkey projects for Waste Water Treatment Plants</p>
                </Spec3>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Specilizations