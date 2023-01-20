import React from 'react'
import { MdFullscreen } from 'react-icons/md'

function Camera(props) {
  return (
    <div className='camera' onDoubleClick={props.onDoubleClick}  key={props.key}>
      <img src={props.video} style={props.style} alt="" srcSet="" />
      {props.actions && <div className="actions">

        <MdFullscreen />
      </div>}
    </div>
  )
}

export default Camera
