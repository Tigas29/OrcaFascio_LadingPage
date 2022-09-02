import Header1 from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import Footer from "../../components/Footer/index";
import { Main, Capa, Box } from "./style";
import background from "../../imgs/Computador/eletrica/background.svg";
import backgroundTablet from "../../imgs/Tablets/eletrica/background.svg";
import backgroundPhone from "../../imgs/phone/backgroundPhone.svg";
import btn from "../../imgs/Computador/setaBaixo.svg";
export function Eletrica() {
  return (
    <Main>
      <Header1 />
      <HeaderMob />
      <Capa>
        <div className="containerCapa">
          <div className="tittle">
            <h1>ELÉTRICA</h1>

            <a href="#down">
              <img src={btn} alt="button" />
            </a>
          </div>
          <div className="background">
            <img
              className="desktopBackground"
              src={background}
              alt="background capa"
            />
            <img
              className="tabletBackground"
              src={backgroundTablet}
              alt="background capa"
            />
            <img
              className="phoneBackground"
              src={backgroundPhone}
              alt="background capa"
            />
          </div>
        </div>
      </Capa>
      <Box id="down">
        <div className="container">
          <div className="whitePart">
            <div className="textArea">
              <div className="tittleBox">
                <p>O que fazemos da parte elétrica do seu carro.</p>
              </div>
              <div className="options">
                <span></span>
                <p>Bateria</p>
                <p>Alternador</p>
                <p>Motor de Partida</p>
                <p>Iluminação</p>
                <p>Instalações Elétricas</p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5511941070499&text=Ol%C3%A1%20me%20chamo%20*Seu%20nome*%20e%20gostaria%20de%20saber..."
              target="blanked"
            >
              <button>Entre em contato</button>
            </a>
          </div>
        </div>
      </Box>
      <Footer className="FOOTER" />
    </Main>
  );
}
