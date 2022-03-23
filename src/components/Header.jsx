import React from 'react'
import styled from 'styled-components'
import  MenuIcon  from "@mui/icons-material/Menu";

const Header = () => {
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
        <CustomBurger />
      </RightMenu>
      <BurgerNav>
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

const Container  = styled.div`
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
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 10px;
    white-space: nowrap;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 10px;
    white-space: nowrap;
  }
`

const CustomBurger = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  
`
