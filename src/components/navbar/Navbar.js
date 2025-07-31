import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import './navbar.css';


const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>M.Irfan</h2>
        </div>
        <div className="right-section">
          <ul className={isMenuOpen ? 'ul-active' : ''}>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={600}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={600}>Skills</Link></li>
            <li><Link to="about" smooth={true} duration={600}>Projects</Link></li>
            <li><Link to="about" smooth={true} duration={600}>Contact</Link></li>
          </ul>
          <div id="moon" onClick={toggleTheme}>
            <i className='bx bxs-moon'></i>
          </div>
          <div id="hambrger" onClick={toggleMenu}>
            <i id="hamburger-icon" className='bx bx-menu'></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
