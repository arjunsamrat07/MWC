import React from 'react'
import { useState } from 'react'
import "./Login.css"
import { HiOutlineIdentification } from 'react-icons/hi'
import { MdSecurity } from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const [userType, setUserType] = useState(true)   // true = security /////   false = gate entry
  const logIn = (e) => {
    e.preventDefault()
    navigate(userType ? 'cameras' : 'vehicle')
  }
  return (
    <div className='login_main'>
      <div className='head-icon'>
        {
          userType ?
            <MdSecurity className='from-left' />
            :
            <HiOutlineIdentification className='from-right' />
        }
      </div>
      <h4 className='heading'>Sign In</h4>
      <div className='main_buttons'>
        <button onClick={() => setUserType(true)} className={userType ? 'btn active' : 'btn'}><i class="fa-regular fa-circle-user"></i>  Security</button>
        <button onClick={() => setUserType(false)} className={!userType ? 'btn active' : 'btn'}><i class="fa-regular fa-circle-user"></i> Gate entry</button>
        <span style={!userType ? {transform:'translateX(100%)'}:{}} className="btn-bg"></span>
      </div>
      <form action="" >
        <label htmlFor="">Email Id</label>
        <input placeholder='Enter your registered email' type="text" />
        <label htmlFor="">Password</label>
        <input placeholder='Enter password' type="text" />
        <span><a href="">forgot password?</a></span>
        <button onClick={logIn} className='btn sign-in'>Sign In</button>
        <span>Don't have an account? <a href="">Sign up</a> </span>
      </form>
    </div>
  )
}

export default Login
