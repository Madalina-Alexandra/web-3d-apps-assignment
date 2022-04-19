import React from "react";
import PropTypes from "prop-types";
import "./container.scss"

const Container = ({ children }) => <main className="container">{children}</main>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container;
