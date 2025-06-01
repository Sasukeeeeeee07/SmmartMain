import React, { useState } from 'react';
import './Contact.css';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h1>We'd Love to<br />Hear from you.</h1>
            <p className="contact-subtitle">
              Feel free to reach out to us for any inquiries or collaboration opportunities.
            </p>
            
            <div className="contact-features">
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <div className="feature-text">
                  <h3>Visit Us</h3>
                  <p>F-wing, 701/702 7th floor Remi Bizcourt, Andheri West, Mumbai - 400 053</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📞</div>
                <div className="feature-text">
                  <h3>Call Us</h3>
                  <p>+91 84510 51500<br />+91 84510 51531</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">✉️</div>
                <div className="feature-text">
                  <h3>Email Us</h3>
                  <p>info@smmart.co.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact; 