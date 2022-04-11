import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from "react-router-dom";
import './nav-item-mobile.scss'

const NavItemMobile = ({ to, text, icon, setOpenMenu }) => {
  /**
   * We need to get the current route to see if its the same as the "to" prop,
   * if it is we will update the item's styles so the user know that this item
   * is the current active route
   */
  const { pathname } = useLocation();

  // This will allow us to navigate to a route when this item is clicked on
  const navigate = useNavigate();
  const handleNavigate = () =>  {
    navigate(to);
    setOpenMenu(false);
  }

  return (
    <li className={`nav-item-mobile ${pathname === to ? 'nav-item-mobile--active' : ''}`} onClick={handleNavigate}>
      {icon}
      {text}
    </li>
  );
};

NavItemMobile.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default NavItemMobile;
