import React from "react";
import PropTypes from "prop-types";
import "./select.scss";
import ChevronDown from '../../atoms/icons/chevron-down';

const Select = ({ label, children, value, onChange }) => (
  <label className="select">
    {label}
    <div className="select__container">
      <select className="select__select" value={value} onChange={onChange}>
        {children}
      </select>
      <ChevronDown />
    </div>
  </label>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
