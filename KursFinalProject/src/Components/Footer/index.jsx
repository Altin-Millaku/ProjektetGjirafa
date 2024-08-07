import { Container, Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import footerPic from '../../Assets/Images/Footer.jpg';
import logo from '../../Assets/Logo/EDMA.png';
import { Link } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';


const Info = styled.div`
    width: 100vw;
    background-image: url(${footerPic});
    height: max-content;
    background-size: 100% auto;
    background-position: center;
`

const Hue = styled.div`
    height: 100%;
    background-color: #000000c7;
    .a{
        img{
        height: 50px
        }
        ul{
            list-style: none;
            padding:0;
            li{
                color: white;
                margin: 25px 0;
            }
        }
    }
    .b{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px;
        padding: 0px;
        h3{
            color: white;
        }
        ul{
            list-style: none;
            li{
                margin: 15px 0;
                a{
                    color: white;
                    text-decoration: none;
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    .c{
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            ul{
                list-style: none;
                li{
                    margin: 15px 0px;
                    color: white;
                }
            }
        }
    

`

const Footer = () => {
  return (
    <Info>
        <Hue>
            <Container maxWidth='lg' style={{paddingTop: "50px"}}>
                <Grid container spacing={2}>
                    <Grid className='a' item xs={12} md={4}>
                        <img src={logo} alt="" />
                        <ul>
                            <li>Adresse : Täfernstrasse 2a 5405 Dättwil</li>
                            <li>Tel : 079 586 00 92</li>
                            <li>Tel : 044 593 54 11</li>
                            <li>Email : edma@gmx.ch</li>
                        </ul>
                    </Grid>
                    <Grid className='b' item xs={12} md={4}>
                        <ul>
                            <h3>Link</h3>
                            <li><Link  to='/' >Home</Link></li>
                            <li><Link  to='/about' >About</Link></li>
                            <li><Link  to='/service' >Services</Link></li>
                            <li><Link  to='/project' >Projects</Link></li>
                            <li><Link  to='/contact' >Contact</Link></li>
                        </ul>
                    </Grid>
                    <Grid className='c' item xs={12} md={4}>
                        <ul>
                            <li>COPYRIGHT</li>
                            <li>Copyright © 2023 | EDMA</li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </Hue> 
    </Info>
  )
}

export default Footer