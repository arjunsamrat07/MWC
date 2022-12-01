import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import security from "../../assets/security.png"
import "./Home.css"
import Logo from "../../assets/Usmart_Logo-removebg-preview.png"

function Home() {
  return (
    <div className='home_container'>

      {/* Home left section */}
      <div className='home_left'>
        <img src={security} />
      </div>

      {/* Home right section */}
      <div className='home_right'>
        <img src={Logo} />
        <Login />
      </div>

    </div>
  )
}

export default Home
