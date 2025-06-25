import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/image/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="main-navbar">      <div className="main-logo">
      <Link to="/">
        <img src={logoImage} alt="Smmart Logo" className="logo-image" />
      </Link>
    </div>

      <button className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <div className={`nav-section ${isMenuOpen ? 'open' : ''}`}>
        <div className="main-nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home          </Link>          <div className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
            <button className="dropdown-trigger" onClick={() => toggleDropdown('about')}>
              About
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
              <Link to="/about/AboutSmmart">About Smmart</Link>
              <Link to="/about">Our People</Link>
            </div>
          </div>
          <Link to="/products/individual" className={location.pathname === '/products/individual' ? 'active' : ''}>
            Our Product
          </Link>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
            Blog
          </Link>
          <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>
            Careers
          </Link>
          <Link to="/merchandise" className={location.pathname === '/merchandise' ? 'active' : ''}>
            Merchandise
          </Link>
        </div>
        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Header; 