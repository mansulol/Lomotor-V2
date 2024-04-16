import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Card({img, text1, text2, icon=false}){
  return(
    <>
      <div className="card-container">
        <div className="img-card-container">
          <img src={img} alt="Img card" />
        </div>
        <div className="text-card-container">
          <div className="heading-card">
            <p>{text1}</p>
          </div>
          <div className="subtext-card">
            <p>{text2}</p>
            {
              icon ?
              <FontAwesomeIcon icon={faChevronRight}/>
              : ""
            }
          </div>
        </div>
      </div>
    </>
  )
}