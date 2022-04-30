import React from "react";
import PropTypes from "prop-types";
import "./secondary-button.scss";

const SecondaryButton = ({ children, onClick, type }) => (
  <button type={type} className="secondary-btn" onClick={onClick}>
    {children}
  </button>
);

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

SecondaryButton.defaultProps = {
  type: "button",
};

export default SecondaryButton;
