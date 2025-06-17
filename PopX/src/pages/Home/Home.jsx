import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/signup');
  }

  const handleLogin = () => {
    navigate('/login'); 
  }

  return (
    <div className='home'>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div className='btn-group'>
        <button 
          className='create-btn'
          onClick={handleCreateAccount}
        >Create Account</button>
        <button 
          className='log-in-btn'
          onClick={handleLogin}
        >Already Registered? Login</button>
      </div>
    </div>
  )
}

export default Home