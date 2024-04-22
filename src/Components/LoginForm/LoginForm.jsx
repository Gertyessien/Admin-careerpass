import React from 'react';
import './LoginForm.css';
import pic from "../Assets/loginpicture.jpg"
import logo from "../Assets/logo.png"

const LoginForm = () => {
  return (

    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='container'>
        <div className='wrapper'>
          <div className="hero_left">
            <div className='logo'>
              <img src={logo} alt="app logo" />
            </div>
            <form action="">
              <h1>Welcome Back</h1>
              <h6>please login to access your dashboard</h6>
              <div className="input-box">
                <label>Username</label>
                <input type='text' placeholder='Enter your Name' required />
              </div>
              <div className="input-box">
                <label>Password</label>
                <input type='text' placeholder='Enter your Password' required />
              </div>
              <button type="submit" className="continue">login</button>
              <div className="forget-reset">
                <p>Forget Password? <span>Reset here</span></p>
              </div>
            </form>
          </div>
          <div className='pic'>
            <img src={pic} alt="hero picture" className="hero_pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;