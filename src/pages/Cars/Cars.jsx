import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Cars.css";
import Header from "../../components/header/Header";
import VehicleContainer from "../../components/vehicle_container/VehicleContainer";
import Footer from "../../components/footer/Footer";

export default function Cars() {
  const [type, setType] = useState("All");

  const handleClickFilter = (typeParam) => {
    setType(typeParam);
  };

  return (
    <>
      <Header
        page="home"
        LogoHeader={"/src/assets/svg/Logo_Lomotor_v2_letras_white.svg"}
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
          <span
            onClick={() => handleClickFilter("All")}
            id="All"
            className="filters"
          >
            All
          </span>
          <span
            onClick={() => handleClickFilter("Cars")}
            id="Cars"
            className="filters"
          >
            Cars
          </span>
          <span
            onClick={() => handleClickFilter("ECO")}
            id="ECO"
            className="filters"
          >
            ECO
          </span>
          <span
            onClick={() => handleClickFilter("SUV")}
            id="SUV"
            className="filters"
          >
            SUV
          </span>
          <span
            onClick={() => handleClickFilter("GPL")}
            id="GPL"
            className="filters"
          >
            GPL
          </span>
          <span
            onClick={() => handleClickFilter("Comercial")}
            id="Comercial"
            className="filters"
          >
            Comercial
          </span>
        </div>
        <div id="outputFilters" className="cars-content">
          {type == "All" ? (
            <>
              <VehicleContainer title="Cars" />
              <VehicleContainer title="ECO" />
              <VehicleContainer title="SUV" />
              <VehicleContainer title="GPL" />
              <VehicleContainer title="Comercial" />
            </>
          ) : (
            <VehicleContainer title={type} />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
