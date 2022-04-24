import React from "react";
import PropTypes from "prop-types";
import "./admonition.scss";
import WarningIcon from "../../atoms/icons/warning.icon";
import InfoIcon from "../../atoms/icons/info.icon";

export const Admonition = ({ children, warning }) => {
  if (warning)
    return (
      <div className="admonition admonition--warning">
        <h3 className="admonition__title">
          <WarningIcon />
          Warning
        </h3>
        {children}
      </div>
    );

  return (
    <div className="admonition">
      <h3 className="admonition__title">
        <InfoIcon />
        Info
      </h3>
      {children}
    </div>
  );
};

Admonition.propTypes = {
  children: PropTypes.node.isRequired,
  warning: PropTypes.bool,
};

Admonition.defaultProps = {
  children: PropTypes.node.isRequired,
  warning: false,
};

export const AdmonitionParagraph = ({ children }) => {
  return <p className="admonition__paragraph">{children}</p>;
};

AdmonitionParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AdmonitionLink = ({ children, to }) => {
  return (
    <a href={to} className="admonition__link">
      {children}
    </a>
  );
};

AdmonitionLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
