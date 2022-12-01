import React from 'react'
import "./Vehicle.css"
import VehicleImage from "../../assets/toll.jpg"

const Vehicle = () => {
    return (
        <div className='vehicle_main'>
            <div className='vehicle_left'>
                <img src={VehicleImage} alt="" />
            </div>

            <div className='vehicle_right'>
                <div className="vehicle_details">
                    <div className='vehicle_no'>
                        <h2>MH12KS5454</h2>
                        <h3>Gate No - 3</h3>
                    </div>
                    {/* <span className='not_registerd'>
                        <i className="fa-regular fa-circle-xmark"></i>
                        <h2>Not Verified</h2>
                        <h5>This car is not registered with MWC</h5>
                        <button className='btn'>Register Now</button>
                    </span> */}

                    <span className='verified'>
                        <i class="fa-regular fa-circle-check"></i>
                        <h2>Verified</h2>
                        <h5>This car is registered with MWC.</h5>
                    </span>


                </div>
            </div>
        </div>
    )
}

export default Vehicle
