import React from 'react'
import './app.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import Profile from './pages/Profile/Profile'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App