import React from 'react';
import './SigmaFooter.css';

function SigmaFooter() {
  return (
    <footer className="sigma-footer">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-heading">About</div>
          <div className="footer-link">Events</div>
          <div className="footer-link">Programs</div>
          <div className="footer-link">Coaching</div>
          <div className="footer-link">Start Now</div>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Community</div>
          <div className="footer-link">DISC Assessment</div>
          <div className="footer-link">Careers</div>
          <div className="footer-link">Gifting</div>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Documentary</div>
          <div className="footer-link">Podcast</div>
          <div className="footer-link">Blog</div>
          <div className="footer-link">Free resources</div>
          <div className="footer-link">Shop all</div>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Customer Support</div>
          <div className="footer-link" style={{ color: '#fff', opacity: 0.7, fontWeight: 500, fontSize: 14 }}>
            Contact Customer Support for questions on your products, coaching or events.
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-heading" style={{ color: '#ff3c1a' }}>Contact Us</div>
          <div className="footer-link" style={{ color: '#3fa1ff', fontSize: 14 }}>
            F - wing, 701/702 7th floor Remi Bizcourt, Opp Veera Desai Road, Opposite Supreme Chambers, Andheri West, Mumbai - 400 053.<br />
            Mumbai | Surat | Rajkot
          </div>
          <div className="footer-link" style={{ color: '#3fa1ff', fontSize: 14 }}>
            +91 84510 51500<br />
            +91 84510 51531
          </div>
          <div className="footer-link" style={{ color: '#3fa1ff', fontSize: 14 }}>
            info@smmart.co.in
          </div>
        </div>
        <div className="footer-col quick-consult">
          <div className="footer-heading" style={{ color: '#ff3c1a' }}>Quick Consultation</div>
          <form className="footer-form">
            <input type="text" placeholder="Your Name . . ." />
            <input type="email" placeholder="Your Email . . ." />
            <input type="text" placeholder="Phone . . ." />
            <textarea placeholder="Enter your message here . . ." />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <span>English</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>2025. All rights reserved</span>
        </div>
        <div className="footer-socials">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
}

export default SigmaFooter; 