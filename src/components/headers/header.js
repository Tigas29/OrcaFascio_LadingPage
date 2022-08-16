import { Link, useLocation } from "react-router-dom";
import { Container } from "./styleHeader.js";
import logotipo from "../../imgs/logotipo.svg";
export default function Header1() {
  const path = useLocation().pathname;
  return (
    <>
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
              <Link to="/">
                <p>Quem somos</p>
              </Link>
              <hr className={`${path === "/sss" ? "active" : ""}`} />
            </div>
            <div className="LinkContent">
              <Link to="/">
                <p>Serviços</p>
              </Link>
              <hr className={`${path === "/sss" ? "active" : ""}`} />
            </div>
          </div>
          <img className="logo" src={logotipo} alt="loqgo" />
          <div className="right">
            <div className="LinkContent">
              <Link to="/">
                <p>Contato</p>
              </Link>
              <hr className={`${path === "/sss" ? "active" : ""}`} />
            </div>
            <div className="LinkContent">
              <Link to="/">
                <p>Localização</p>
              </Link>
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
    </>
  );
}
