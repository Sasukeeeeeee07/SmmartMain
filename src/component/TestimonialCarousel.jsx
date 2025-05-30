import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestimonialCarousel.css';

const testimonials = [
  {
    name: 'Nick Johnson',
    role: 'Marketing Director, TechCorp',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    avatar: '', // Placeholder, can use a gray circle
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Product Manager, DesignHub',
    text: '"Exceptional customer support and cutting-edge features. We\'ve been able to deliver projects faster and with higher quality."',
    avatar: '',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Startup Ventures',
    text: '"A game changer for our business. The intuitive interface and robust tools are unmatched."',
    avatar: '',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const navigate = useNavigate();

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="testimonial-bg">
      <div className="testimonial-header">
        <h2>
          <span className="blue">What Our </span>
          <span className="orange">Clients Say</span>
        </h2>
        <p className="testimonial-subtitle">Trusted by businesses worldwide</p>
      </div>
      <div className="testimonial-carousel">
        <button className="arrow left" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
        <div className="testimonial-cards">
          {testimonials.map((t, idx) => {
            let position = '';
            if (idx === current) position = 'center';
            else if (idx === (current - 1 + total) % total) position = 'left';
            else if (idx === (current + 1) % total) position = 'right';
            else position = 'hidden';
            return (
              <div key={idx} className={`testimonial-card ${position}`}>
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-client">
                  <div className="avatar-placeholder"></div>
                  <div>
                    <div className="client-name">{t.name}</div>
                    <div className="client-role">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="arrow right" onClick={next} aria-label="Next testimonial">&#8594;</button>
      </div>
      <div className="testimonial-footer">
        <button 
          className="view-feedback-btn"
          onClick={() => navigate('/feedback')}
        >
          View All Customer Feedback
          <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 