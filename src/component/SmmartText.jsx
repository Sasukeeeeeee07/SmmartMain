import React from 'react';

// React component to render text with smmart formatting
const SmmartText = ({ children, className = "" }) => {
  if (typeof children !== 'string') return children;
  
  const parts = children.split(/(smmart)/gi);
  return parts.map((part, index) => {
    if (part.toLowerCase() === 'smm𝖆rt') {
      return (
        <span key={index} className={`smmart-text ${className}`}>
          <span className="smm">smm</span>
          <span className="art">𝖆rt</span>
        </span>
      );
    }
    return part;
  });
};

export default SmmartText; 