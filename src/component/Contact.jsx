import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';
import Header from './Header';
import SmmartText from './SmmartText';
import { motion } from 'framer-motion';

const Contact = () => {
  const location = useLocation();
  const productInfo = location.state?.product; const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    pincode: '',
    message: '',
    inquirySource: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef(null);

  // Add class to body when component mounts and remove when unmounts
  useEffect(() => {
    document.body.classList.add('contact-page-open');    // Set initial message with product information if available
    if (productInfo) {
      let productMessage = '';
      let inquirySource = '';

      if (productInfo.type === 'book') {
        productMessage = `Hi, I'm interested in purchasing the book "${productInfo.title}" by ${productInfo.author}. Please provide more details about pricing, availability, and shipping options.\n\n`;
        inquirySource = `Book Inquiry: ${productInfo.title} by ${productInfo.author}`;
      } else if (productInfo.type === 'product') {
        productMessage = `Hi, I'm interested in purchasing "${productInfo.title}" (${productInfo.category}) priced at ${productInfo.price}. Please provide more details about availability and shipping options.\n\n`;
        inquirySource = `Product Purchase: ${productInfo.title} - ${productInfo.category} (${productInfo.price})`;
      } else if (productInfo.type === 'enquiry') {
        productMessage = `Hi, I would like to enquire about "${productInfo.title}" (${productInfo.category}) priced at ${productInfo.price}. Please provide more information about this product.\n\n`;
        inquirySource = `Product Enquiry: ${productInfo.title} - ${productInfo.category} (${productInfo.price})`;
      } else if (productInfo.type === 'event') {
        productMessage = `Hi, I'm interested in the event "${productInfo.title}". Please provide more details about registration, timing, and pricing.\n\n`;
        inquirySource = `Event Inquiry: ${productInfo.title}`;
      }

      setFormData(prev => ({
        ...prev,
        message: productMessage,
        inquirySource: inquirySource
      }));
    }

    return () => {
      document.body.classList.remove('contact-page-open');
    };
  }, [productInfo]);

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

      const nameField = document.createElement('input');
      nameField.type = 'hidden';
      nameField.name = 'entry.168932783';
      nameField.value = formData.name;
      form.appendChild(nameField);

      const emailField = document.createElement('input');
      emailField.type = 'hidden';
      emailField.name = 'entry.1338241894';
      emailField.value = formData.email;
      form.appendChild(emailField);

      const contactField = document.createElement('input');
      contactField.type = 'hidden';
      contactField.name = 'entry.123456789'; // Replace with actual entry ID
      contactField.value = formData.contact;
      form.appendChild(contactField);

      const cityField = document.createElement('input');
      cityField.type = 'hidden';
      cityField.name = 'entry.987654321'; // Replace with actual entry ID
      cityField.value = formData.city;
      form.appendChild(cityField); const pincodeField = document.createElement('input');
      pincodeField.type = 'hidden';
      pincodeField.name = 'entry.112233445'; // Replace with actual entry ID
      pincodeField.value = formData.pincode;
      form.appendChild(pincodeField);

      // Add hidden field for product/inquiry source
      const sourceField = document.createElement('input');
      sourceField.type = 'hidden';
      sourceField.name = 'entry.556677889'; // Replace with actual entry ID for source tracking
      sourceField.value = formData.inquirySource || 'Direct Contact';
      form.appendChild(sourceField);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form); setTimeout(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          contact: '',
          city: '',
          pincode: '',
          message: '',
          inquirySource: ''
        });
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };

  const slideUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div {...fadeIn}>
      <Header />
      <iframe
        title="hidden-iframe"
        name="hidden-iframe"
        ref={iframeRef}
        style={{ display: 'none' }}
      />
      {/* Spacer div to prevent header overlap */}
      <div className="header-spacer" style={{ height: '80px', width: '100%' }}></div>
      <div className="contact-content">
        <motion.div className="contact-section" {...slideUp}>
          <motion.h1 {...fadeIn}>Contact Us</motion.h1>
          <motion.p {...slideUp}>We would love to hear from you.</motion.p>
        </motion.div>
        <div className="contact-grid">
          <div className="contact-info">
            <h1>We'd Love to<br />Hear from you.</h1>
            <p className="contact-subtitle">
              Feel free to reach out to us for any inquiries or collaboration opportunities.
            </p>
            <div className="contact-features">              <div className="feature-item">
              <div className="feature-icon">📍</div>
              <div className="feature-text">
                <h3>Visit Us</h3>
                <p>F-wing, 701/702 7th floor Remi Bizcourt, Andheri West, Mumbai - 400 053</p>
                <div style={{ marginTop: '15px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3898094260003!2d72.8371305!3d19.1344068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83b279ee6f7%3A0xc7cd0c4164a81900!2ssmmart%20Training%20and%20Consultancy%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753711580696!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SMMART Office Location"
                  ></iframe>
                </div>
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
                  <p>info@<SmmartText>SMMART</SmmartText>.co.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">            <div className="form-card">
            <h2>Contact Us</h2>

            {productInfo && (
              <div className="product-inquiry-info">
                <div className="inquiry-header">                  <span className="inquiry-icon">
                  {productInfo.type === 'book' ? '📚' :
                    productInfo.type === 'event' ? '🎉' : '🛍️'}
                </span>
                  <h3>
                    {productInfo.type === 'book' ? 'Book Inquiry' :
                      productInfo.type === 'event' ? 'Event Inquiry' :
                        productInfo.type === 'enquiry' ? 'Product Enquiry' : 'Product Purchase'}
                  </h3>
                </div>
                <div className="product-details">
                  <strong>{productInfo.title}</strong>
                  {productInfo.author && (
                    <span className="product-author">by {productInfo.author}</span>
                  )}
                  {productInfo.category && (
                    <span className="product-category-info">Category: {productInfo.category}</span>
                  )}
                  {productInfo.price && (
                    <span className="product-price-info">Price: {productInfo.price}</span>
                  )}                  {productInfo.rating && (
                    <div className="product-rating">
                      {'★'.repeat(Math.floor(productInfo.rating))}{productInfo.rating % 1 ? '½' : ''}
                    </div>
                  )}
                </div>
              </div>
            )}
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
                  </div>                  <div className="form-group">
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

           

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                      required
                    />
                  </div>
                </div>                <div className="form-group">
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
    </motion.div>
  );
};

export default Contact;
