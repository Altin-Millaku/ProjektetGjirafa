import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import aboutPic from "../../Assets/Images/about-01.jpg";

const TextPart = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    h5{
        color: grey;
        font-weight: 400;
    }
    h1{
        font-size: 38px;
        font-weight: 500;
        line-height: 40px;
        color: #222222;
    }
    p{
        line-height: 30px;
        font-size: 14px;
    }
`
const ImagePart = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageDiv = styled.div`
    @media (max-width: 900px) {
        display: none;
    }
    width: 80%;
    height: 80%;
    background-image: url(${aboutPic}) ;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const YearsPart = styled.div`
    width: 90%;
    height: 90%;
`

const Item1 = styled.div`
    width: 100%;
    height: 100%;
    border-left: 1px solid white;
    border-top: 1px solid white;
`

const Item2 = styled.div`
    width: 100%;
    height: 100%;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
`



const Hero = () => {
  return (
    <Container maxWidth='lg' style={{paddingTop: "50px"}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextPart>
                    <h5>About us</h5>
                    <h1>EDMA is a consulting and civil engineering company specializing in the design, supervision and construction of public and private projects.</h1>
                    <p>Founded in 2010 by a team of engineering experts, it has completed more than 400 projects over a period of more than a decade with varying expertise in civil engineering    and    consulting. We strive to adapt our projects to the latest developments and to use cutting-edge technology, always focusing on the customer's wishes, which we consider the  key to  success. Our aim is to develop our projects with high quality, functionality, aesthetics and usability by providing ideas and advice on what the space in which you live,    work or    relax will look like</p>
                </TextPart>
            </Grid>
            <Grid item xs={12} md={6}>
                <ImagePart>
                    <ImageDiv>
                        <YearsPart>
                            <Grid 
                            justifyContent="flex-start"
                            alignItems="flex-start" 
                            container spacing={0}
                            style={{height: "100%"}}
                            >
                                <Grid style={{height: "50%"}} container xs={12} md={12}>
                                    <Grid style={{width: "50%", height: "100%"}} item xs={6} md={6} ><Item1></Item1></Grid>
                                    <Grid item xs={6} md={6} ></Grid>
                                </Grid>
                                <Grid style={{height: "50%"}} container xs={12} md={12}>
                                    <Grid item xs={6} md={6} ></Grid>
                                    <Grid style={{width: "50%", height: "100%"}} item xs={6} md={6}><Item2></Item2></Grid>
                                </Grid>
                            </Grid>
                        </YearsPart>
                    </ImageDiv>

                </ImagePart>
            </Grid>
        </Grid>
    </Container>
  );
};

export default Hero;