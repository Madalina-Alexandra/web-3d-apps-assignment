import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './header-mobile.scss';
import Logo from '../../atoms/logo';
import MenuButton from '../../atoms/buttons/menu-button/menu-button';
import NavMobile from '../../molecules/nav-mobile';

const HeaderMobile = () => {

  const [openMenu, setOpenMenu] = useState(null);

  // This animates the menu in and out
  const bgRef = useRef(null);
  const navRef = useRef(null);
    useEffect(() => {            
      var tl = gsap.timeline();
      if(openMenu) {
        tl.to(bgRef.current, { y: 314, duration: 0.3 });
        tl.to(navRef.current, { opacity: 1, duration: 0.3 });
      }
      if(!openMenu && openMenu !== null) {
        tl.to(navRef.current, { opacity: 0, duration: 0.5 });
        tl.to(bgRef.current, { y: 0,  duration: 0.2 });
      }
    }, [openMenu]);

  return (
    <div className="header-mobile">
      <div className={`header-mobile__container ${openMenu ? 'header-mobile__container--active' : ''}`}>
        <div className="header-mobile__logo">
          <Logo />
        </div>
        <MenuButton active={openMenu} onClick={() => setOpenMenu(!openMenu)} />
      </div>
      <div className='header-mobile__nav'>
        <NavMobile 
          ref={navRef} 
          clickable={openMenu} 
          setOpenMenu={setOpenMenu} 
        />
      </div>
    <div className="header-mobile__background" ref={bgRef} />
  </div>
  )
}

export default HeaderMobile;
