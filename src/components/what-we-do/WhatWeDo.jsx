import './WhatWeDo.css'

export default function WhatWeDo(){
  const numImages = 12;
  const directory = '/public/images/'

  let imageCollections = []

  for(let i=1; i<= numImages; i++){
    let imageName = `mansory_${i}.webp`
    let imagePath = `${directory}${imageName}`

    imageCollections.push(imagePath);
  }
  return(
    <>
      <div className="grids-container">
        {
          imageCollections.map((imagePath, index) => (
            <div key={index} className={`Whatgrid${index}`}>
              <img src={imagePath} alt={`Image ${index + 1}`} />
            </div>
          ))
        }
      </div>
    </>
  )
}