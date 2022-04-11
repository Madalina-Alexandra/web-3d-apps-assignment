import React from 'react';
import './nav-mobile.scss';
import NavItemMobile from '../../atoms/nav-items-mobile';
import HomeIcon from '../../atoms/icons/home.icon';
import CubeIcon from '../../atoms/icons/cube-icon';
import BookIcon from '../../atoms/icons/book-icon';
import ImageIcon from '../../atoms/icons/image-icon';
import LinkIcon from '../../atoms/icons/link-icon';

const NavMobile = React.forwardRef((props, ref) => (
  <nav className={`nav-mobile ${props.clickable ? 'nav-mobile--clickable' : ''}`} ref={ref}>
    <ul className="nav-mobile__ul">
      <NavItemMobile to="/" text="Home" icon={<HomeIcon />} setOpenMenu={props.setOpenMenu} />
      <NavItemMobile to="/3d-experience" text="3D Experience" icon={<CubeIcon />} setOpenMenu={props.setOpenMenu} />
      <NavItemMobile to="/about" text="About" icon={<BookIcon />} setOpenMenu={props.setOpenMenu} />
      <NavItemMobile to="/gallery" text="Gallery" icon={<ImageIcon />} setOpenMenu={props.setOpenMenu} />
      <NavItemMobile to="/links" text="Links" icon={<LinkIcon />} setOpenMenu={props.setOpenMenu} />
    </ul>
  </nav> 
));

export default NavMobile;
