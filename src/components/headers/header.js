import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "./styleHeader.js";
import logotipo from "../../imgs/logotipo.svg";
export default function Header1() {
  const path = useLocation().pathname;
  useEffect(() => {
    function scrollUp() {
      window.scrollTo(0, 0);
    }
    scrollUp();
  }, [path]);
  return (
    <div>
      <Container>
        <header>
          <div className="left">
            <div className="LinkContent">
              <Link to="/">
                <p>Home</p>
              </Link>
              <hr className={`${path === "/" ? "active" : ""}`} />
            </div>
            <div className="LinkContent">
              <Link to="/sobreNos">
                <p>Quem somos</p>
              </Link>
              <hr className={`${path === "/sobreNos" ? "active" : ""}`} />
            </div>
            <div className="LinkContent">
              <Link to="/Servico">
                <p>Serviços</p>
              </Link>
              <hr className={`${path === "/Servico" ? "active" : ""}`} />
            </div>
          </div>
          <Link to="/">
            <img className="logo" src={logotipo} alt="loqgo" />
          </Link>
          <div className="right">
            <div className="LinkContent">
              <Link to="/Contato">
                <p>Contato</p>
              </Link>
              <hr className={`${path === "/Contato" ? "active" : ""}`} />
            </div>
            <div className="LinkContent">
              <a
                href="https://www.google.com.br/maps/place/Auto+Técnica+Pioneiro/@-23.6497437,-46.7533495,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce53dec3f7e1a1:0x55bf9de00508414d!8m2!3d-23.6497486!4d-46.7511608"
                target="blanked"
              >
                <p>Localização</p>
              </a>
              <hr className={`${path === "/sss" ? "active" : ""}`} />
            </div>

            <div className="LinkContent">
              <Link to="/">
                <p>Dúvidas</p>
              </Link>
              <hr className={`${path === "/sss" ? "active" : ""}`} />
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
}
