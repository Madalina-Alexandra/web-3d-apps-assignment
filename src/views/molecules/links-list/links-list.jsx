import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./links-list.scss";

export const LinksList = ({ children }) => (
  <ul className="links-list">{children}</ul>
);

LinksList.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LinksListItem = ({ title, to, icon, children, isHash }) => (
  <li className="links-list__item">
    {isHash ? (
      <Link
        to={{ pathname: "/about", hash: to }}
        className="links-list__item-link"
      >
        <div className="links-list__item-icon">{icon}</div>
        <h3 className="links-list__item-title">{title}</h3>
        <div className="links-list__item-content">{children}</div>
      </Link>
    ) : (
      <a
        href={to}
        className="links-list__item-link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="links-list__item-icon">{icon}</div>
        <h3 className="links-list__item-title">{title}</h3>
        <div className="links-list__item-content">{children}</div>
      </a>
    )}
  </li>
);

LinksListItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  isHash: PropTypes.bool,
};

LinksListItem.defaultProps = {
  isHash: false,
};
