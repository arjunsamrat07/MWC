import React from 'react'
import "./Alert.css"
import AlertImage from "../../assets/toll.jpg"

const Alert = () => {
    return (
        <div className='alert_main'>

            <div className='alert_left'>
                <div className="alert_details">
                    <div></div>

                    <i class="fa-solid fa-circle-exclamation"></i>
                    <h3>Time : </h3>
                    <h3>Alert Type : &nbsp; Neelgai Detected</h3>

                </div>
            </div>


            <div className='alert_right'>
                <img src={AlertImage} alt="" />
            </div>
        </div>
    )
}

export default Alert
