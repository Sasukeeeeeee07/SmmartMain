import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: 'What is smmart?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.'
  },
  {
    question: 'How can smmart help my business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.'
  },
  {
    question: 'Is smmart suitable for Startups?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.'
  },
  {
    question: 'What services does smmart provide?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.'
  },
  {
    question: 'How do I get started with smmart?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.'
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