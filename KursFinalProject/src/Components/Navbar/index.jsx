import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import logo from '../../Assets/Logo/EDMA.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIntroduction from './DropDownMenu';
import lang from '../../Assets/Language/lang';

const Nav = styled.div`
  width: 100%;
  @media (max-width: 900px) {
    width: 500px;
  }
  position: fixed;
  background-color: #ffffff6e;
  .scroll {
    height: 60px;
  }
`;

const NavComponents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  transition: all 0.4s ease-in-out;
  
  img {
    height: 24px;
    object-fit: contain;
  }
  
  ul {
    @media (max-width: 900px) {
      display: none;
    }
    list-style: none;
    display: flex;
    align-items: center;
    line-height: 10px;
    
    li {
      padding: 26px 22px;
      
      a {
        font-size: 13px;
        color: #003d6d;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
`;

const Navbar = () => {
  const [y, setY] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "defaultLanguage");

  useEffect(() => {
    setY(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setY(window.scrollY > 100);
  };

  const menuItems = lang[language]?.menubar || [];

  return (
    <Nav>
      <Container maxWidth="lg">
        <NavComponents className={`${y ? "scroll" : ""}`}>
          <img src={logo} alt="idkman" />
          <ul>
            {menuItems.map((el) => (
              <li key={el.slug}>
                <Link to={`/${el.slug}`}>{el.name}</Link>
              </li>
            ))}
            <li><MenuIntroduction /></li>
          </ul>
        </NavComponents>
      </Container>
    </Nav>
  );
};

export default Navbar;
