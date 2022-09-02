import { Services } from "../../mock/services.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Header from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import Footer from "../../components/Footer/index";

import { OurServices, Main } from "./style";
import setaBaixo from "../../imgs/Computador/setaBaixo.svg";

import detalhes from "../../imgs/details.svg";

export function Service() {
  return (
    <Main>
      <Header />
      <HeaderMob />
      <OurServices>
        <div className="tittle">
          <h1> Nossos Serviços</h1>
          <img
            className="detailsRed"
            src={detalhes}
            alt="Detalhes em vermelho"
          />
        </div>
        <div className="cardContainer">
          <div className="cardsServices">
            {Services.map((item) => (
              <div className="card">
                <div className="cardBody">
                  <img
                    className="iconService"
                    src={item.img}
                    alt="Detalhes em vermelho"
                  />
                  <div className="cardTitleContainer">
                    <h1 className="cardtittle">{item.tittle}</h1>
                    <Link to={item.link}>
                      <span className="showMoreMessage">
                        Clique para saber mais
                      </span>
                    </Link>
                  </div>

                  <Link to={item.link}>
                    <img
                      className="buttonGoToPage"
                      src={setaBaixo}
                      alt="Imagem da direita"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </OurServices>
      <Footer />
    </Main>
  );
}
