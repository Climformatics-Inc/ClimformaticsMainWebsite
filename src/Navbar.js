import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from './images/newlogo.png';

const Navbar = ({ handleScrollToContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu(); // Close the menu after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span>{isMenuOpen ? '✖' : '☰'}</span>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item"><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li className="navbar-item"><Link to="/solutions" onClick={handleLinkClick}>Solutions</Link></li>
          <li className="navbar-item"><Link to="/resources" onClick={handleLinkClick}>Resources</Link></li>
          <li className="navbar-buttons">
            <button className="btn trial" onClick={() => { handleScrollToContact(); closeMenu(); }}>Contact Us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
