import React from 'react';
import '../assets/Philosophy.css';
import SmmartText from './SmmartText';

const Philosophy = () => {
  return (
    <div className="philosophy-container">
      {/* Top Section */}
      <section className="top-section">
        <div className="content-wrapper">
          <div className="small-heading-container">
            <span className="small-heading">grow. change. create. redefine.</span>
            <div className="arrow-graphic"></div>
          </div>
          
          <h1 className="main-heading">
            <SmmartText>smmart</SmmartText> has taken the responsibility of<br />
            making Change Creators.
          </h1>
          
          <p className="subtext">
            We transform individuals, entrepreneurs, and enterprises into movers & shakers.
          </p>
          
          <p className="highlight-text">
            <SmmartText>smmart</SmmartText> – Your new way of doing business.
          </p>
        </div>
      </section>
      
      {/* Section Separator */}
      <div className="section-separator"></div>
      
      {/* Bottom Section */}
      <section className="bottom-section">
        <div className="left-column">
          <div className="bg-text">consistency.</div>
          <h2 className="column-title">Knowledge</h2>
          <p className="column-subtitle">What we know about the world & ourselves.</p>
        </div>
        
        <div className="right-column">
          <div className="knowledge-diagram">
            <div className="knowledge-button">Knowledge</div>
            <div className="creativity-button">Creativity</div>
            <div className="attitude-button">Attitude</div>
            <div className="strategies-button">Strategies</div>
            <div className="skills-button">Skills</div>
            <div className="habits-button">Habits</div>
            
            {/* Connection lines */}
            <div className="connect-line line-knowledge-creativity"></div>
            <div className="connect-line line-knowledge-attitude"></div>
            <div className="connect-line line-creativity-strategies"></div>
            <div className="connect-line line-attitude-skills"></div>
            <div className="connect-line line-strategies-habits"></div>
            <div className="connect-line line-skills-habits"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy; 