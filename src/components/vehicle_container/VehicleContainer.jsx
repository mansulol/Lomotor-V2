import React, { useState, useEffect } from 'react'
import vehicles from '../../services/images/vehicleCars'
import Card from '../card/Card'
import './VehicleContainer.css'

export default function VehicleContainer({title}) {

  const [vehicleList, setVehicleList] = useState(0)

  useEffect(() => {
    const count = vehicles.filter(vehicle => vehicle.type === title).length;
    
    setVehicleList(count);
  }, [title]);

  return (
    <>
      <div className="title">
        <p>{title}({vehicleList})</p>
      </div>
      <div className="vehicle-container">
        {
        vehicles.map((vehicle, index) => {
          return vehicle.type == title ? 
          (
            <Card
              key={index}
              img={vehicle.src}
              text1={`The new ${vehicle.title}`}
              icon={false}
            />
          ) 
          : null;
        })
        }
      </div>
    </>
  );
}
