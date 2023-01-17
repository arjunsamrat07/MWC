import React from 'react'
import "./Vehicle.css"
import VehicleImage from "../../assets/toll.jpg"
import { Link } from 'react-router-dom'

const Vehicle = () => {
    return (
        <div className='vehicle_main'>
            <div style={{width:'100%', fontSize:'40px', marginBottom:'60px'}} className="head-icon top">
                {/* <RiPoliceCarFill className='from-left' /> */}
                <h6 className='heading'>Trace-Passing</h6>
            </div>
            <div className='vehicle_left'>
                <div className="vehicle_details">
                    <div className='vehicle_no'>
                        <h2>MH12KS5454</h2>
                        <h3>Gate No - 3</h3>
                    </div>
                    {true ? <span className='not_registerd'>
                        <i className="fa-regular fa-circle-xmark"></i>
                        <h2>Not Verified</h2>
                        <h5>This car is not registered with MWC</h5>
                        <Link to={"/reg-vehicle"} className='btn'>Register Now</Link>
                    </span>
                    :
                    <span className='verified'>
                        <i class="fa-regular fa-circle-check"></i>
                        <h2>Verified</h2>
                        <h5>This car is registered with MWC.</h5>
                    </span>}


                </div>
            </div>

            <div className='vehicle_right'>
            <img src={VehicleImage} alt="" />
            </div>
        </div>
    )
}

export default Vehicle
