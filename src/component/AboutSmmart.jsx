import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutSmmart.css';

const AboutSmmart = () => {
  const [activeTab, setActiveTab] = useState('VALUES');

  const stats = {
    entrepreneurs: "10,000+",
    programs: "200+",
    experience: "7 Years",
    presence: "PAN India"
  };

  return (
    <div className="about-page">
      <Header />
      <div className="about-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Empowering Entrepreneurs, Enterprises and Individuals.</h1>
            <p>Coaching. Mentoring. Transforming over 2 million lives and counting.</p>
          </div>
        </section>

        {/* Journey Section */}
        <section className="journey-section">
          <div className="journey-content">
            <h2>OUR<br />JOURNEY</h2>
            <div className="journey-text">
              <p>
                Smmart began with a bold vision:<br />
                to ignite the entrepreneurial spirit across India and beyond.<br /><br />
                From humble beginnings, we have evolved into a dynamic force —<br />
                helping businesses scale, innovate, grow, and succeed over time.<br /><br />
                Today, Smmart stands for structured growth, sustainable success,<br />
                and a smarter way to build your dream.
              </p>
            </div>
          </div>
          <div className="journey-image">
            <span>img</span>
          </div>
        </section>

        {/* Quick Stats Section */}
        <div className="stats-section">
          <h2 className="glow-text">QUICK STATS</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>{stats.entrepreneurs}</h3>
              <p>Entrepreneurs Empowered</p>
            </div>
            <div className="stat-item">
              <h3>{stats.programs}</h3>
              <p>Training Programs Conducted</p>
            </div>
            <div className="stat-item">
              <h3>{stats.experience}</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>{stats.presence}</h3>
              <p>Presence</p>
            </div>
          </div>
          <div className="stat-buttons">
            <button className="stat-btn">INSIGHTS</button>
            <button className="stat-btn">CORE</button>
          </div>
          <p className="stat-note">All brands and our operations to build on modern principles</p>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-text">
            <h3>What We Do</h3>
            <ul className="mission-list">
              <li>We believe in continuous efforts to reach to needy ones.</li>
              <li>We transform through knowledge.</li>
              <li>We transform mindset before we transform businesses.</li>
              <li>Empowering others is life.</li>
              <li>Building businesses is in our - It's a way of life.</li>
            </ul>
          </div>
          <div className="mission-image">
            <div className="image-placeholder">img</div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="approach-section">
          <div className="approach-image">
            <div className="image-placeholder">img</div>
          </div>
          <div className="approach-text">
            <p>
              Smmart's approach combines time-tested strategies with real-world experience.
              Our methodology is not just theoretical - it is crafted from years of hands-on 
              experience working with real businesses facing real challenges.
              We don't just teach business growth,
              We teach business mastery.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutSmmart; 