import React from 'react';
import '../assets/KnowledgeSection.css';

const KnowledgeSection = () => {
  return (
    <section className="knowledge-section">
      {/* Left Side - Knowledge Card */}
      <div className="knowledge-card">
        <div className="bg-text">consistency.</div>
        <div className="card-content">
          <h2>Knowledge</h2>
          <p>What we know about the world & ourselves.</p>
        </div>
      </div>
      
      {/* Right Side - Network Diagram */}
      <div className="network-diagram">
        <div className="network-container">
          {/* Network Buttons */}
          <button className="network-button knowledge-btn">Knowledge</button>
          <button className="network-button creativity-btn">Creativity</button>
          <button className="network-button attitude-btn">Attitude</button>
          <button className="network-button strategies-btn">Strategies</button>
          <button className="network-button skills-btn">Skills</button>
          <button className="network-button habits-btn">Habits</button>
          
          {/* Connection Lines */}
          <div className="connector knowledge-creativity"></div>
          <div className="connector knowledge-attitude"></div>
          <div className="connector creativity-strategies"></div>
          <div className="connector attitude-skills"></div>
          <div className="connector strategies-habits"></div>
          <div className="connector skills-habits"></div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection; 