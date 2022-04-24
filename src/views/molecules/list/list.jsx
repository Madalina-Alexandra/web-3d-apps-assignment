import React from "react";
import PropTypes from "prop-types";
import './list.scss';

export const List = ({children}) => (
  <ul className="list">
    {children}
  </ul>
)

List.propTypes = {
  children: PropTypes.node.isRequired,
}


export const ListItem = ({children}) => (
  <li className="list__item">
    {children}
  </li>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

// export const ListLink = ({ children, to }) => (
//   <a href={to} className="list__link">{children}</a>
// );

// ListLink.propTypes = {
//   children: PropTypes.node.isRequired,
//   to: PropTypes.string.isRequired,
// };
