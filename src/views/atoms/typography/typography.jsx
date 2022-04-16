import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./typography.scss";

export const HeadingXl = ({ children }) => (
  <h1 className="heading-xl">{children}</h1>
);

HeadingXl.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Paragraph = ({ children }) => (
  <p className="paragraph">{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export const StandardLink = ({ to, children, bold }) => (
  <Link to={to} className={`link ${bold ? "link--bold" : ""}`}>{children}</Link>
);

StandardLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool.isRequired,
};

StandardLink.defaultProps = {
  bold: false,
};
