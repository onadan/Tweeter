import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'

function Navbar() {
  return (
    <Nav>
        <img src={logo} alt="Tweeter logo" />
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
width: 100%;
height:10vh;
display:flex;
box-shadow: 0px 0px 2px 4px rgba(0,0,0,0.1);
`