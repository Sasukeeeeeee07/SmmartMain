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
  const hamburgerRef = useRef(null);

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
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      // Check if click is inside the nav or hamburger
      if (
        navRef.current && 
        navRef.current.contains(event.target) || 
        (hamburgerRef.current && 
        hamburgerRef.current.contains(event.target))
      ) {
        return;
      }
      
      // Close the menu if click is outside
      setIsMenuOpen(false);
      setActiveDropdown(null);
      document.body.style.overflow = '';
    };

    // Use a timeout to prevent immediate closing
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    // Prevent default to avoid any native behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    setActiveDropdown(null);

    // Prevent body scroll when menu is open on mobile
    if (window.innerWidth <= 800) {
      document.body.style.overflow = newMenuState ? 'hidden' : '';
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Ensure body scroll is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
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
        ref={hamburgerRef}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <div className={`nav-section ${isMenuOpen ? 'open' : ''}`}>
        <div className="main-nav-links">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <div className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
            <button
              className="dropdown-trigger"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('about');
              }}
              aria-expanded={activeDropdown === 'about'}
            >
              About
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
              <Link to="/about/AboutSmmart" onClick={() => setIsMenuOpen(false)}>About smmart</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our People</Link>
            </div>
          </div>
          <Link
            to="/products/individual"
            className={location.pathname.startsWith('/products/individual') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Products
          </Link>
          <Link
            to="/blog"
            className={location.pathname.startsWith('/blog') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/careers"
            className={location.pathname.startsWith('/careers') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/merchandise"
            className={location.pathname.startsWith('/merchandise') ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Merchandise
          </Link>
        </div>
        <Link to="/contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Header;