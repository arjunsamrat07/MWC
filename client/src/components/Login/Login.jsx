import React from 'react'
import "./Login.css"


function Login() {
  return (
    <div className='login_main'>
      <h4>Sign In</h4>
      <div className='main_buttons'>
        <button className='btn'><i class="fa-regular fa-circle-user"></i>  Security</button>
        <button className='btn'><i class="fa-regular fa-circle-user"></i> Gate entry</button>
      </div>
      <form action="" >
        <label htmlFor="">Email Id</label>
        <input placeholder='Enter your registered email' type="text" />
        <label htmlFor="">Password</label>
        <input placeholder='Enter password' type="text" />
        <span><a href="">forgot passwor?</a></span>
        <button className='btn'>Sign In</button>
        <span>Don't have an account? <a href="">Sign up</a> </span>
      </form>
    </div>
  )
}

export default Login
