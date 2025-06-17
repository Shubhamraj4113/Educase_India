import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div className='input-group'>
        <div class="input-container">
          <input 
            type="email"  
            placeholder="Enter email address" 
            required 
          />
          <label htmlFor="email">
            Email Address
          </label>
        </div>
        <div class="input-container">
          <input 
            type="password"  
            placeholder="Enter password" 
            required
          />
          <label htmlFor="password">
            Password
          </label>
        </div>
      </div>
      <button type='submit' className='login-btn '>Login</button>
    </form>
  )
}

export default Login