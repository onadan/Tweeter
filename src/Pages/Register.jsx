import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

function Register() {
  document.title = "Register an account on Tweeter"
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const registerAccount = (e) =>{
    e.preventDefault()
    console.log(email, password);
  }
  return (
    <div>
      <Navbar />
      <Container>
        <h1 style={{color: '#0C47A1'}}>Join Tweeter Today</h1>
        <form onSubmit={registerAccount}>
          <FormData>
            <label htmlFor="email">Email Address:</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
          </FormData>
          <FormData>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
          </FormData>
          <Button>Register</Button>
        </form>
      </Container>
    </div>
  )
}

export default Register

const Container = styled.div`
width:90%;
margin:0 auto;
height:85vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
form{
  display:flex;
flex-direction:column;
gap:20px;
width:40%;
margin: 0 auto;
border: 1px solid #E6E6E6;
border-radius:5px;
padding:20px;
}
@media (max-width:950px){
  form{
    width:70%;
  }
}
@media (max-width:600px){
  form{
    width:90%;
  }
}
`

const FormData = styled.div`
display:flex;
flex-direction:column;
gap:5px;
font-size: 18px;
input{
  border-radius:5px;
  padding:10px;
  outline:none;
  border:  1px solid #E6E6E6;
}
`

const Button = styled.button`
background: #0C47A1;
outline:none;
border:none;
color:#fff;
border-radius:5px;
padding:15px 0;
cursor:pointer;
font-size:16px;
`