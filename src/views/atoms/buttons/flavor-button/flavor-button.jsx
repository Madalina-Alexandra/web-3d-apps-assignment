import React from "react";
import PropTypes from "prop-types";
import "./flavor-button.scss"

const FlavorButton = ({ active, color, children, onClick }) => (
  <div className="flavor-button">
    <button
      type="button"
      onClick={onClick}
      className={`flavor-button__button ${
        active ? "flavor-button__button--active" : ""
      }`}
      style={
        active ? { border: `0.125rem solid ${color}`, color: color } : { backgroundColor: color }
      }
    />
    <span className="flavor-button__span">{children}</span>
  </div>
);

FlavorButton.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

FlavorButton.defaultProps = {
  active: false,
};

export default FlavorButton;
