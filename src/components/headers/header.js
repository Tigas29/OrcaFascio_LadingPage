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
                <p>Benefícios</p>
              </Link>
              <hr className={`${path === "/sobreNos" ? "active" : ""}`} />
            </div>
          </div>
          <Link to="/">
            <img className="logo" src={logotipo} alt="loqgo" />
          </Link>
          <div className="right">
            <div className="LinkContent">
              <Link to="/Contato">
                <p>Depoimentos</p>
              </Link>
              <hr className={`${path === "/Contato" ? "active" : ""}`} />
            </div>
            <div className="LinkContent">
              <Link to="/Servico">
                <p>Confira!</p>
              </Link>
              <hr className={`${path === "/Servico" ? "active" : ""}`} />
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
}
