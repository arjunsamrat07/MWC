import React from 'react'
import "./Register.css"

const Register = () => {
    return (
        <div className='login_main'>
        <form action="" >
        <h5>Sign Up</h5>
          <label htmlFor="">Email Id</label>
          <input placeholder='Enter your registered email' type="text" />
          <label  htmlFor="">Password</label>
          <input placeholder='Enter password' type="text" />
          <button>Sign Up</button>
        </form>
      </div>
    )
}

export default Register
