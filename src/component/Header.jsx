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
  }, [location.pathname, isMenuOpen]);
  // Close menu when clicking or tapping outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking the hamburger button 
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }

      // Don't close if menu is already closed
      if (!isMenuOpen) {
        return;
      }

      // Only close if clicking outside the navigation area AND the nav is open
      // Check if the click is outside the nav menu
      const isClickOutsideNav = navRef.current && !navRef.current.contains(event.target);

      // Make sure the nav-section container itself is also excluded from closing the menu
      const navSection = document.querySelector('.nav-section');
      const isClickInsideNavSection = navSection && navSection.contains(event.target);

      if (isClickOutsideNav && !isClickInsideNavSection && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        document.body.style.overflow = '';
      }
    };

    // Add a small delay before attaching the click outside event
    // This prevents the immediate closing when the hamburger is clicked
    const timeoutId = setTimeout(() => {
      // Handle both mouse and touch events for better mobile experience
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);
  const toggleMenu = (e) => {
    // Prevent event propagation to stop the click from reaching document
    if (e) {
      e.stopPropagation();
    }

    // When toggling the menu, always close any open dropdown
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    setActiveDropdown(null);

    // Prevent body scroll when menu is open on mobile
    // Only lock scroll on small screens (mobile devices)
    if (window.innerWidth <= 800) {
      document.body.style.overflow = newMenuState ? 'hidden' : '';
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
      </div>      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={(e) => toggleMenu(e)}
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