import React from "react";
import PropTypes from "prop-types";
import "./links-list.scss";

export const LinksList = ({ children }) => (
  <ul className="links-list">{children}</ul>
);

LinksList.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LinksListItem = ({ title, to, icon, children }) => (
  <li className="links-list__item">
    <a href={to} className="links-list__item-link">
      <div className="links-list__item-icon">{icon}</div>
      <h3 className="links-list__item-title">{title}</h3>
      <div className="links-list__item-content">{children}</div>
    </a>
  </li>
);
