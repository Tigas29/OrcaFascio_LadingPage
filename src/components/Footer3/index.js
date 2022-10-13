import logo from "../../imgs/footer/logo.svg";
import { Footerr } from "./style";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
export default function Footer3() {
  return (
    <div>
      <Footerr>
        <div className="talkToSeller">
          <a href="tel:551141184498" target="blanked">
            <p>Fale com um de nossos vendedores</p>
          </a>
        </div>
        <div className="rowPart">
          <div>
            <a href="">
              <AiOutlineInstagram className="icon" />
            </a>
            <a href="">
              <AiOutlineLinkedin className="icon" />
            </a>
            <a href="">
              <AiOutlineWhatsApp className="icon" />
            </a>{" "}
            <a href="">
              <AiOutlineTwitter className="icon" />
            </a>{" "}
            <a href="">
              <AiOutlineYoutube className="icon" />
            </a>
          </div>
          <div className="direction">
            <p>Copyright © 2021 - OrçaFascio - 3F LTDA</p>
          </div>
        </div>
      </Footerr>
    </div>
  );
}
