import React, { useEffect, useState } from 'react'
import './regvehicle.css'
import { RiPoliceCarFill } from 'react-icons/ri'

function RegVehicle() {

    const [vehicleData, setVehicleData] = useState({})

    const handleVehicleData = (e)=>{
        setVehicleData({...vehicleData,[e.target.name]:e.target.value})
    }
    
    return (
        <div className='vehicle-reg-form'>
            <div className="head-icon">
                <RiPoliceCarFill className='from-left' />
                <h6 className='heading'>Vehicle Registration Form</h6>
            </div>
            <form action="" >

                    <label htmlFor="">Vehicle Type</label>
                    <input value={vehicleData.type} name="type" onChange={handleVehicleData} placeholder='eg- Car, Truck, Bike' type="text" />

                    <label htmlFor="">Owner Name</label>
                    <input value={vehicleData.ownerName} name="ownerName" onChange={handleVehicleData} placeholder={`eg- John Doe`} type="text" />
                    
                    <label htmlFor="">Mobile Number</label>
                    <input value={vehicleData.mobile} name="mobile" onChange={handleVehicleData} placeholder={`eg- 5689852356`} type="text" />


                    <label htmlFor="">Vehicle Registration Number</label>
                    <input value={vehicleData.regNumber} name="regNumber" onChange={handleVehicleData} placeholder='eg- RJ 14 AD 7546' type="text" />

                    <label htmlFor="">Employer Name</label>
                    <input value={vehicleData.employer} name="employer" onChange={handleVehicleData} placeholder='eg- U-Smart' type="text" />

                {/* <p> */}
                    {/* {action === "password" && <span > Login </span>} */}
                    {/* {action === "login" && <span > Forgot Password? </span>} */}
                {/* </p> */}
                <button onClick={(e)=>e.preventDefault()}  className='btn sign-in'>Add Vehicle</button>
                {/* <p>{(action === "login" || action === "password") && <>Don't have an account? <span > Sign up </span></>}{(action === "register") && <>Have an account? <span onClick={() => setAction("login")}> Login</span></>} </p> */}
            </form>
        </div>
    )
}

export default RegVehicle
