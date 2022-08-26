import { Link } from "react-router-dom";
import Header1 from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import { FrontCover, RoadMap } from "./style";
import background from "../../imgs/Computador/aboutUs/backgroundFrontCover.svg";
import { Road } from "../../mock/roadmap";
import Footer from "../../components/Footer/index";
import owners from "../../imgs/Computador/aboutUs/ownerPhoto.png";
export function AboutUs() {
  return (
    <>
      <Header1 />
      <HeaderMob />
      <FrontCover>
        <div className="container">
          <div className="backgroundImage">
            <img src={background} alt="background" />
          </div>
          <div className="textContainer">
            <h1>Luiz Makimoto</h1>
            <p>
              Desde bem jovem, Luiz Makimoto gostava de consertar veículos. Aos
              14 anos, trabalhou numa oficina que fazia manutenção em carroças.
            </p>
          </div>
        </div>
      </FrontCover>
      <RoadMap>
        {Road.map((item) => (
          <div className="Container">
            <div className="history">
              <hr className="redLine" />
              <div className="contText">
                <div className="textArea">
                  <h1 className="year">{item.year}</h1>
                  <p className="text {item.classnames}">{item.text}</p>
                </div>
                <div className="img">
                  <img className={item.class} src={item.img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="finalPart">
          <p></p>
          <img src={owners} alt="owners" />
        </div>
      </RoadMap>
      <Footer />
    </>
  );
}
