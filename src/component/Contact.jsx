import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import Header from './Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef(null);

  // Add class to body when component mounts and remove when unmounts
  useEffect(() => {
    document.body.classList.add('contact-page-open');

    return () => {
      document.body.classList.remove('contact-page-open');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSenyrOL-UZJ1OQNW14hgZht48a2eCpj2jA1R9m6KQaBm7IBCw/formResponse';

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = 'hidden-iframe';

      // Correct entry IDs based on your last message
      const nameField = document.createElement('input');
      nameField.type = 'hidden';
      nameField.name = 'entry.168932783';
      nameField.value = formData.name;
      form.appendChild(nameField);

      const subjectField = document.createElement('input');
      subjectField.type = 'hidden';
      subjectField.name = 'entry.2083986652';
      subjectField.value = formData.subject;
      form.appendChild(subjectField);

      const emailField = document.createElement('input');
      emailField.type = 'hidden';
      emailField.name = 'entry.1338241894';
      emailField.value = formData.email;
      form.appendChild(emailField);

      const messageField = document.createElement('input');
      messageField.type = 'hidden';
      messageField.name = 'entry.586536441';
      messageField.value = formData.message;
      form.appendChild(messageField);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-page">
      <Header />
      <iframe
        title="hidden-iframe"
        name="hidden-iframe"
        ref={iframeRef}
        style={{ display: 'none' }}
      />
      {/* Spacer div to prevent header overlap */}
      <div className="header-spacer" style={{ height: '80px', width: '100%' }}></div><div className="contact-content">
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
                  <p>info@SMMART.co.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <h2>Contact Us</h2>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
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
                  <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
