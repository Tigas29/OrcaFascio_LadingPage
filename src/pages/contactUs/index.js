import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import MapsEmbed2 from "../../EmbedGoogleMaps/index2";
import graydetails from "../../imgs/graydetails.svg";
import {
  AiFillCalendar,
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Header1 from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import Footer from "../../components/Footer/index";
import { ContactUs, Main } from "./style";
export function Contact() {
  return (
    <Main>
      <HeaderMob />
      <Header1 />
      <ContactUs>
        <div className="contactContainer">
          <div className="areaContact">
            <div className="tittlePart">
              <h2>Entre em contato</h2>
              <img src={graydetails} alt="Detalhes cinzas" />
            </div>
            <div className="infosContact">
              <div className="location  globalSetings">
                <FaMapMarkerAlt className="icons" />
                <a
                  href="https://www.google.com.br/maps/place/Auto+Técnica+Pioneiro/@-23.6497437,-46.7533495,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce53dec3f7e1a1:0x55bf9de00508414d!8m2!3d-23.6497486!4d-46.7511608"
                  target="blanked"
                >
                  <p>
                    Estrada de Itapecerica, 1869, Vila Maracanã, 05835-005, S.
                    Paulo, SP (Ao lado da AABB)
                  </p>
                </a>
              </div>
              <div className="workTime globalSetings">
                <AiFillCalendar className="icons" />
                <p>Segunda à Sexta - 8h às 17h e Sábado - 8h às 12h</p>
              </div>
              <div className="telephone globalSetings">
                <AiFillPhone className="icons" />
                <p>
                  {" "}
                  <a href="tel:+55115512-9313"> (11)5512-9313</a> ou
                  <a href="tel:+551194107-0499"> (11)94107-0499</a>
                </p>
              </div>
            </div>
          </div>
          <div className="googleMaps">
            <MapsEmbed2 />
          </div>
        </div>
      </ContactUs>
      <Footer />
    </Main>
  );
}
