import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import {React, useState, useEffect } from 'react';
import "../../Pages/Style/styles.css";
import { Container, Modal, Box, Button } from '@mui/material';
import Login from './Login';
import { AppStateProvider } from '../Context/AppStateProvider';
import SignUp from './SignUp';
import {jwtDecode} from 'jwt-decode';

const Head = styled.div`
    position: fixed;
    z-index: 10;
    height: 75px;
    width: 100%;
    background-color: #00000083;
    transition: background-color 0.6s ease-in;
    &.scrolled {
        background-color: transparent;
    }

`;

const HeaderComps = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
    height: 75px;
    transition: background-color 0.6s ease-in-out;
    font-size: 20px;
    &.scrolled{
        margin-top: 10px;
        background-color: #00000083;
        height: 60px;
        border-radius: 15px;
        font-size: 15px;
        button{
            font-size: 12px;
            padding: 5px 15px;
        }
    }
    ul{
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0px;
        margin-right: 25px;
        li{
            margin-left: 20px;
            a{
                text-decoration: none;
            }
            button{
                border: none;
                border-radius: 10px;
                padding: 5px 20px;
                background-color: #ffc800;
                color: #fff;
                transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                font-weight: 600;
                font-size: 15px;
            }
            button:hover{
                background-color: #d9aa00;
            }
            
        }
    }
     
`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,  
};

const switcher = {
    cursor: 'pointer',
    color: '#ffc800',
}

const Header = () => {    
    
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleLogin = () => {
        setShowLogin(true);
    };

    const toggleSignUp = () => {
        setShowLogin(false);
    };

    return (
        <Head className={scrolled ? 'scrolled' : ''}>
            <Container>
                <HeaderComps className={scrolled ? 'scrolled' : ''}>
                    <Drawer />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/taxi">Order Taxi</Link></li>
                        <li><Link to="/rent">Rent Car</Link></li>
                        {localStorage.getItem("token") ? (
                            <li><Button onClick={() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem("userInfo");
                                window.location.reload();
                            }}>LOG-OUT</Button></li>
                        ) : (
                            <li><Button onClick={handleOpen}>LOG-IN</Button></li>
                        )}
                    </ul>
                </HeaderComps>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <AppStateProvider>
                    {showLogin ? (
                        <>
                            <Login />
                            <p>Don't have an account? <a style={switcher} onClick={toggleSignUp}>Register</a></p>
                        </>
                    ) : (
                        <>
                            <SignUp />
                            <p>Already have an account? <a style={switcher} onClick={toggleLogin}>Login</a></p>
                        </>
                    )}
                </AppStateProvider>
                </Box>
            </Modal>
        </Head>
    );
};

export default Header;

