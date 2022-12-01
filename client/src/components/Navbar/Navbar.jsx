import React from 'react'
import "./Navbar.css"




const Navbar = () => {

    return (
        <div className="navbar_main">

            <select>
                <option value="all">All</option>
                <option value="camera1">camera 1</option>
                <option value="camera2">camera 2</option>
                <option value="camera3">camera 3</option>
                <option value="camera4">camera 4</option>
            </select>

            <div className="alert">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>Neelgai detected at camera 3</span>
            </div>
            <div className='icons'>
                <i class="fa-regular fa-bell"></i>
                <i class="fa-regular fa-user"></i>
            </div>
        </div>
    )
}

export default Navbar
