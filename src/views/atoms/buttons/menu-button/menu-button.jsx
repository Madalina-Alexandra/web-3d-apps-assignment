import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '../../icons/menu-icon';
import CloseIcon from '../../icons/close-icon';
import './menu-button.scss';

const MenuButton = ({ active, onClick }) => (
  <button type="button" className="menu-button" onClick={onClick}>
    {active ? (<CloseIcon />) : (<MenuIcon />)}
  </button>
);

MenuButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

MenuButton.defaultProps = {
  active: false,
}

export default MenuButton;
