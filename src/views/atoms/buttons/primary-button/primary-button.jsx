import React from "react";
import PropTypes from "prop-types";
import './primary-button.scss'

const PrimaryButton = ({ children, onClick, type }) => (
  <button type={type} className="primary-btn" onClick={onClick}>
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

PrimaryButton.defaultProps = {
  type: "button",
};

export default PrimaryButton;
