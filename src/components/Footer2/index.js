import logo from "../../imgs/footer/logo.svg";
import { Footerr } from "./style";
import { Link } from "react-router-dom";
export default function Footer2() {
  return (
    <div>
      <Footerr>
        <div className="options">
          <div>
            <Link to="/">
              <p>Quem somos</p>
            </Link>
          </div>

          <div>
            <Link to="/">
              <p>Serviços</p>
            </Link>
          </div>

          <div>
            <Link to="/">
              <p>Contato</p>
            </Link>
          </div>

          <div>
            <Link to="/">
              <p>Termos de uso</p>
            </Link>
          </div>

          <div>
            <Link to="/">
              <p>Políticas de privacidade </p>
            </Link>
          </div>
        </div>

        <div className="dowPart">
          <div className="direction">
            <p>@ 2022 todos os direitos reservados</p>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </Footerr>
    </div>
  );
}
