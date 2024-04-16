import React from "react";
import "./Cars.css";
import Header from "../../components/header/Header";
import VehicleContainer from "../../components/vehicle_container/VehicleContainer";
import Footer from '../../components/footer/Footer'

export default function Cars() {
  return (
    <>
      <Header
        page="home"
        rutaLogo={"/src/assets/svg/Logo_Lomotor_v2_letras_white.svg"}
      />
      <div className="img-background-container">
        <img
          src="/public/images/background-cars-page.jpg"
          alt="Img background"
        />
      </div>
      <section className="cars-container">
        <div className="cars-title">
          <h1>Vehicles</h1>
        </div>
        <div className="cars-filters">
          <span className="filters">All</span>
          <span className="filters">Cars</span>
          <span className="filters">ECO</span>
          <span className="filters">SUV</span>
          <span className="filters">GPL</span>
          <span className="filters">Comercial</span>
        </div>
        <div className="cars-content">
          <VehicleContainer title="Cars" />
          <VehicleContainer title="ECO" />
          <VehicleContainer title="SUV" />
          <VehicleContainer title="GPL" />
          <VehicleContainer title="Comercial" />
        </div>
      </section>
      <Footer/>
    </>
  );
}
