import { Services } from "../../mock/services.js";
import { Depoiments } from "../../mock/depoiments";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Header1 from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import { Capa, Promocao, Benefits2, Benefits, Feedbacks, Main } from "./style";
import setaBaixo from "../../imgs/Computador/setaBaixo.svg";
import uttilities from "../../imgs/Computador/uttilities.png";
import Footer3 from "../../components/Footer3/index";

export function Home() {
  return (
    <Main>
      <Header1 />
      <HeaderMob />
      <Capa>
        <div className="line"></div>
        <div className="containerCapa">
          <div className="containerLeft">
            <div className="textContainer">
              <h1>BLACK</h1>
              <span>‎ FRIDAY</span>
            </div>
            <div>
              <p>A um passo de virar a chave para seus projetos</p>
            </div>
            <div className="imageArrowContr">
              <a href="#Promoção!">
                <img
                  className="imageArrowDown"
                  src={setaBaixo}
                  alt="Imagem da direita"
                />
              </a>
            </div>
          </div>
        </div>
      </Capa>

      <Promocao id="Promoção!">
        <div className="containerPromotion">
          <div className="promotionText">
            <h3>
              Toda nossa Plataforma está Com <span>80% off </span>
            </h3>
            <p>Um desconto jamais feito, vai ficar de fora?</p>
            <div className="btnContainer">
              <a href="https://www.orcafascio.com/" target="blanked">
                <button className="moreButton">Saiba Mais</button>
              </a>
            </div>
          </div>
          <div className="imageArea">
            <img src={uttilities} alt="luiz" />
          </div>
        </div>
      </Promocao>

      <Benefits id="beneficios">
        <div className="tittle">
          <h1>ALGUMAS FACILIDADES QUE TEMOS NA NOSSA PLATAFORMA</h1>
        </div>
        <div className="cardContainer">
          <div className="cardsServices">
            {Services.map((item) => (
              <a className="linkTo" href={item.url} target="blanked">
                <div className="card">
                  <div className="cardBody">
                    <img
                      className="iconService"
                      src={item.img}
                      alt="Detalhes em vermelho"
                    />
                    <div className="cardTitleContainer">
                      <h1 className="cardtittle">{item.tittle}</h1>

                      <span className="descriptionItem">{item.paragraf}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="btnContainer">
          <a href="https://www.orcafascio.com/porque/" target="blanked">
            <button className="moreButton">Saiba Mais</button>
          </a>
        </div>
      </Benefits>
      <Benefits2>
        <div className="Container">
          <div className="tittle">
            <h1>Utilizando nossa plataforma você vai economizar</h1>
          </div>
          <div className="boxSection">
            <div className="hourbox pattern ">
              <h1>
                105 Horas <span>/mês</span>
              </h1>
              <div className="ribbon">
                <p>1.260 horas /ano</p>
              </div>
            </div>{" "}
            <div className="days pattern">
              <h1>
                13,13 DIAS <span>/mês</span>
              </h1>
              <div className="ribbon">
                <p>1.260 horas /ano</p>
              </div>
            </div>{" "}
            <div className="money pattern">
              <h1>
                R$ 13.335 <span>/mês</span>
              </h1>
              <div className="ribbon">
                <p>1.260 horas /ano</p>
              </div>
            </div>
          </div>
        </div>
      </Benefits2>
      <Feedbacks id="Depoimentos">
        <h1> Ainda em Dúvida ?</h1>
        <div className="Container">
          <div className="rowcontent">
            <div className="depoimentsArea">
              <div className="depoimentsAreaContentTittle">
                <p>Quem compra, recomenda </p>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {Depoiments.map((item) => (
                  <SwiperSlide>
                    <div className="depoimentText">
                      <p>{item.Depoiment}</p>
                    </div>
                    <div className="OwnerDepoiment">
                      <p>{item.Nome}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Feedbacks>

      <Footer3 />
    </Main>
  );
}
