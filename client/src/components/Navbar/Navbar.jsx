import React from 'react'
import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import "./Navbar.css"




const Navbar = () => {
    const [camera, setCamera] = useState('camera1')

    return (
        <div className="navbar_main">

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

            <div className="alert">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>Neelgai detected at camera 3</span>
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
    )
}

export default Navbar
