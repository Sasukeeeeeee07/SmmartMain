import React from 'react';
import { Link } from 'react-router-dom';
import SmmartText from './SmmartText';
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
            Transform your life with <SmmartText>SMMART</SmmartText>'s expert guidance and proven methodologies. Join us on a journey of personal and professional growth.
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
        </div>        <div className="footer-col">
          <div className="footer-heading">Products</div>
          <Link to="/products/individual" className="footer-link">Individual Transformation</Link>
          <Link to="/products/entrepreneur" className="footer-link">Entrepreneur Transformation</Link>
          <Link to="/products/enterprise" className="footer-link">Enterprise Transformation</Link>
        </div>

      </div><div className="footer-bottom">
        <div>
          <span>English</span>
          <a href="/privacypolicy.html" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a>
          <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="footer-link">Terms and Conditions</a>
          <span>© 2025 <SmmartText>SMMART</SmmartText>. All rights reserved</span>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/SMMART" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/smmartParivaar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/smmart_parivaar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/smm-art-training-&-consultancy-services-pvt--ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;