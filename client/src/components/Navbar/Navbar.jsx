import React from 'react'
import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import "./Navbar.css"
import { useEffect } from 'react';
import io from 'socket.io-client';
import AlertModel from '../Alertmodel/AlertModel';
import classicAlarm from "../../assets/Audio/classic-alarm.wav"
import facilityAlarm from "../../assets/Audio/facility-alarm.wav"
import securityFacilityBreachAlarm from "../../assets/Audio/security-facility-breach-alarm.wav"
import streetPublicAlarm from "../../assets/Audio/street-public-alarm.wav"
import vintageWarningAlarm from "../../assets/Audio/vintage-warning-alarm.wav"



const Navbar = (props) => {
    const [camera, setCamera] = useState('camera1')
    const [socket, setSocket] = useState()
    const [dark, setDark] = useState(props.dark)
    // const [alert, setAlert] = useState("")
    const audios = [classicAlarm, facilityAlarm, securityFacilityBreachAlarm, streetPublicAlarm, vintageWarningAlarm]
    const [alertAudio,setAlertAudio] = useState(new Audio(audios[0]))

    

    useEffect(() => {
        setSocket(io(`http://localhost:3030`).connect())
        setAlertAudio( new Audio(sessionStorage.getItem('alertaudio') || audios[1]))
    }, [])

    useEffect(() => {
        socket && socket.on('client', async data => {
            // const audio = await new Audio(alertAudio)
            alertAudio.loop = true
            // socket.emit("security", "worldzzzz")
            props.setalert(state=>{return {...state, alert:true, data:data}})
            console.log(data)
            alertAudio.play()
            console.log(alertAudio)
        })
        socket && socket.on('server', data => {
            // socket.emit("security", "worldzzzz")
            
            console.log(data)
        })
        socket && socket.emit("join_room", "client")
        socket && socket.emit("join_room", "server")
    }, [socket])
    useEffect(()=>{
        setDark(props.dark || props.alert.alert)
    },[props.dark, props.alert.alert])

    useEffect(() => {
    console.log(props.alert.alert,props)
    }, [props.alert.alert])
    return (
        <>
        {(props.alert.alert && props.alert.minimizedAlarm) && <AlertModel alertAudio={alertAudio} alert={props.alert} setalert={props.setalert} />}
            <div className={dark ? "navbar_main dark" : "navbar_main"} >

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
                {console.log(props.alert.minimizedAlarm)}
                <div className={!props.alert.minimizedAlarm ? "alert active" : "alert"} onClick={()=>props.setalert(state=>{return {...state, minimizedAlarm:true}})}>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {/* {alert && <span>{alert}</span>} */}
                </div>
                <div className='icons'>
                    {/* <div className={!alert ? "alert active" : "alert"} onClick={()=>props.setalert(state=>{return {...state, minimizedAlarm:true}})}>
                        <i className="fa-regular fa-bell" ></i>
                    </div> */}
                    <span>
                        <i className="fa-regular fa-user"></i>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar
