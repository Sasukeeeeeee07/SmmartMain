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
        </div>
        <div className="footer-col">
          <div className="footer-heading">Products</div>
          <Link to="/products/individual" className="footer-link">Individual Transformation</Link>
          <Link to="/products/entrepreneur" className="footer-link">Entrepreneur Transformation</Link>
          <Link to="/products/enterprise" className="footer-link">Enterprise Transformation</Link>
        </div>        <div className="footer-col">
          <div className="footer-heading">Visit Us</div>
          <div className="footer-link no-hover">
            <i className="fas fa-map-marker-alt" style={{ color: '#FF8C00', marginRight: '8px' }}></i>
            Our Location
          </div>          <a
            href="https://www.google.com/maps/place/smmart+Training+and+Consultancy+Services+Pvt.+Ltd./@19.1344068,72.8371305,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c83b279ee6f7:0xc7cd0c4164a81900!8m2!3d19.1344068!4d72.8397054!16s%2Fg%2F11c5z8z8z8"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{ color: '#FF8C00' }}
          >
            <i className="fas fa-external-link-alt" style={{ marginRight: '5px' }}></i>
            View on Google Maps
          </a>
        </div>
      </div>      <div className="footer-bottom">
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