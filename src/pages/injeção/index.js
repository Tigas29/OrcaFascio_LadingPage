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
            <img src={btn} alt="button" />
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
      <Box>
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
            <button>Entre em contato</button>
          </div>
        </div>
      </Box>
      <Footer className="FOOTER" />
    </Main>
  );
}
