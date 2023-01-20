import React from 'react'
import Camera from './Camera'
import Navbar from '../Navbar/Navbar'
import "./cameras.css"
import { useState } from 'react'
import { MdCancel, MdCopyAll, MdFitScreen, MdFullscreen, MdGridOn, MdHorizontalRule, MdOutlineSafetyDivider } from 'react-icons/md'
import { Tooltip } from '@mui/material'
import { useEffect } from 'react'
import { HiArrowCircleUp, HiArrowLeft, HiArrowRight, HiOutlineVideoCamera } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'


const Videos = () => {
  const scrollRef = useRef(null)
  const [expand, setExpand] = useState(false)
  const [expandedCameraData, setExpandedCameraData] = useState('')
  const [cams, setCams] = useState([])
  const [camsdivider, setCamsdivider] = useState(1)
  const [sidebar, setSidebar] = useState({ fullScreen: false, showGridOptions: false, grid: { x: 2, y: 4 }, gotoPage:false})
  const navigate = useNavigate()


  const cameraSize = { width: `${70 / sidebar.grid.y}vw` }
  const expandCameraSize = { minWidth: 'auto', height: 'auto', margin: '0' }

  const expandCamera = (cameradata) => {
    setExpandedCameraData(cameradata)
    setExpand(true);
    window.scrollTo(0, 0)
  }

  const GridView = () => {
    return <>
      {/* <span className={sidebar.grid.x === 1 && sidebar.grid.y === 1 ? "option active" : "option"} onClick={() => {setCamsdivider(1);setSidebar(state => { return { ...state, grid: { x: 1, y: 1 } } })}}>
        1X1
      </span> */}
      <span className={sidebar.grid.x === 2 && sidebar.grid.y === 2 ? "option active" : "option"} onClick={() => {setCamsdivider(1);setSidebar(state => { return { ...state, grid: { x: 2, y: 2 } } })}}>
        2X2
      </span>
      <span className={sidebar.grid.x === 2 && sidebar.grid.y === 4 ? "option active" : "option"} onClick={() => {setCamsdivider(1);setSidebar(state => { return { ...state, grid: { x: 2, y: 4 } } })}}>
        2X4
      </span>
      <span className={sidebar.grid.x === 3 && sidebar.grid.y === 6 ? "option active" : "option"} onClick={() => {setCamsdivider(1);setSidebar(state => { return { ...state, grid: { x: 3, y: 6 } } })}}>
        3X6
      </span>
      <span className={sidebar.grid.x === '' && sidebar.grid.y === '' ? "option active" : "option"} onClick={()=>{setCamsdivider(1);setSidebar(state=>{return {...state, grid: { x: 3, y: 8 } }})}}>
          4X8
        </span>
    </>
  }

  
const cameras = [
  {camera: <Camera
    key="1"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="2"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="3"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="4"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="5"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="6"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="7"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="8"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="9"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="10"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="11"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="12"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="13"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="14"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="15"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="16"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}
  , {camera: <Camera
    key="17"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  , {camera: <Camera
    key="18"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}

  , {camera: <Camera
    key="19"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}

  , {camera: <Camera
    key="20"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg")}
    video="https://www.cctvcamerapros.com/v/images/LPR-Cameras/gate-entry-security-camera.jpg" />}

  , {camera: <Camera
    key="21"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://i2-prod.dailyrecord.co.uk/incoming/article27686297.ece/ALTERNATES/s1200/0_arbroath-carthieves.png")}
    video="https://i2-prod.dailyrecord.co.uk/incoming/article27686297.ece/ALTERNATES/s1200/0_arbroath-carthieves.png" />}

  , {camera: <Camera
    key="22"
    actions={false}
    style={cameraSize}
    onDoubleClick={() => expandCamera("https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png")}
    video="https://patch.com/img/cdn20/users/103600/20220404/050103/styles/patch_image/public/mobile-rob-car-___04165741052.png" />}
  ]

  useEffect(() => {
    if (sidebar.fullScreen) {
      window.document.documentElement.requestFullscreen(<h1>Hello</h1>)
    } else {
      document.exitFullscreen()
    }
    // console.log({ width: `calc(${100 / sidebar.grid.y}% - 20px)`, height: `calc(${100 / sidebar.grid.x}% - 60px)` })
  }, [sidebar.fullScreen])

  useEffect(() => {
    setCams(cameras.slice((sidebar.grid.x * sidebar.grid.y)*(camsdivider-1) , ((sidebar.grid.x * sidebar.grid.y)*camsdivider)))
    
    console.log(((sidebar.grid.x * sidebar.grid.y)*camsdivider) , (sidebar.grid.x * sidebar.grid.y)*(camsdivider-1) , ((sidebar.grid.x * sidebar.grid.y)*camsdivider))
    console.log(Math.ceil(cameras.length / (sidebar.grid.x * sidebar.grid.y)) >= camsdivider ,  0 < camsdivider)
  }, [camsdivider,sidebar.grid.x,sidebar.grid.y ])


  return (
    <>
      {/*!expand && */ <Navbar dark={expand} />}
      <div className='main-container'>
        <div className={expand ? 'expand-camera expanded' : 'expand-camera'}>
          <MdCancel className='close-expanded' onClick={() => setExpand(false)} />

          <Camera key="expandedcam" actions={false} style={{ ...expandCameraSize, display: 'flex', alignItems: 'center', justifyContent: 'center' }} video={expandedCameraData} />

          <div className="camera-detail">
            <div>
              <p>Name: </p>
              <p>Camera 1</p>
              <MdCopyAll className='copybtn' onClick={() => navigator.clipboard.writeText("Copy Camera Name")} />
            </div>
            <div>
              <p>Location: </p>
              <p>location 1</p>
              <MdCopyAll className='copybtn' onClick={() => navigator.clipboard.writeText("Copy Camera Location")} />
            </div>
            <div>
              <p>IP address: </p>
              <p>192.168.75.32</p>
              <MdCopyAll className='copybtn' onClick={() => navigator.clipboard.writeText("Copy Camera Ip Address")} />
            </div>
            <div>
              <p>wake time: : </p>
              <p>12:00  - 6:00 (6 hours)</p>
            </div>
          </div>
          {/* <Tooltip title="show cameras without closing view" placement='left'> */}
            <div className="back-to-cameras" onClick={() => { scrollRef.current.scrollIntoView() }}>
              <HiArrowCircleUp />
            </div>
          {/* </Tooltip> */}
        </div>
        <div className="cameras-container" ref={scrollRef} id='cameras'>
          <div className='videos_main' style={expand ? { marginTop: '10px', height: 'calc(100vh - 10px)' } : {}}>

            { 
              cams.map((cam)=>cam.camera)
            }

          </div>
          <div className="camera-sidebar">
            <div className={sidebar.showGridOptions ? "options active" : "options"}>
              <GridView />
            </div>
            {expand && <Tooltip title={"Open Camera Preview"} placement='left' onClick={() => { window.scrollTo(0, 0) }}>
              <span className='camera-preview'>
                <HiOutlineVideoCamera />
              </span>
            </Tooltip>}
            <span className="divider"></span>

            <Tooltip title={"View"} placement='left' onClick={() => setSidebar(state => { return { ...state, showGridOptions: !state.showGridOptions } })}>
              <span>
                <MdGridOn style={{ background: sidebar.showGridOptions && '#00000099' }} />
              </span>
            </Tooltip>
            <Tooltip title={!sidebar.fullScreen ? "Full Screen" : "Exit Full Screen"} placement='left' onClick={() => setSidebar(state => { return { ...state, fullScreen: !state.fullScreen } })}>
              <span>
                {sidebar.fullScreen ?
                  <MdFitScreen />
                  :
                  <MdFullscreen />
                }
              </span>
            </Tooltip>
            <span className="divider"></span>
            <Tooltip title={camsdivider < Math.ceil(cameras.length / (sidebar.grid.x * sidebar.grid.y))  && 0 < camsdivider ? "Next" : "No more cameras"} placement='left'>
              <span>
                <HiArrowRight style={
                  
                    camsdivider < Math.ceil(cameras.length / (sidebar.grid.x * sidebar.grid.y))  && 0 < camsdivider
                    ?
                    {pointerEvents:'all'}
                    :
                    {pointerEvents:'none', background:'transparent'}
                  
                } onClick={()=>setCamsdivider(state=>{return state+1})} />
              </span>
            </Tooltip>
            <span style={{margin:'0', color:'#ddd'}} onClick={()=>setSidebar(state=>{return {...state, gotoPage:true}})}>
              {sidebar.gotoPage ? <input type='number' onChange={(e)=>setCamsdivider(Number(e.target.value))} onBlur={()=>setSidebar(state=>{return {...state, gotoPage:false}})} /> : camsdivider}/{Math.ceil(cameras.length / (sidebar.grid.x * sidebar.grid.y))}
            </span>
            <Tooltip title={camsdivider <= Math.ceil(cameras.length / (sidebar.grid.x * sidebar.grid.y))  && 1 < camsdivider ? "Previous":"No more cameras"} placement='left' >
              <span>
                <HiArrowLeft style={
                  
                    camsdivider <= Math.ceil(cameras.length / (sidebar.grid.x * sidebar.grid.y))  && 1 < camsdivider
                    ?
                    {pointerEvents:'all'}
                    :
                    {pointerEvents:'none', background:'transparent' }
                  
                } onClick={()=>setCamsdivider(state=>{return state-1})} />
              </span>
            </Tooltip>
            <span className="divider"></span>

          </div>
        </div>
      </div>
    </>
  )
}

export default Videos
