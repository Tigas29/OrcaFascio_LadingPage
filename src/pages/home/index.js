import { Services } from "../../mock/services.js";
import { Depoiments } from "../../mock/depoiments";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Header1 from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import {
  Capa,
  WhoWeAre,
  WhyChooseUs,
  OurServices,
  Feedbacks,
  ContactUs,
} from "./style";
import imageDireita from "../../imgs/Computador/MachineImageRigth.svg";
import setaBaixo from "../../imgs/Computador/setaBaixo.svg";
import wpp from "../../imgs/WhatsApp.svg";
import instagram from "../../imgs/Instagram.svg";
import Luiz from "../../imgs/Computador/LuizMakimoto.svg";
import funcionarios from "../../imgs/Funcionarios.svg";
import backgroundDepoiments from "../../imgs/depoimentsImage.svg";
import backgroundDepoimentsTablet from "../../imgs/backgroundDepoimentsTablet.svg";

import detalhes from "../../imgs/details.svg";
import skills from "../../imgs/bloco skils.svg";
import MapsEmbed from "../../EmbedGoogleMaps/index";
import graydetails from "../../imgs/graydetails.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AiFillCalendar,
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Footer from "../../components/Footer/index";
import backgroundtablet from "../../imgs/Tablets/backgroundcapa.svg";
export function Home() {
  return (
    <>
      <Header1 />
      <Capa>
        <HeaderMob />

        <div className="containerCapa">
          <div>
            <div className="textContainer">
              <h1>
                A <span> melhor</span> e mais<br></br>
                <span>confiável</span> oficina da região
              </h1>
              <p>
                Desde de 1970 trazendo o melhor serviço para nossos clientes.
              </p>
              <div className="iconsContainer">
                <AiOutlineWhatsApp className="icons" />
                <AiOutlineInstagram className="icons" />
              </div>
            </div>
            <div className="imageArrowContr">
              <img
                className="imageArrowDown"
                src={setaBaixo}
                alt="Imagem da direita"
              />
            </div>
          </div>
          <div className="teste">
            <div className="imageContainer">
              <img
                src={backgroundtablet}
                className="backgroundtablet"
                alt="Imagem da direita"
              />
              <img
                className="capaImage"
                src={imageDireita}
                alt="Imagem da direita"
              />
            </div>
          </div>
          <div></div>
        </div>

        <div className="socialMediasCont">
          <div className="socialMedia">
            <img src={wpp} alt="wpp" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </Capa>

      <WhoWeAre>
        <div className="whoWeAreCont">
          <div className="imageArea">
            <img src={Luiz} alt="luiz" />
          </div>
          <div className="depoimentArea">
            <span>“</span>
            <h3>
              Desde bem jovem, Luiz Makimoto gostava de consertar veículos. Aos
              14 anos, trabalhou numa oficina que fazia manutenção em carroças.
              Durante a década de 1960, foi funcionário em algumas oficinas de
              veículos automotores, sempre buscando a excelência no aprendizado
              e na qualidade do serviço prestado.
              <br></br>
              <br></br>
              Aí, em 1970, abriu sua própria oficina, o Auto Elétrico Pioneiro,
              no bairro Vila das Belezas, zona sul da cidade de São Paulo...
            </h3>
            <span>"</span>
            <div className="btnContainer">
              <button className="moreButton">Saiba Mais</button>
            </div>
          </div>
        </div>
      </WhoWeAre>
      <WhyChooseUs>
        <div className="Container">
          <div className="ourEmplyess">
            <div className="employees">
              <img
                className="photoemplyees"
                src={funcionarios}
                alt="funcionarios"
              />
              <div className="whitebox">
                <div className="text">
                  <p> Anos de experiência</p>
                  <span>Desde 1970</span>
                </div>
              </div>
            </div>
          </div>

          <div className="WhyChooseUs">
            <div className="tittle">
              <h1>Porque escolher a Pioneiro?</h1>
              <img
                className="detailsRed"
                src={detalhes}
                alt="Detalhes em vermelho"
              />
            </div>
            <div className="skills">
              <img src={skills} alt="Skills em vermelho" />
            </div>
          </div>
        </div>
      </WhyChooseUs>
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
      <Feedbacks>
        <div className="Container">
          <div className="rowcontent">
            <div className="depoimentsArea">
              <div className="depoimentsAreaContentTittle">
                <p>O que os nossos clientes falam de nós </p>
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
                      <span>“</span>
                      <p>{item.Depoiment}</p>
                      <span>"</span>
                    </div>
                    <div className="OwnerDepoiment">
                      <p>{item.Nome}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="imageArea">
            <img
              className="pcDepoiments"
              src={backgroundDepoiments}
              alt="Imagem de depoimento"
            />
            <img
              className="tabletDepoiments"
              src={backgroundDepoimentsTablet}
              alt="Imagem de depoimento"
            />
          </div>
        </div>
      </Feedbacks>
      <ContactUs>
        <h1 className="tittle">Gostou do nossos serviços?</h1>
        <div className="contactContainer">
          <div className="areaContact">
            <div className="tittlePart">
              <h2>Entre em contato</h2>
              <img src={graydetails} alt="Detalhes cinzas" />
            </div>
            <div className="infosContact">
              <div className="location  globalSetings">
                <FaMapMarkerAlt className="icons" />
                <p>
                  Estrada de Itapecerica, 1869, Vila Maracanã, 05835-005, S.
                  Paulo, SP (Ao lado da AABB)
                </p>
              </div>
              <div className="workTime globalSetings">
                <AiFillCalendar className="icons" />
                <p>Segunda à Sexta - 8h às 17h e Sábado - 8h às 12h</p>
              </div>
              <div className="telephone globalSetings">
                <AiFillPhone className="icons" />
                <p>(11)5512-9313 ou (11)94107-0499</p>
              </div>
            </div>
          </div>
          <div className="googleMaps">
            <MapsEmbed />
          </div>
        </div>
        <Footer />
      </ContactUs>
    </>
  );
}
