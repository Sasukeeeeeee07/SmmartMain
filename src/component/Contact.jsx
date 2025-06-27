import React, { useState, useRef } from 'react';
import './Contact.css';
import Header from './Header';
// import Footer from './Footer';

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
      // Create a hidden form and submit it through an iframe to bypass CORS issues
      // const formId = '1sZmkN5MA4gLk2WnlhTStRb6kBPvhVL0a3GxzgCfiE2M';
      const formUrl = `https://docs.google.com/forms/d/1sZmkN5MA4gLk2WnlhTStRb6kBPvhVL0a3GxzgCfiE2M/formResponse;
`;

      // Create a hidden form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = 'hidden-iframe'; // Target the iframe

      // Add form fields
      const nameField = document.createElement('input');
      nameField.type = 'hidden';
      nameField.name = 'entry.2005620554';
      nameField.value = formData.name;
      form.appendChild(nameField);

      const emailField = document.createElement('input');
      emailField.type = 'hidden';
      emailField.name = 'entry.1045781291';
      emailField.value = formData.email;
      form.appendChild(emailField);

      const subjectField = document.createElement('input');
      subjectField.type = 'hidden';
      subjectField.name = 'entry.1065046570';
      subjectField.value = formData.subject;
      form.appendChild(subjectField);

      const messageField = document.createElement('input');
      messageField.type = 'hidden';
      messageField.name = 'entry.839337160';
      messageField.value = formData.message;
      form.appendChild(messageField);

      // Append form to the document body
      document.body.appendChild(form);

      // Submit the form
      form.submit();

      // Remove the form from the document
      document.body.removeChild(form);

      console.log('Form submitted:', formData);

      // Set a timeout to show success message 
      // (since we can't detect when iframe finishes loading with CORS restrictions)
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

  const handleIframeSubmit = (e) => {
    e.preventDefault();
    const iframe = iframeRef.current;
    const form = iframe.contentDocument || iframe.contentWindow.document;

    // Google Form entry IDs mapping
    const formEntries = {
      'entry.2005620554': formData.name,
      'entry.1045781291': formData.email,
      'entry.1065046570': formData.subject,
      'entry.839337160': formData.message
    };

    // Create form data for submission
    const formData2Send = new URLSearchParams();
    for (const [key, value] of Object.entries(formEntries)) {
      formData2Send.append(key, value);
    }

    setIsSubmitting(true);

    // Submit the form using the iframe
    form.querySelector('form').submit();
  };
  return (
    <div className="contact-page">
      <Header />
      {/* Hidden iframe for form submission */}
      <iframe
        title="hidden-frame"
        name="hidden-iframe"
        ref={iframeRef}
        style={{ display: 'none' }}
      />
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
              </div>              <div className="feature-item">
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
                  </div>                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        name="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={() => {
          if (submitted) {
            setSubmitted(false);
          }
        }}
      ></iframe>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;