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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'VALUES':
        return (
          <div className="values-content">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Knowledge</h4>
              <p>We transform through knowledge and believe in continuous learning.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h4>Empowerment</h4>
              <p>Empowering others is life and our core mission.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h4>Growth</h4>
              <p>Building businesses is our way of life. We transform mindsets before businesses.</p>
            </div>
          </div>
        );
      case 'VISION':
        return (
          <div className="vision-content">
            <p>To be the catalyst for entrepreneurial success across India and beyond, creating a wave of innovative, sustainable, and impactful businesses.</p>
            <div className="vision-goals">
              <h4>Future Goals</h4>
              <ul>
                <li>Reaching 100,000+ entrepreneurs by 2027</li>
                <li>Expanding our presence to 5 new countries</li>
                <li>Creating an online learning platform for global reach</li>
              </ul>
            </div>
          </div>
        );
      case 'MISSION':
        return (
          <div className="mission-content">
            <p>Our mission is to provide entrepreneurs with the tools, knowledge, and support they need to build thriving businesses that make a positive impact on society.</p>
            <div className="mission-pillars">
              <div className="pillar">
                <h4>Educate</h4>
                <p>Providing practical business knowledge</p>
              </div>
              <div className="pillar">
                <h4>Enable</h4>
                <p>Creating supportive networks and resources</p>
              </div>
              <div className="pillar">
                <h4>Empower</h4>
                <p>Building confidence and capability</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-page">
      <Header />
      <main className="about-container">
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
            <div className="gradient-overlay"></div>
            <div className="dot-pattern"></div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="stats-section">
          <h2 className="glow-text">QUICK STATS</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{stats.entrepreneurs}</div>
              <div className="stat-divider"></div>
              <p>Entrepreneurs Empowered</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.programs}</div>
              <div className="stat-divider"></div>
              <p>Training Programs Conducted</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.experience}</div>
              <div className="stat-divider"></div>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.presence}</div>
              <div className="stat-divider"></div>
              <p>Presence</p>
            </div>
          </div>
          <div className="stat-buttons">
            <button className="stat-btn gradient-btn">INSIGHTS</button>
            <button className="stat-btn gradient-btn">CORE</button>
          </div>
          <p className="stat-note">All brands and our operations to build on modern principles</p>
        </section>

        {/* Mission & Vision Section */}
        <section className="mission-vision-section">
          <h2 className="section-title">OUR MISSION<br />&amp; VISION</h2>

          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === 'VALUES' ? 'active' : ''}`}
              onClick={() => handleTabChange('VALUES')}
            >
              VALUES
            </button>
            <button
              className={`tab-btn ${activeTab === 'MISSION' ? 'active' : ''}`}
              onClick={() => handleTabChange('MISSION')}
            >
              MISSION
            </button>
            <button
              className={`tab-btn ${activeTab === 'VISION' ? 'active' : ''}`}
              onClick={() => handleTabChange('VISION')}
            >
              VISION
            </button>
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="what-we-do-section">
          <div className="what-we-do-content">
            <h3>What We Do</h3>
            <ul className="what-we-do-list">
              <li>
                <span className="list-marker">01</span>
                We believe in continuous efforts to reach to needy ones.
              </li>
              <li>
                <span className="list-marker">02</span>
                We transform through knowledge.
              </li>
              <li>
                <span className="list-marker">03</span>
                We transform mindset before we transform businesses.
              </li>
              <li>
                <span className="list-marker">04</span>
                Empowering others is life.
              </li>
              <li>
                <span className="list-marker">05</span>
                Building businesses is in our - It's a way of life.
              </li>
            </ul>
          </div>
          <div className="what-we-do-image">
            <div className="image-frame">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="approach-section">
          <div className="approach-image">
            <div className="image-frame">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">📊</div>
                </div>
              </div>
            </div>
          </div>
          <div className="approach-content">
            <h3>Our Approach</h3>
            <p>
              Smmart's approach combines time-tested strategies with real-world experience.
              Our methodology is not just theoretical - it is crafted from years of hands-on
              experience working with real businesses facing real challenges.
            </p>
            <p className="highlight-text">
              We don't just teach business growth,<br />
              We teach business mastery.
            </p>
          </div>
        </section>

        {/* Future Goals Section */}
        <section className="future-goals">
          <h2 className="section-title">FUTURE GOALS</h2>
          <div className="goals-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>National Expansion</h4>
                <p>Establish presence in all major Indian cities</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h4>Global Reach</h4>
                <p>Begin international operations in 3 countries</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2027</div>
              <div className="timeline-content">
                <h4>Digital Transformation</h4>
                <p>Launch comprehensive online learning platform</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutSmmart; 