import logo from "../../imgs/logotipo.svg";
import { Link } from "react-router-dom";
import { Header } from "./styleBurguer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";

export default function HeaderMob() {
  return (
    <Header>
      <div className="containter">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <GiHamburgerMenu className="icons" />

        <nav>
          <div className="options">
            <Link to="/">Teste</Link>
            <Link to="/">Teste</Link>
            <Link to="/">Teste</Link>
            <Link to="/">Teste</Link>
            <Link to="/">Teste</Link>
          </div>
        </nav>
      </div>
    </Header>
  );
}
