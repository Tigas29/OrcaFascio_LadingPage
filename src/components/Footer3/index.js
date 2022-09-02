import logo from "../../imgs/footer/logo.svg";
import { Footerr } from "./style";
import { Link } from "react-router-dom";
export default function Footer3() {
  return (
    <div>
      <Footerr>
        <div className="options">
          <div>
            <Link to="/sobrenos">
              <p>Quem somos</p>
            </Link>
          </div>

          <div>
            <Link to="/Servico">
              <p>Serviços</p>
            </Link>
          </div>

          <div>
            <Link to="/contato">
              <p>Contato</p>
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
