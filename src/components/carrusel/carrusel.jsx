import React from "react"
import './Carrusel.css'
import videos from "../../services/video/brabus-cars/BrabusCars";

function Carrusel({posVideo = 4}){
  const urlVideo = videos[posVideo].src;

  return(
    <div className="carrusel">
      {/* playsInline preload="none" muted loop autoPlay */}
      <video className="video" src={urlVideo}></video>
    </div>
  )
}

export default Carrusel