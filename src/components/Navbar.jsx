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
height:15vh;
display:flex;
`