import React from "react";
import "./Brand.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import videos from "../../services/video/brabus-cars/BrabusCars";
import Carrusel from "../../components/carrusel/Carrusel";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";

export default function Brand() {
  return (
    <>
      <Header LogoHeader="/src/assets/svg/Logo_Lomotor_v2_letras_white.svg" />
      <div className="container-video">
        <Carrusel posVideo={3} />
        <div className="video-title-container">
          <h1>WHO WE ARE</h1>
        </div>
      </div>
      <section className="brand-container">
        <div className="brand-white-container">
          <img src="/src/assets/svg/LogoLomotorv2_black.svg" alt="" />
        </div>
        <div className="brand-brabus-container">
          <p>
            LOMOTOR was conceived from the <span>admiration</span> for <span>innovation</span> and
            craftsmanship exemplified by <span>Brabus</span>, renowned for their expertise in
            enhancing luxury <span>automotive experiences</span>.
          </p>
          <img src="/src/assets/svg/logoBrabus.svg" alt="" />
        </div>
        <div className="brand-black-container">
          <img src="/src/assets/svg/LogoLomotorv2_white.svg" alt="" />
        </div>
      </section>
      <section className="what-we do-container">
        <div className="what-we-do-title">

        </div>
        <div className="what-we-do">
        
        </div>
      </section>

      <WhatWeDo />

      <Footer />
    </>
  );
}
