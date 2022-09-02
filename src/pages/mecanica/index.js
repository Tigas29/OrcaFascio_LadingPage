import Header1 from "../../components/headers/header";
import HeaderMob from "../../components/headers/hambuguer";
import Footer2 from "../../components/Footer2/index";
import { Main, Capa, Box } from "./style";
import background from "../../imgs/Computador/mecanica/background.svg";
import backgroundTablet from "../../imgs/Tablets/mecanica/background.svg";
import backgroundPhone from "../../imgs/phone/backgroundPhone3.svg";
import btn from "../../imgs/Computador/setaBaixo.svg";
export function Mecanica() {
  return (
    <Main>
      <Header1 />
      <HeaderMob />
      <Capa>
        <div className="containerCapa">
          <div className="tittle">
            <h1>MECÂNICA </h1>
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
                <p>O que fazemos da parte da parte mecânica do seu carro.</p>
              </div>
              <div className="options">
                <span></span>
                <div className="rowContainer">
                  <p>Freio </p>
                  <p>Suspensão </p>
                  <p>Embreagem</p>
                  <p>Correia Dentada </p>
                  <p>Sistema de Arrefecimento</p>
                  <p>Cabeçote</p>
                </div>

                <div className="rowContainer">
                  <p>Motor</p>
                  <p>Câmbio</p>
                  <p>Troca de Óleo e Fluídos</p>
                  <p>Retirada de Vazamentos de Água e Óleo</p>
                </div>
              </div>
            </div>
            <button>Entre em contato</button>
          </div>
        </div>
      </Box>
      <Footer2 />
    </Main>
  );
}
