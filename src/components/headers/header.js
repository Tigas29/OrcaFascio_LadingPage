import { useLocation } from "react-router-dom";
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
        <header class="animate__animated animate__fadeInDown">
          <div className="left">
            <div className="LinkContent">
              <a href="/">
                <p>Home</p>
              </a>
            </div>
            <div className="LinkContent">
              <a href="#Promoção!">
                <p>Confira</p>
              </a>
            </div>
          </div>
          <a href="/">
            <img className="logo" src={logotipo} alt="loqgo" />
          </a>
          <div className="right">
            <div className="LinkContent">
              <a href="#beneficios">
                <p>Benefícios</p>
              </a>
            </div>
            <div className="LinkContent">
              <a href="#Depoimentos">
                <p>Depoimentos</p>
              </a>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
}
