import React from "react";
import PropTypes from "prop-types";
import "./codeblock.scss";

const Codeblock = ({ children }) => (
  <code className="codeblock">{children}</code>
);

Codeblock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Codeblock;
