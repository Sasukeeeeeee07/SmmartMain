import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutSmmart.css';
import { motion } from 'framer-motion';

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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggeredChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'VALUES':
        return (
          <motion.div
            className="values-content"
            variants={staggeredChildren}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="value-card" variants={slideUp} whileHover={{ scale: 1.05 }}>
              <motion.div
                className="value-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ backgroundColor: '#FF8C00', color: '#fff' }}
              >💡</motion.div>
              <h4 style={{ color: '#FF8C00' }}>Knowledge</h4>
              <p>We transform through knowledge and believe in continuous learning.</p>
            </motion.div>
            <motion.div className="value-card" variants={slideUp} whileHover={{ scale: 1.05 }}>
              <motion.div
                className="value-icon"
                whileHover={{ scale: 1.2, rotate: -5 }}
                style={{ backgroundColor: '#FF8C00', color: '#fff' }}
              >🌱</motion.div>
              <h4 style={{ color: '#FF8C00' }}>Empowerment</h4>
              <p>Empowering others is life and our core mission.</p>
            </motion.div>
            <motion.div className="value-card" variants={slideUp} whileHover={{ scale: 1.05 }}>
              <motion.div
                className="value-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ backgroundColor: '#FF8C00', color: '#fff' }}
              >🚀</motion.div>
              <h4 style={{ color: '#FF8C00' }}>Growth</h4>
              <p>Building businesses is our way of life. We transform mindsets before businesses.</p>
            </motion.div>
          </motion.div>
        );
      case 'VISION':
        return (
          <motion.div
            className="vision-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.p whileHover={{ scale: 1.02 }}>To be the catalyst for entrepreneurial success across India and beyond, creating a wave of innovative, sustainable, and impactful businesses.</motion.p>
            <motion.div
              className="vision-goals"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <h4 style={{ color: '#FF8C00' }}>Future Goals</h4>
              <ul>
                <motion.li whileHover={{ x: 10, color: '#FF8C00' }}>Reaching 100,000+ entrepreneurs by 2027</motion.li>
                <motion.li whileHover={{ x: 10, color: '#FF8C00' }}>Expanding our presence to 5 new countries</motion.li>
                <motion.li whileHover={{ x: 10, color: '#FF8C00' }}>Creating an online learning platform for global reach</motion.li>
              </ul>
            </motion.div>
          </motion.div>
        );
      case 'MISSION':
        return (
          <motion.div
            className="mission-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.p whileHover={{ scale: 1.02 }}>Our mission is to provide entrepreneurs with the tools, knowledge, and support they need to build thriving businesses that make a positive impact on society.</motion.p>
            <motion.div
              className="mission-pillars"
              variants={staggeredChildren}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="pillar" variants={slideUp} whileHover={{ y: -5 }}>
                <h4 style={{ color: '#FF8C00' }}>Educate</h4>
                <p>Providing practical business knowledge</p>
              </motion.div>
              <motion.div className="pillar" variants={slideUp} whileHover={{ y: -5 }}>
                <h4 style={{ color: '#FF8C00' }}>Enable</h4>
                <p>Creating supportive networks and resources</p>
              </motion.div>
              <motion.div className="pillar" variants={slideUp} whileHover={{ y: -5 }}>
                <h4 style={{ color: '#FF8C00' }}>Empower</h4>
                <p>Building confidence and capability</p>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)' }}
    >
      <Header />
      <motion.main
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Hero Section */}
        <motion.section
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            padding: '2rem 1rem',
            textAlign: 'center'
          }}
        >
          <motion.div
            className="hero-content"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              maxWidth: '90%',
              margin: '0 auto'
            }}
          >
            <motion.h1
              style={{
                color: '#FF8C00',
                fontSize: '2rem',
                lineHeight: '1.5'
              }}
              whileHover={{ scale: 1.03 }}
            >
              Empowering Entrepreneurs, Enterprises and Individuals.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#333'
              }}
            >
              Coaching. Mentoring. Transforming over 2 million lives and counting.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Journey Section */}
        <motion.section
          className="journey-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="journey-content"
            variants={slideUp}
          >
            <motion.h2
              style={{ color: '#FF8C00' }}
              whileHover={{ scale: 1.05 }}
            >
              OUR<br />JOURNEY
            </motion.h2>
            <motion.div className="journey-text" variants={fadeIn}>
              <p>
                <span style={{ color: '#FF8C00' }}>smmart</span> began with a bold vision:<br />
                to ignite the entrepreneurial spirit across India and beyond.<br /><br />
                From humble beginnings, we have evolved into a dynamic force —<br />
                helping businesses scale, innovate, grow, and succeed over time.<br /><br />
                Today, <span style={{ color: '#FF8C00' }}>smmart</span> stands for structured growth, sustainable success,<br />
                and a smarter way to build your dream.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="journey-image"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="gradient-overlay" style={{ background: 'linear-gradient(45deg, #87CEEB, #FF8C00)' }}></div>
            <div className="dot-pattern"></div>
          </motion.div>
        </motion.section>

        {/* Quick Stats Section */}
        <motion.section
          className="stats-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggeredChildren}
        >
          <motion.h2
            className="glow-text"
            style={{ color: '#FF8C00' }}
            whileHover={{ scale: 1.05, textShadow: '0 0 8px rgba(255,140,0,0.7)' }}
          >
            QUICK STATS
          </motion.h2>
          <motion.div className="stats-grid" variants={staggeredChildren}>
            <motion.div className="stat-item" variants={statItem} whileHover={{ y: -10 }}>
              <motion.div
                className="stat-number"
                style={{ color: '#FF8C00' }}
                whileHover={{ scale: 1.1 }}
              >
                {stats.entrepreneurs}
              </motion.div>
              <div className="stat-divider" style={{ background: '#FF8C00' }}></div>
              <p>Entrepreneurs Empowered</p>
            </motion.div>
            <motion.div className="stat-item" variants={statItem} whileHover={{ y: -10 }}>
              <motion.div
                className="stat-number"
                style={{ color: '#FF8C00' }}
                whileHover={{ scale: 1.1 }}
              >
                {stats.programs}
              </motion.div>
              <div className="stat-divider" style={{ background: '#FF8C00' }}></div>
              <p>Training Programs Conducted</p>
            </motion.div>
            <motion.div className="stat-item" variants={statItem} whileHover={{ y: -10 }}>
              <motion.div
                className="stat-number"
                style={{ color: '#FF8C00' }}
                whileHover={{ scale: 1.1 }}
              >
                {stats.experience}
              </motion.div>
              <div className="stat-divider" style={{ background: '#FF8C00' }}></div>
              <p>Years of Experience</p>
            </motion.div>
            <motion.div className="stat-item" variants={statItem} whileHover={{ y: -10 }}>
              <motion.div
                className="stat-number"
                style={{ color: '#FF8C00' }}
                whileHover={{ scale: 1.1 }}
              >
                {stats.presence}
              </motion.div>
              <div className="stat-divider" style={{ background: '#FF8C00' }}></div>
              <p>Presence</p>
            </motion.div>
          </motion.div>
          <motion.div className="stat-buttons" variants={fadeIn}>
            <motion.button
              className="stat-btn gradient-btn"
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C00' }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #FF8C00, #FFA500)' }}
            >
              INSIGHTS
            </motion.button>
            <motion.button
              className="stat-btn gradient-btn"
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C00' }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #FF8C00, #FFA500)' }}
            >
              CORE
            </motion.button>
          </motion.div>
          <motion.p
            className="stat-note"
            variants={fadeIn}
          >
            All brands and our operations to build on modern principles
          </motion.p>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          className="mission-vision-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2
            className="section-title"
            style={{ color: '#FF8C00' }}
            whileHover={{ scale: 1.05 }}
          >
            OUR MISSION<br />&amp; VISION
          </motion.h2>

          <motion.div className="tab-navigation">
            <motion.button
              className={`tab-btn ${activeTab === 'VALUES' ? 'active' : ''}`}
              onClick={() => handleTabChange('VALUES')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'VALUES' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'VALUES' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              VALUES
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'MISSION' ? 'active' : ''}`}
              onClick={() => handleTabChange('MISSION')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'MISSION' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'MISSION' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              MISSION
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'VISION' ? 'active' : ''}`}
              onClick={() => handleTabChange('VISION')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'VISION' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'VISION' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              VISION
            </motion.button>
          </motion.div>

          <motion.div
            className="tab-content"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderTabContent()}
          </motion.div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section
          className="what-we-do-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="what-we-do-content"
            variants={slideUp}
          >
            <motion.h3 style={{ color: '#FF8C00' }}>What We Do</motion.h3>
            <motion.ul
              className="what-we-do-list"
              variants={staggeredChildren}
            >
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>01</span>
                We believe in continuous efforts to reach to needy ones.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>02</span>
                We transform through knowledge.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>03</span>
                We transform mindset before we transform businesses.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>04</span>
                Empowering others is life.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>05</span>
                Building businesses is in our - It's a way of life.
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            className="what-we-do-image"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="image-frame" style={{ borderColor: '#FF8C00' }}>
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <motion.div
                    className="placeholder-icon"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    style={{ color: '#FF8C00' }}
                  >🚀</motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Approach Section */}
        <motion.section
          className="approach-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="approach-image"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="image-frame" style={{ borderColor: '#FF8C00' }}>
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <motion.div
                    className="placeholder-icon"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    style={{ color: '#FF8C00' }}
                  >📊</motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="approach-content"
            variants={slideUp}
          >
            <motion.h3 style={{ color: '#FF8C00' }}>Our Approach</motion.h3>
            <motion.p whileHover={{ scale: 1.02 }}>
              <span style={{ color: '#FF8C00' }}>smmart</span>'s approach combines time-tested strategies with real-world experience.
              Our methodology is not just theoretical - it is crafted from years of hands-on
              experience working with real businesses facing real challenges.
            </motion.p>
            <motion.p
              className="highlight-text"
              whileHover={{ scale: 1.05 }}
              style={{ color: '#FF8C00' }}
            >
              We don't just teach business growth,<br />
              We teach business mastery.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Future Goals Section */}
        <motion.section
          className="future-goals"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2
            className="section-title"
            style={{ color: '#FF8C00' }}
            whileHover={{ scale: 1.05 }}
          >
            FUTURE GOALS
          </motion.h2>
          <motion.div
            className="goals-timeline"
            variants={staggeredChildren}
          >
            <motion.div
              className="timeline-item"
              variants={slideUp}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="timeline-year"
                style={{
                  backgroundColor: '#FF8C00',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                  display: 'inline-block'
                }}
                whileHover={{ scale: 1.1 }}
              >
                2025
              </motion.div>
              <div className="timeline-content">
                <h4 style={{ color: '#FF8C00' }}>National Expansion</h4>
                <p>Establish presence in all major Indian cities</p>
              </div>
            </motion.div>
            <motion.div
              className="timeline-item"
              variants={slideUp}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="timeline-year"
                style={{
                  backgroundColor: '#FF8C00',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                  display: 'inline-block'
                }}
                whileHover={{ scale: 1.1 }}
              >
                2026
              </motion.div>
              <div className="timeline-content">
                <h4 style={{ color: '#FF8C00' }}>Global Reach</h4>
                <p>Begin international operations in 3 countries</p>
              </div>
            </motion.div>
            <motion.div
              className="timeline-item"
              variants={slideUp}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="timeline-year"
                style={{
                  backgroundColor: '#FF8C00',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                  display: 'inline-block'
                }}
                whileHover={{ scale: 1.1 }}
              >
                2027
              </motion.div>
              <div className="timeline-content">
                <h4 style={{ color: '#FF8C00' }}>Digital Transformation</h4>
                <p>Launch comprehensive online learning platform</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default AboutSmmart;