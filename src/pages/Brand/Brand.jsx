import React from 'react'
import './Brand.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import videos from "../../services/video/brabus-cars/BrabusCars";
import Carrusel from '../../components/carrusel/Carrusel';


export default function Brand() {

  return (
    <>
      <Header LogoHeader='/src/assets/svg/Logo_Lomotor_v2_letras_white.svg'/>
      <div className="container-video">
        <Carrusel  posVideo={3}/>
        <div className='video-title-container'>
        <h1>WHO WE ARE</h1>

        </div>
      </div>
      <section className='brand-container'>
        <div className='brand-white-container'>
          <img src="/src " alt="" />
        </div>
        <div className='brand-brabus-container'>

        </div>
        <div className='brand-black-container'>

        </div>
      </section>

      <Footer />
    </>
  )
}
