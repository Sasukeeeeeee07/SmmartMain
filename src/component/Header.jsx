import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close mobile menu when route changes
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navSection = document.querySelector('.nav-section');
      const hamburger = document.querySelector('.hamburger');
      
      if (
        isMenuOpen && 
        navSection && 
        hamburger && 
        !navSection.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="main-navbar">
      <div className="main-logo">
        <Link to="/">
          Smm<span>art</span>
        </Link>
      </div>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <div className={`nav-section ${isMenuOpen ? 'open' : ''}`}>
        <div className={`main-nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <div className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
            <button className="dropdown-trigger" onClick={() => toggleDropdown('about')}>
              About
              <span className="dropdown-icon"></span>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
              <Link to="/about/AboutSmmart" onClick={() => setIsMenuOpen(false)}>About Smmart</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our People</Link>
            </div>
          </div>
          <Link 
            to="/blog" 
            className={location.pathname === '/blog' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/careers" 
            className={location.pathname === '/careers' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
          <Link 
            to="/merchandise" 
            className={location.pathname === '/merchandise' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Merchandise
          </Link>
          <Link 
            to="/contact" 
            className="mobile-contact-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
        <Link to="/contact" className="contact-btn desktop-only">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Header; 