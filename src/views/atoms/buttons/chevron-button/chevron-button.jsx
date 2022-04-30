import React from "react";
import PropTypes from "prop-types";
import "./chevron-button.scss";
import ChevronRightIcon from '../../icons/chevron-right-icon';
import ChevronLeftIcon from "../../icons/chevron-left-icon";


const ChevronButton = ({ right, disabled, onClick }) => (
  <button
    type="button"
    className="chevron-button"
    onClick={onClick}
    disabled={disabled}
  >
    {right ? (
      <ChevronRightIcon />
    ) : (
      <ChevronLeftIcon />
    )}
  </button>
);

ChevronButton.propTypes = {
  right: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ChevronButton.defaultProps = {
  right: false,
  disabled: false,
};

export default ChevronButton;
