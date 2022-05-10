import React from "react";
import PropTypes from "prop-types";
import "./codeblock.scss";

const Codeblock = ({ children, small }) => (
  <code className={`codeblock ${small ? "codeblock--small" : ""}`}>{children}</code>
);

Codeblock.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};

Codeblock.defaultProps = {
  small: false,
};

export default Codeblock;
