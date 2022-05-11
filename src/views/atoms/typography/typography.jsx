import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./typography.scss";

export const Heading4xl = ({ children, noMargin }) => (
  <h1 className={`heading-4xl ${noMargin ? "heading-4xl--no-margin" : ""}`}>
    {children}
  </h1>
);

Heading4xl.propTypes = {
  children: PropTypes.node.isRequired,
  noMargin: PropTypes.bool,
};

Heading4xl.defaultProps = {
  noMargin: false,
};

export const HeadingLg = ({ children }) => (
  <h2 className="heading-lg">{children}</h2>
);

HeadingLg.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Paragraph = ({ children, onDark }) => (
  <p className={`paragraph ${onDark ? "paragraph--on-dark" : ""}`}>
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  onDark: PropTypes.bool,
};

Paragraph.defaultProps = {
  onDark: false,
};

export const Span = ({ children, fullWidth }) => (
  <p className={`span ${fullWidth ? "span--full" : ""}`}>{children}</p>
);

Span.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};

Span.defaultProps = {
  fullWidth: false,
};

export const StandardLink = ({ to, children, bold, router, dark }) => {
  if (router)
    return (
      <Link
        to={to}
        className={`link ${bold ? "link--bold" : ""} ${
          dark ? "link--dark" : ""
        }`}
      >
        {children}
      </Link>
    );

  return (
    <a
      href={to}
      className={`link ${bold ? "link--bold" : ""} ${dark ? "link--dark" : ""}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

StandardLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool.isRequired,
  nonRouter: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
};

StandardLink.defaultProps = {
  bold: false,
  nonRouter: false,
  dark: false,
};
