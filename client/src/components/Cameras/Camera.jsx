import React from 'react'
import { MdFullscreen } from 'react-icons/md'

function Camera(props) {
  return (
    <div className='camera' onDoubleClick={props.onDoubleClick} style={props.style} key={props.key}>
      <img src={props.video} alt="" srcset="" />
      {props.actions && <div className="actions">

        <MdFullscreen />
      </div>}
    </div>
  )
}

export default Camera
