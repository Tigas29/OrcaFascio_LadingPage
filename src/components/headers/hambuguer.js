import logo from "../../imgs/logotipo.svg";
import { Header } from "./styleBurguer";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderMob() {
  return (
    <Header>
      <div className="containter">
        <img src={logo} alt="logo" />
        <GiHamburgerMenu className="icons" />
      </div>
    </Header>
  );
}
