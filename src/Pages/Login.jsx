import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../store/auth'

function Register() {
  document.title = "Login To Tweeter"
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {loading} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar />
      <Container>
        
        <h1 style={{color: '#0C47A1'}}>Login</h1>
        <form onSubmit={(e)=>{
          e.preventDefault()
          dispatch(Login({email, password}))}
          }>
          <FormData>
            <label htmlFor="email">Email Address:</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
          </FormData>
          <FormData>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
          </FormData>
          <Button>
            {loading && <Loader />}
            {!loading && <p>Register</p>}
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default Register

const Container = styled.div`
width:90%;
margin:0 auto;
display:flex;
flex-direction:column;
align-items:center;
padding-top:80px;
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
display:flex;
flex-direction:column;
align-items:center;
outline:none;
border:none;
color:#fff;
border-radius:5px;
height:50px;
width:100%;
cursor:pointer;
font-size:16px;

`