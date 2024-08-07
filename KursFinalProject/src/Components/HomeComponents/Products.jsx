import { Container, Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Produkte = styled.div`
    margin: 150px 0px;
    ::-webkit-scrollbar {
      height: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #ffffff18;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #bb6868;
      border-radius: 6px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dd2e2e
    }
`

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

const SliderContainer = styled.div`
  margin: 100px 0;
  height: 300px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  
`;  

const SliderImages = styled.div`
    margin: 0px 10px;
    img{
        height: 300px;
    }
`


const Products = ({images}) => {
  return (
    <Produkte>
        <Grid container spacing={2}>
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Title>
                        <h3>AMAZING HOUSES</h3>
                        <h1>Our Projects    </h1>
                    </Title>
                </Grid>
                <Grid item xs={12} md={3}></Grid>
            </Grid>
        <Container style={{display:"flex",alignItems:"center"}}>
            <SliderContainer>
                {images.map((image, index) => (
                  <SliderImages key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                  </SliderImages>
                ))}
              </SliderContainer>
        </Container>
    </Produkte>
    
  )
}

export default Products