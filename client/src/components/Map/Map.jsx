import React from 'react'
import "./Map.css"

const Map = () => {
    let cameras = [undefined, undefined, undefined]
    return (
        <div className='map'>
            <div className='map-container'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1jUnUp3Reunr7kjgEWz6dGEtQde_FXEk&ehbc=2E312F" 
                width="750" height="500"></iframe>
            </div>
            <div className="camera-detail">
                <ul>
                    <li>Camera Selected</li>
                    {cameras.map((camera,i)=>
                    <li>Camera 1</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Map
