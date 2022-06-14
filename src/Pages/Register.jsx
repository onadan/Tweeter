import React, { useState } from 'react'


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
      <form onSubmit={registerAccount}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
        </div>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register