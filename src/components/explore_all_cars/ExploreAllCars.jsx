import Card from "../card/Card";
import "./ExploreAllCars.css";

export default function ExploreAllCars() {
  return (
    <section className="explore-section">
      <div className="title-explore">
        <h1>Explore all cars</h1>
      </div>
      <div className="content">
        <div className="cars-explore">
          <Card
            img={"/images/mansory_5.webp"}
            text1={"Porsche 992 Turbo S by Lomotor"}
            text2={"Explore Porsche"}
            icon={true}
          />
          <Card
            img={"/images/mansory_3.webp"}
            text1={"Mercedes-AMG G63 by Lomotor"}
            text2={"Explore Mercedes"}
            icon={true}
          />
          <Card
            img={"/images/mansory_4.webp"}
            text1={"Mercedes Maybach S680 4MATIC by Lomotor"}
            text2={"Explore Mercedes"}
            icon={true}
          />
        </div>
      </div>
      
      <div className="btn-container-explore">
        <hr />
        <div className="btn-explore">
          <a href="/Cars">
          <h3>Explore all cars</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
