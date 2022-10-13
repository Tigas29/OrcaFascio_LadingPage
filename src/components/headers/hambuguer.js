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
            <a href="/">Home</a>
            <a href="/#Promoção!">Confira</a>
            <a href="/#beneficios">Benefícios</a>
            <a href="/#Depoimentos">Depoimentos !</a>
          </div>
        </nav>
      </div>
    </Header>
  );
}
