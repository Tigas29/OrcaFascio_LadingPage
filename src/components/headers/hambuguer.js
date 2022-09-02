import logo from "../../imgs/logotipo.svg";
import { Link, useLocation } from "react-router-dom";
import { Header } from "./styleBurguer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function HeaderMob() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const path = useLocation().pathname;
  useEffect(() => {
    function scrollUp() {
      window.scrollTo(0, 0);
    }
    scrollUp();
  }, [path]);

  return (
    <Header isVisible={menuIsVisible}>
      <div className="containter" isVisible={menuIsVisible}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <GiHamburgerMenu
          className="icons"
          onClick={() => setMenuIsVisible(true)}
        />

        <nav>
          <div className="options">
            <IoClose
              className="closeIcon"
              size={50}
              onClick={() => setMenuIsVisible(false)}
            />
            <Link to="/">Home</Link>
            <Link to="/sobreNos">Quem somos</Link>
            <Link to="/Servico">Serviços</Link>
            <Link to="/Contato">Contato</Link>
            <a href="https://www.google.com.br/maps/place/Auto+Técnica+Pioneiro/@-23.6497437,-46.7533495,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce53dec3f7e1a1:0x55bf9de00508414d!8m2!3d-23.6497486!4d-46.7511608">
              Localização
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511941070499&text=Olá%20me%20chamo%20*Seu%20nome*%20e%20gostaria%20de%20saber...">
              Dúvidas
            </a>
          </div>
        </nav>
      </div>
    </Header>
  );
}
