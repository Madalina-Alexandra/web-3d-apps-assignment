import React from "react";
import PropTypes from "prop-types";
import "./checkbox.scss"

const Checkbox = ({ children, checked, onChange }) => (
  <div className="checkbox">
    <label className="checkbox__label">
      <input
        className="checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  </div>
);

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
