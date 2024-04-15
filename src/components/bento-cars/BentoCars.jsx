import React, { useState, useEffect } from "react";
import "./BentoCars.css";
import images from "../../services/images/platinumMotorSports";

export default function BentoCars() {
  // let selectedNumbers = []
  // let usedNumbers = []

  const [selectedNumbers, setSelectedNumber] = useState([]);
  const [usedNumbers, setUsedNumbers] = useState([]);

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomGrids(parseInt(Math.random()*2)+1)
    showBento();
  }, []);

  const showBento = () => {
    let newUsedNumbers = [];
    let newSelectedNumbers = [];

    while (newUsedNumbers.length < 8) {
      const randomNumber = parseInt(Math.random() * images.length);
      if (!newUsedNumbers.includes(randomNumber)) {
        newUsedNumbers.push(randomNumber);
        newSelectedNumbers.push(randomNumber);
      }
    }

    setUsedNumbers(newUsedNumbers);
    setSelectedNumber(newSelectedNumbers);
  };
  

  const isNumber = (numero) => {
    console.log("Funcion showNumber utilizandose");
    return usedNumbers.includes(numero);
  };

  const [randomGrids, setRandomGrids] = useState(1)



  return (
    <div className={`bento-container bento${randomGrids}`}>
      {
        // console.log('Selected numbers recorrido')

        selectedNumbers.map((i, index) => (
          <div key={index} className={`bento${randomGrids}_${index+1}`}>
            {console.log("Selected numbers recorrido")}
            {console.log("Indice:" + index)}
            {console.log("Objeto:" + i)}
            <img src={images[i].src} alt={images[i].title} />
          </div>
        ))
      }
    </div>
  );
}
