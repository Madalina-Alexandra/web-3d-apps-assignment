import React from "react";
import PropTypes from "prop-types";

export const LinksList = ({ children }) => <ul className="links-list">{children}</ul>;

LinksList.propTypes = {
  children: PropTypes.node.isRequired,
};
