import React from "react";
import BentoCars from "../bento-cars/BentoCars";
import "./DiscoverBentoGrids.css";

export default function DiscoverBentoGrids() {
  return (
    <div className="discover-content">
      <div className="title-container">
        <h1>Discover all cars</h1>
      </div>

      <BentoCars />
    </div>
  );
}
