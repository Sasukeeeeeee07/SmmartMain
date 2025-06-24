import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: 'What is smmart Training & Consultancy Services?',
    answer: 'smmart is India’s leading transformation platform for entrepreneurs, offering coaching, training, mentoring, and consulting to help business owners scale with systems, mindset, and leadership'
  },
  {
    question: 'Who is the founder of smmart?',
    answer: 'smmart was founded by Santosh Nair, India’s No.1 Entrepreneur Coach, known for mentoring over 1.5 lakh entrepreneurs across industries and creating execution-driven growth models.'
  },
  {
    question: 'What kind of businesses does smmart work with?',
    answer: ' We work primarily with MSMEs, family-run businesses, and scaling entrepreneurs across sectors like manufacturing, retail, pharma, real estate, and professional services.'
  },
  {
    question: 'What types of programs does smmart offer?',
    answer: 'smmart offers a range of transformation programs including Entrepreneur Gurukul, Auto Pilot Organization, Financial Wellness, Sales Mastery, and Leadership Interventions, designed for entrepreneurs, teams, and CXOs'
  },
  {
    question: 'Are smmart programs theoretical or hands-on?',
    answer: 'Every smmart program is implementation-focused. Participants are given tools, live assignments, and practical frameworks to apply directly in their business between sessions.'
  },
  {
    question: 'Can programs be customized for our organization?',
    answer: 'Yes, we design custom transformation projects tailored to your business needs, including diagnostics, leadership coaching, and strategic execution consulting.'
  },
  {
    question: 'How can I register for a smmart event or program?',
    answer: 'You can register through our official website, WhatsApp links, or directly through our business development team who assist with high-ticket program enrollment.'
  },
  {
    question: 'Are the programs held online or offline?',
    answer: 'smmart offers both formats. Key programs like Entrepreneur Gurukul and APO are primarily offline, while introductory events, webinars, and check-ins are often online.'
  }
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="faq-bg">
      <h2 className="faq-title">
        <span className="faq-title-main">FREQUENTLY</span>
        <span className="faq-title-asked"> ASKED </span>
        <span className="faq-title-main">QUESTIONS</span>
      </h2>
      <div className="faq-grid">
        {faqs.map((faq, idx) => (
          <div
            className={`faq-card${openIdx === idx ? ' active' : ''}`}
            key={idx}
            onClick={() => handleToggle(idx)}
          >
            <div className="faq-question-row">
              <span>{faq.question}</span>
              <span className={`faq-arrow${openIdx === idx ? ' active' : ''}`}>&#9660;</span>
            </div>
            <div className={`faq-answer${openIdx === idx ? ' show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection; 