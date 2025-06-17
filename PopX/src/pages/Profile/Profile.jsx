import React from 'react'
import './Profile.css'
import profile from '../../assets/profile-L.png'
import camera from '../../assets/camera.png'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='top'>
        <h1>Account Settings</h1>
        <div className='profile-container'>
          <div className='img-container'>
            <img className='profile-icon' src={profile} alt="profile-icon" />
            <img className='camera-icon' src={camera} alt="camera-icon" />
          </div>
          <div className='text-container'>
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <h4>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</h4>
      </div>
      <div className='bottom'>------------------------------------------------</div>
    </div>
  )
}

export default Profile