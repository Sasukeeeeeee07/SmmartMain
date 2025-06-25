import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/image/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Add scroll event listener to make header more compact when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);
  // Close menu when clicking or tapping outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Handle both mouse and touch events for better mobile experience
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);
  const toggleMenu = () => {
    // When toggling the menu, always close any open dropdown
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);

    // Prevent body scroll when menu is open on mobile
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleDropdown = (dropdown) => {
    // Toggle the dropdown, closing other dropdowns if needed
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Ensure body scroll is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []); return (
    <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="main-logo">
        <Link to="/">
          <img src={logoImage} alt="Smmart Logo" className="logo-image" />
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
        <div className="main-nav-links">          <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
          <div className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown('about')}
              aria-expanded={activeDropdown === 'about'}
            >
              About
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
              <Link to="/about/AboutSmmart" onClick={() => setIsMenuOpen(false)}>About Smmart</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our People</Link>
            </div>
          </div>
          <Link
            to="/products/individual"
            className={location.pathname === '/products/individual' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Product
          </Link>
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
        </div>        <Link to="/contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Header; 