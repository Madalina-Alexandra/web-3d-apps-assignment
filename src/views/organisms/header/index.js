import React from "react";
import { useLocation } from "react-router-dom";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";

const Header = () => {
  // If current route is "/loading" don't render the header
  const { pathname } = useLocation();
  if (pathname === "/loading") return;
  return (
    <header className="header">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};

export default Header;
