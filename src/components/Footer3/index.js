import logo from "../../imgs/footer/logo.svg";
import { Footerr } from "./style";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
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
            <a href="https://www.instagram.com/orcafascio/" target="blanked">
              <AiOutlineInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/orcafascio/"
              target="blanked"
            >
              <AiOutlineLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/orcafascio_of" target="blanked">
              <AiOutlineTwitter className="icon" />
            </a>{" "}
            <a
              href="https://www.youtube.com/c/Or%C3%A7aFascio3F"
              target="blanked"
            >
              <AiOutlineYoutube className="icon" />
            </a>
            <a href="https://www.facebook.com/orcafascio" target="blanked">
              <AiOutlineFacebook className="icon" />
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
