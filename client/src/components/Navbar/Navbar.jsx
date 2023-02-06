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
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material';
import { addNewAlert } from '../../reducers/reducer';



const Navbar = (props) => {
    const [camera, setCamera] = useState('camera1')
    const [socket, setSocket] = useState()
    const [dark, setDark] = useState(props.dark)
    // const [alert, setAlert] = useState("")
    const audios = [classicAlarm, facilityAlarm, securityFacilityBreachAlarm, streetPublicAlarm, vintageWarningAlarm]
    const [alertAudio,setAlertAudio] = useState(new Audio(audios[0]))
    const reducerStates = useSelector(state => state.mwcReducer)
    const [profilemodel, setprofilemodel] = useState(false)
    const dispatch = useDispatch()
    

    useEffect(() => {
        setSocket(io(`http://localhost:3030`).connect())
        setAlertAudio( new Audio(sessionStorage.getItem('alertaudio') || audios[1]))
    }, [])

    useEffect(() => {
        socket && socket.on('client', async data => {
            // const audio = await new Audio(alertAudio)
            alertAudio.loop = true
            // socket.emit("security", "worldzzzz")
            props.setalert(state=>{return {...state, alert:true, minimizedAlarm: true}})
            console.log(data)
            dispatch(addNewAlert(data))
            alertAudio.play()
            console.log(alertAudio)
        })
        
        socket && socket.on('server', data => {
            // socket.emit("security", "worldzzzz")
            
            console.log(data)
        })
        socket && socket.emit("join_room", "client")
        socket && socket.emit("join_room", "server")
        // socket && socket.disconnect()
        // socket && socket.emit("disconnect", "server")
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
                    <span onClick={()=>{}}>
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </span>
                    <span onClick={()=>{setprofilemodel(state=>!state)}}>
                        <i className="fa-regular fa-user"></i>
                    </span>
                </div>
            </div>
                <div className="profilemodel" style={profilemodel?{top:'60px'}:{top:'-100%'}}>
                    <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/1801/1801293.png" alt="" />
                    </div>
                    <div className="details">
                        <p>name: {reducerStates.user.name}</p>
                        <p>email: {reducerStates.user.email}</p>

                    </div>
                    <div className="actions">
                    <Button variant='contained'>Logout</Button>
                    </div>
                </div>
        </>
    )
}

export default Navbar
