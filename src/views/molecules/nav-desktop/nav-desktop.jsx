import React from "react";
import NavItemDesktop from "../../atoms/nav-item-desktop";
import "./nav-desktop.scss";

const NavDesktop = () => {
  return (
    <nav className="nav-desktop">
      <ul className="nav-desktop__ul">
          <NavItemDesktop to="/" text="Home" />
          <NavItemDesktop to="/3d-experience" text="3d-experience" />
          <NavItemDesktop to="/about" text="About" />
          <NavItemDesktop to="/gallery" text="Gallery" />
          <NavItemDesktop to="/links" text="Links" />
      </ul>
    </nav>
  );
};

export default NavDesktop;
