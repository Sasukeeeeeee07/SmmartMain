import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/image/logo.png';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <footer className="sigma-footer">
      <div className="footer-content">
        <div className="footer-col footer-logo-col">
          <div className="footer-logo">
            <img src={logo} alt="SMMART Logo" />
          </div>          <div className="footer-link no-hover">
            Transform your life with SMMART's expert guidance and proven methodologies. Join us on a journey of personal and professional growth.
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Navigation</div>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about/AboutSmmart" className="footer-link">About Us</Link>
          <Link to="/events" className="footer-link">Events</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Resources</div>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/merchandise" className="footer-link">Books</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Products</div>
          <Link to="/products/individual" className="footer-link">Individual Transformation</Link>
          <Link to="/products/entrepreneur" className="footer-link">Entrepreneur Transformation</Link>
          <Link to="/products/enterprise" className="footer-link">Enterprise Transformation</Link>
        </div>
        {/* <div className="footer-col quick-consult">
          <div className="footer-heading" style={{ color: '#FF8C00' }}>Quick Consultation</div>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Enter your message here..." required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </div>
      <div className="footer-bottom">
        <div>
          <span>English</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>© 2025 SMMART. All rights reserved</span>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;