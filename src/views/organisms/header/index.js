import React from "react";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";

const Header = () => (
  <header className="header">
    <HeaderMobile />
    <HeaderDesktop />
  </header>
);

export default Header;
