import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <footer className="sigma-footer">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-heading">About</div>
          <Link to="/mission" className="footer-link">Mission</Link>
          <Link to="/programs" className="footer-link">Programs</Link>
          <Link to="/coaching" className="footer-link">Coaching</Link>
          <Link to="/start-now" className="footer-link">Start Now</Link>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Community</div>
          <Link to="/disc-assessment" className="footer-link">DISC Assessment</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
          <Link to="/gifting" className="footer-link">Gifting</Link>
          <Link to="/sitemap" className="footer-link">Sitemap</Link>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Documentary</div>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/free-resources" className="footer-link">Free resources</Link>
          <Link to="/shop" className="footer-link">Shop all</Link>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Customer Support</div>
          <div className="footer-link">
            Support is available 24/7 for all your questions on products, coaching or events.
          </div>
          <Link to="/help" className="footer-link">Need help?</Link>
        </div>
        <div className="footer-col quick-consult">
          <div className="footer-heading" style={{ color: '#ff3c1a' }}>Quick Consultation</div>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Enter your message here..." required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <span>English</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>© 2025. All rights reserved</span>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;