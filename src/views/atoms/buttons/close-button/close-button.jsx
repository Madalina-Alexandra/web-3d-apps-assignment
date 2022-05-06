import React from "react";
import PropTypes from "prop-types";
import "./close-button.scss";
import CloseIcon from '../../icons/close-icon';


const CloseButton = ({ disabled, onClick }) => (
  <button
    type="button"
    className="close-button"
    onClick={onClick}
    disabled={disabled}
  >
    <CloseIcon />
  </button>
);

CloseButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

CloseButton.defaultProps = {
  disabled: false,
};

export default CloseButton;
