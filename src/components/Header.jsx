import React, { useState } from 'react'
import styled from 'styled-components'

import  MenuIcon  from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)

  return (
    <Container>
      
      <Logo>
        <a href='2#'>
          <img src="/images/logo.svg" alt="Logo" />
        </a>
      </Logo>
      <Menu>
        <a href="2#">Model 3</a>
        <a href="2#">Model Y</a>
        <a href="2#">Model S</a>
        <a href="2#">Model X</a>
      </Menu>
      <RightMenu>
        <a href='2#'>Shop</a>
        <a href='2#'>Tesla Account</a>
        <CustomBurger onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)} />
        <li><a href='2#'>Model 3</a></li>
        <li><a href='2#'>Model Y</a></li>
        <li><a href='2#'>Model S</a></li>
        <li><a href='2#'>Model X</a></li>
        <li><a href='2#'>Existing inventory</a></li>
        <li><a href='2#'>Use inventory</a></li>
        <li><a href='2#'>Existing inventory</a></li>

      </BurgerNav>
    </Container>
  );
}

export default Header

const Container = styled.div`
  z-index: 1;
  wight: 100%;
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Logo = styled.div`

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    color: #171a20;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 10px;
    white-space: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #171a20;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 10px;
    white-space: nowrap;
  }
`;

const CustomBurger = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  width: 300px;
  background-color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  li {
    list-style: none;
    padding 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 500;
      color: #171A20;
    }
  }
  
`
const CustomClose = styled(CloseIcon)`
 position: absolute;
 top: 20px;
 right: 20px;
`
