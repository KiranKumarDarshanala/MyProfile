import React, { useState, useRef } from 'react';
import './Navbar.css';

import { FaLinkedin, FaInstagram, FaGithub, FaFacebook, FaHome, FaUser } from 'react-icons/fa';
import { SiHyperskill } from 'react-icons/si';
import { BiSolidContact } from 'react-icons/bi';
import { IoReorderThreeOutline, IoClose } from 'react-icons/io5';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
    setMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-800px";
    setMenuOpen(false);
  };

  return (
    <nav className="header">
      <div className="logo">
        <a href="#home">Kiran Kumar</a>
      </div>

      <div className="navgation" ref={menuRef}>
        <ul className="nav">
          <li>
            <AnchorLink className='anchor-link' href='#home' onClick={closeMenu}>
              <span className='flex items-center gap-2 line'><FaHome />Home</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' href='#about' onClick={closeMenu}>
              <span className='flex items-center gap-2 line'><FaUser />About</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' href='#skills' onClick={closeMenu}>
              <span className='flex items-center gap-2 line'><SiHyperskill />Skills</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' href='#contact' onClick={closeMenu}>
              <span className='flex items-center gap-2 line'><BiSolidContact />Contact Us</span>
            </AnchorLink>
          </li>
        </ul>
        <i onClick={closeMenu} className={`close-icon ${menuOpen ? 'visible' : ''}`}><IoClose /></i>
      </div>

      <div className="mobile-view">
        <i onClick={openMenu} className={`open-icons ${menuOpen ? 'hidden' : ''}`}><IoReorderThreeOutline /></i>
      </div>

      <div className="links">
        <a href="/" className="links"><FaLinkedin /></a>
        <a href="/" className="links"><FaGithub /></a>
        <a href="/" className="links"><FaFacebook /></a>
        <a href="/" className="links"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
