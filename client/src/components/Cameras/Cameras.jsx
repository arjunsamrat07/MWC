import React from 'react'
import Camera from './Camera'
import Navbar from '../Navbar/Navbar'
import "./cameras.css"

const Videos = () => {
  return (
    <>
      <Navbar />
      <div className='videos_main'>
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
        <Camera video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />
      </div>
    </>
  )
}

export default Videos
