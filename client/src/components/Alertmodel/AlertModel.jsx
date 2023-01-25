import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import "./alertmodel.css"

function AlertModel(props) {
  const [alertmodelData, setAlertmodelData] = useState({securityPin:""})

  const handleChange = (e)=>{
    setAlertmodelData({...alertmodelData, [e.target.name]:e.target.value})
  }
  return (
    <div className='alertmodel'>
      <div className="container">
        <img src="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" alt="" className="detection-image" />

        <div className="data">
          <div className="detection">
            <span>Detection</span> <span>:-</span> <span>{props.alert.data.detection}</span>
          </div>

          <div className="time">
            <span>Time</span> <span>:-</span> <span>{props.alert.data.detectionTime}</span>
          </div>
          <div className="actions">
            <Input type='password' name="securityPin" onChange={handleChange} style={{ textAlign: 'center' }} className='pswdinput' placeholder='Enter Security Key to Stop Alarm ' />
            <span>
              <Button className='stopalarmbtn' onClick={()=>{
                props.alertAudio.pause()
                props.setalert(() => { return {alert:false,data:{}, minimizedAlarm:true} })
              }} disabled={alertmodelData.securityPin.length !== 6} variant='contained' >Stop Alarm</Button>
              <Button className='minmizealarmbtn' onClick={() => {
                props.alertAudio.pause()
                props.setalert(state => { return { ...state, minimizedAlarm: false } })
              }}
                variant=''>Minimize Alarm</Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertModel
