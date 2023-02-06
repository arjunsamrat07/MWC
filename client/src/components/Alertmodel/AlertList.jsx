import React from 'react'
import Moment from 'react-moment'
// import { useSelector } from 'react-redux'

function AlertList({imgsrc, singleAlert,currentAlert, setCurrentAlert, index}) {
  // const reducerStates = useSelector(state => state.mwcReducer.alertList)

    console.log(currentAlert , index)
  return (
    <div className={currentAlert == index ?'alert item active':'alert item'} onClick={()=>setCurrentAlert(index)}>
    {console.log(singleAlert)}
    {/* <span style={{color:'#fff'}}>{reducerStates.length - index}</span> */}
    <img src={imgsrc} alt="" />
    <div className="alertinfo">
      <p className='detection'>{singleAlert.detection}</p>
      <p className='detection-time'><Moment format="DD / MM / YYYY">
      {singleAlert.detectionTime}
            </Moment> </p>
    </div>
  </div>
  )
}

export default AlertList
