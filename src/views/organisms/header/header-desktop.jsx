import React from "react";
import "./header-desktop.scss";
import Logo from "../../atoms/logo";
import NavDesktop from "../../molecules/nav-desktop";

const HeaderDesktop = () => (
  <div className="header-desktop">
    <div className="header-desktop__container">
      <div className="header-desktop__logo-wrapper">
        <Logo />
      </div>
      <NavDesktop />
    </div>
  </div>
);

export default HeaderDesktop;
