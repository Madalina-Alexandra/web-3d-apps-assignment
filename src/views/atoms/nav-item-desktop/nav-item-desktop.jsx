import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import "./nav-item-desktop.scss";

const NavItemDesktop = ({ to, text }) => (
  <li className="nav-item-desktop">
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "nav-item-desktop__link nav-item-desktop__link--active"
          : "nav-item-desktop__link"
      }
      to={to}
    >
      {text}
    </NavLink>
  </li>
);

NavItemDesktop.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItemDesktop;
