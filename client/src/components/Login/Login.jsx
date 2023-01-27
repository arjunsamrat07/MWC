import React from 'react'
import { useState } from 'react'
import "./Login.css"
import { HiKey, HiOutlineIdentification } from 'react-icons/hi'
import { MdSecurity } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userAuth, userLogin } from '../../reducers/reducer'
import { useEffect } from 'react'



function Login() {

  const navigate = useNavigate()
  const [userType, setUserType] = useState(true)   // true = security /////   false = gate entry
  const [action, setAction] = useState('login')   // login  //  register  //  password




  const userData = useSelector(state => state.mwcReducer)
  console.log("lllllllllllllllllllllll",userData)

  const [data, setData] = useState({})

  const setUserData = (e) => {
    setData(
      { ...data, [e.target.name]: e.target.value }
    )
    console.log(data)
  }

  const dispatch = useDispatch()


  const logIn = (e) => {
    e.preventDefault()
    // navigate(userType ? 'cameras' : 'vehicle')
    console.log("??????????", data)
    dispatch(userLogin({data,navigate}))
  }

  useEffect(()=>{
    const userToken = sessionStorage.getItem('userToken')
    dispatch(userAuth({navigate}))
    
  },[])
  return (
    <div className='login_main'>
      <div className='head-icon'>

        {
          userType ?
            <>
              {action === "password" ? <HiKey className='from-left' /> : <MdSecurity className='from-left' />}
            </>
            :
            <>
              {action === "password" ? <HiKey className='from-right' /> : <HiOutlineIdentification className='from-right' />}
            </>
        }
        { }
        {action === "login" && <h4 className='heading from-right'>Sign In</h4>}
        {action === "register" && <h4 className='heading from-left'> Sign Up</h4>}
        {action === "password" && <h4 className='heading from-right'>Reset Password</h4>}
      </div>
      <div className='main_buttons'>
        <button onClick={() => setUserType(true)} className={userType ? 'btn active' : 'btn'}><i className="fa-regular fa-circle-user"></i>  Security</button>
        <button onClick={() => setUserType(false)} className={!userType ? 'btn active' : 'btn'}><i className="fa-regular fa-circle-user"></i> Gate Entry</button>
        <span style={!userType ? { transform: 'translateX(100%)' } : {}} className="btn-bg"></span>
      </div>
      <form action="" >

        {action === "register" && <>
          <label htmlFor="">First Name</label>
          <input placeholder='Enter your First Name' type="text" />

          <label htmlFor="">Last Name</label>
          <input placeholder='Enter your Last Name' type="text" />
        </>}


        <label htmlFor="">Email Id</label>
        <input placeholder='Enter your registered email' type="text" name='email' onChange={setUserData} />

        {action !== 'password' && <>
          <label htmlFor="">Password</label>
          <input placeholder='Enter password' type="text" name='password' onChange={setUserData} />
        </>}

        <p>
          {action === "password" && <span onClick={() => setAction("login")}> Login </span>}
          {action === "login" && <span onClick={() => setAction("password")}> Forgot Password? </span>}
        </p>
        <button onClick={logIn} className='btn sign-in'  >Sign In</button>
        <p>{(action === "login" || action === "password") && <>Don't have an account? <span onClick={() => setAction("register")}> Sign up </span></>}{(action === "register") && <>Have an account? <span onClick={() => setAction("login")}> Login</span></>} </p>
      </form>
    </div>
  )
}

export default Login
