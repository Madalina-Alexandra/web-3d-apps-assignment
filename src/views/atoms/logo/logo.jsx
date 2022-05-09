import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./logo.scss";

const Logo = ({ onDark }) => (
  <div className={`logo ${onDark ? "logo--on-dark" : ""}`}>
    <Link className="logo__link" to="/">
      <span className="logo__span logo__span--part-one">1</span>
      <span className="logo__span logo__span--part-two">oca</span>{" "}
      <span className="logo__span logo__span--part-three">Cola</span>
    </Link>
  </div>
);

Logo.propTypes = {
  onDark: PropTypes.bool,
};

Logo.defaultProps = {
  onDark: false,
};

export default Logo;
