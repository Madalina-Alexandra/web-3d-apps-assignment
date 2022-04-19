import React from "react";
import PropTypes from "prop-types";
import "./tab.scss"

const Tab = ({ active, children, onClick }) => (
  <button
    type="button"
    className={`tab ${active ? "tab--active" : ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
