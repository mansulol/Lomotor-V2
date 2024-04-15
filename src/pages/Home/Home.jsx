import "./Home.css";
import Header from "../../components/header/Header";
import videos from "../../services/video/brabus-cars/BrabusCars";
import Footer from "../../components/footer/Footer";
import ExploreAllCars from "../../components/explore_all_cars/ExploreAllCars";
import DiscoverBentoGrids from "../../components/discover-bento-grids/DiscoverBentoGrids";

function Home() {
  const urlVideo = videos[0].src;

  return (
    <>
      <Header
        page="home"
        rutaLogo={"/src/assets/svg/Logo_Lomotor_v2_letras_white.svg"}
      />

      <div className="container-video">
      {/* playsInline preload="none" muted loop autoPlay */}
        <video  className="video" src={urlVideo}></video>
      </div>

      {/* Porque el boton sube cuando tiene que estar quieto con un position absolute */}
      <ExploreAllCars />

      <DiscoverBentoGrids/>

      <Footer rutaLogo={"/src/assets/svg/Logo_Lomotor_v2_logo_black.svg"} />
    </>
  );
}

export default Home;
