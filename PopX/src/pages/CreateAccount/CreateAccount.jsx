import React from 'react'
import './CreateAccount.css'
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  }

  return (
    <form className='section' onSubmit={handleSubmit}>
      <div className='create-acc'>
        <h1>Create your PopX account</h1>
        <div className='input-group'>
          <div class="input-container">
            <input 
              type="text"  
              placeholder="Enter full name" 
              required 
            />
            <label htmlFor='name' className='text'>
              Full Name<span className='text-red'>*</span>
            </label>
          </div>
          <div class="input-container">
            <input 
              type="number" 
              id='phoneNumber' 
              placeholder="Enter phone number" 
              required 
            />
            <label htmlFor='phoneNumber' className='text'>
              Phone number<span className='text-red'>*</span>
            </label>
          </div>
          <div class="input-container">
            <input 
              type="email"  
              placeholder="Enter Email addres" 
              required 
            />
            <label htmlFor='email' className='text'>
              Email address<span className='text-red'>*</span>
            </label>
          </div>
          <div class="input-container">
            <input 
              type="text"  
              placeholder="Enter password" 
              required 
            />
            <label htmlFor='password'>
              Password<span className='text-red'>*</span>
            </label>
          </div>
          <div class="input-container">
            <input 
              type="text" 
              placeholder="Enter company name" 
            />
            <label htmlFor='companyName' className='text'>
              Company name
            </label>
          </div>
        </div>
        <div class="radio-container">
          <h5>Are you an Agency?<span className='text-red'>*</span></h5>
          <div className='radio-cont'>
            <div class="horizontal">
              <div class="radio-btn">
                <label class="custom-radio">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label> 
              </div>
              <span>Yes</span>
            </div>
            <div class="horizontal">
              <div class="radio-btn">
                <label class="custom-radio">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label> 
              </div>
              <span>No</span>
            </div>
          </div>
        </div>
      </div>
      <button type='submit' className='signup'>
        Create Account
      </button>
    </form>
    
  )
}

export default CreateAccount