import Header1 from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import Footer from "../../components/Footer/index";
import { Main, Capa, Box } from "./style";
import background from "../../imgs/Computador/injecao/background.svg";
import backgroundTablet from "../../imgs/Tablets/injecao/background.svg";
import backgroundPhone from "../../imgs/phone/backgroundPhone2.svg";
import btn from "../../imgs/Computador/setaBaixo.svg";
export function Injecao() {
  return (
    <Main>
      <Header1 />
      <HeaderMob />
      <Capa>
        <div className="containerCapa">
          <div className="tittle">
            <h1>INJEÇÃO ELETRÔNICA </h1>
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
                <p>
                  O que fazemos da parte de Injeção eletrônica do seu carro.
                </p>
              </div>
              <div className="options">
                <span></span>
                <p>Rastreamento Eletrônico com Scanner</p>
                <p>Limpeza de Bicos Injetores e Corpo de Borboleta</p>
                <p>Troca de Sensores e Atuadores do Sistema de Injeção</p>
                <p>Reprogramação de Combustível</p>
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
