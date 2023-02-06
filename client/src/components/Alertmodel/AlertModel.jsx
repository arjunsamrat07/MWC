import { Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { useSelector } from 'react-redux'
import AlertList from './AlertList'
import "./alertmodel.css"

function AlertModel(props) {
  // const [alertmodelData, setAlertmodelData] = useState({securityPin:""})
  const reducerStates = useSelector(state => state.mwcReducer.alertList)
  const [currentAlert, setCurrentAlert] = useState(0)

  // const handleChange = (e)=>{
  //   setAlertmodelData({...alertmodelData, [e.target.name]:e.target.value})
  // }
  useEffect(() => {
    console.log(reducerStates)
  
  }, [reducerStates])
  return (
    <div className='alertmodel'>
      <div className="alert-view">
        <img src="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" alt="" className="detection-image" />

        <div className="data">
          <div className="detection">
            <span>Detection</span> <span>&gt;</span> <span>{reducerStates[currentAlert].detection}</span>
          </div>

          <div className="time">
            <span>Time</span> <span>&gt;</span> <span>
              <Moment format="DD / MM / YYYY - HH:MM">
      {reducerStates[currentAlert].detectionTime}
            </Moment>
            </span>
          </div>
          <div className="actions">
            <p className='alarmactiontext'> This Alarm Is: </p>
            {/* <Input type='password' name="securityPin" onChange={handleChange} style={{ textAlign: 'center' }} className='pswdinput' placeholder='Enter Security Key to Stop Alarm ' /> */}
            {/* <span> */}
            <Button className='stopalarmbtn' onClick={() => {
              props.alertAudio.pause()
              props.setalert(() => { return { alert: false, data: {}, minimizedAlarm: true } })
            }} variant='contained' color='success' >False Alarm</Button>
            <Button className='minmizealarmbtn' onClick={() => {
              props.alertAudio.pause()
              props.setalert(state => { return { ...state, minimizedAlarm: false } })
            }}
              variant='contained' color='error'>True Alarm</Button>
            {/* </span> */}
          </div>
        </div>
      </div>
      {reducerStates.length > 1 && <div className="alert-list">
        
        {reducerStates.map((singleAlert, i) =>
         <AlertList setCurrentAlert={setCurrentAlert} currentAlert={currentAlert} index={i} singleAlert={singleAlert} imgsrc="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />
        )}
      </div>}
    </div>
  )
}

export default AlertModel
