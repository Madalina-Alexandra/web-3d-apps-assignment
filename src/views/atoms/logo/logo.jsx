import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./logo.scss";

const Logo = ({ onDark }) => (
  <div className={`logo ${onDark ? 'logo--on-dark' : ''}`}>
    <Link to="/">LOGO</Link>
  </div>
);

Logo.propTypes = {
   onDark: PropTypes.bool,
}

Logo.defaultProps = {
  onDark: false,
};


export default Logo;
