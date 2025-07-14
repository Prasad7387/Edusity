import React from 'react'
import './Videoplayer.css'
import video from '../../assets/vid.mp4'
function Videoplayer({playState,setPlayState}) {
  return (
    <div className={`Videoplayer ${playState?'':'hide'}`}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer