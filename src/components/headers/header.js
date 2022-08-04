import { Container } from "./styleHeader.js";
import logotipo from "../../imgs/logotipo.svg";
import { Link } from "react-router-dom";
export default function Header1() {
  return (
    <>
      <Container>
        <header>
          <div className="left">
            <div className="LinkContent">
              <Link to="/">
                <p>Home</p>
              </Link>
              <hr className="active" />
            </div>
            <Link to="/">
              <p>Quem somos</p>
            </Link>
            <Link to="/">
              <p>Serviços</p>
            </Link>
          </div>
          <img className="logo" src={logotipo} alt="loqgo" />
          <div className="right">
            <Link to="/">
              <p>Contato</p>
            </Link>
            <Link to="/">
              <p>Localização</p>
            </Link>
            <Link to="/">
              <p>Dúvidas</p>
            </Link>
          </div>
        </header>
      </Container>
    </>
  );
}
