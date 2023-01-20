import React from 'react'
import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import "./Navbar.css"
import { useEffect } from 'react';
import io from 'socket.io-client';
import AlertModel from '../Alertmodel/AlertModel';




const Navbar = (props) => {
    const [camera, setCamera] = useState('camera1')
    const [socket, setSocket] = useState()
    const [alert, setAlert] = useState("")


    const alertData = [
        {
            detection: 'Suspicious Activity Deatected',
            detectionTime: new Date(),
        },
        {
            detection: 'Suspicious Activity Deatected',
            detectionTime: new Date(),
        },
        {
            detection: 'Suspicious Activity Deatected',
            detectionTime: new Date(),
        },
        {
            detection: 'Suspicious Activity Deatected',
            detectionTime: new Date(),
        }
    ]

    useEffect(() => {
        setSocket(io(`http://localhost:3001`).connect())
    }, [])

    useEffect(() => {
        socket && socket.on('client', data => {
            socket.emit("server", "world")
            setAlert(data)
        })
    }, [socket])

    return (
        <>
        <AlertModel data={alertData} />
            <div className={props.dark ? "navbar_main dark" : "navbar_main"} >

                <div className='select'>
                    <div>{camera}</div>
                    <div className="options">
                        <span value="camera1">Camera 1</span>
                        <span value="camera2">Camera 2</span>
                        <span value="camera3">Camera 3</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                        <span value="camera4">Camera 4</span>
                    </div>
                    <MdKeyboardArrowDown />
                </div>

                <div className={alert ? "alert active" : "alert"}>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {alert && <span>{alert}</span>}
                </div>
                <div className='icons'>
                    <span>
                        <i className="fa-regular fa-bell"></i>
                    </span>
                    <span>
                        <i className="fa-regular fa-user"></i>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar
