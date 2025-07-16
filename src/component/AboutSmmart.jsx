import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutSmmart.css';
import { motion } from 'framer-motion';
import journeyImage from './images/01_3-1.jpg'; // Add this import at the top with other imports
import journeyImageCake from './images/01_1.jpg';
import journeyImage2 from './images/01-1.jpg';

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
                style={{ backgroundImage: 'url(/images/knowledge-icon.png)', backgroundSize: 'cover' }}
              ></motion.div>
              <h4 style={{ color: '#FF8C00' }}>Knowledge</h4>
              <p>We transform through knowledge and believe in continuous learning.</p>
            </motion.div>
            <motion.div className="value-card" variants={slideUp} whileHover={{ scale: 1.05 }}>
              <motion.div
                className="value-icon"
                whileHover={{ scale: 1.2, rotate: -5 }}
                style={{ backgroundImage: 'url(/images/empowerment-icon.png)', backgroundSize: 'cover' }}
              ></motion.div>
              <h4 style={{ color: '#FF8C00' }}>Empowerment</h4>
              <p>Empowering others is life and our core mission.</p>
            </motion.div>
            <motion.div className="value-card" variants={slideUp} whileHover={{ scale: 1.05 }}>
              <motion.div
                className="value-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ backgroundImage: 'url(/images/growth-icon.png)', backgroundSize: 'cover' }}
              ></motion.div>
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
            <motion.p whileHover={{ scale: 1.02 }}>
              At smmart Training & Consultancy Services, our mission is to awaken the fearless entrepreneur in every individual and empower them to build self-led, scalable, and system-driven organizations. We operate with a high-performance culture grounded in discipline, accountability, and action — where transformation is driven not by theory, but by implementation.
            </motion.p>
            <motion.div
              className="mission-pillars"
              variants={staggeredChildren}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="pillar" variants={slideUp} whileHover={{ y: -5 }}>
                <h4 style={{ color: '#FF8C00' }}>Awaken</h4>
                <p>Igniting the fearless entrepreneur within</p>
              </motion.div>
              <motion.div className="pillar" variants={slideUp} whileHover={{ y: -5 }}>
                <h4 style={{ color: '#FF8C00' }}>Empower</h4>
                <p>Building self-led, scalable organizations</p>
              </motion.div>
              <motion.div className="pillar" variants={slideUp} whileHover={{ y: -5 }}>
                <h4 style={{ color: '#FF8C00' }}>Transform</h4>
                <p>Implementation-driven transformation</p>
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
          >          <motion.h1
            className="hero-title"
            style={{
              color: '#FF8C00',
              fontSize: '2.5rem',
              lineHeight: '1.5',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative',
              zIndex: 10
            }}
            whileHover={{ scale: 1.03 }}
          >
              Leadership That Think smmart
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
              <h3 style={{ color: '#FF8C00', marginBottom: '0.5em' }}>From a Garden Seed to a Nationwide Movement</h3>
              <p style={{ marginBottom: '1.2em' }}>
                From humble beginnings in a garden on 10th Feb 2000, smmart has grown into India’s most trusted transformation ecosystem for entrepreneurs. Here's how our fearless journey unfolded:
              </p>
              <div style={{ marginBottom: '1.2em' }}>
                <strong style={{ color: '#1976D2' }}>2000–2009: The Foundation Years</strong>
                <ul style={{ margin: '0.5em 0 1em 1.2em' }}>
                  <li>Birth of smmart and entry into the MSME sector.</li>
                  <li>First major failures shaped our resilience.</li>
                  <li>Launched T.I.G.E.R., AMYC, and expanded into MLM and Kerala.</li>
                  <li>Surat operations began to take off.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '1.2em' }}>
                <strong style={{ color: '#1976D2' }}>2011–2016: Building the Base</strong>
                <ul style={{ margin: '0.5em 0 1em 1.2em' }}>
                  <li>National programs like Entrepreneur Gurukul gained momentum.</li>
                  <li>International training broadcasted in 10 languages across 12 countries.</li>
                  <li>smmart’s first leadership structure took shape.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '1.2em' }}>
                <strong style={{ color: '#1976D2' }}>2020–2022: Reinvention Era</strong>
                <ul style={{ margin: '0.5em 0 1em 1.2em' }}>
                  <li>Pivoted online during the pandemic.</li>
                  <li>Launched 3 online entrepreneur products.</li>
                  <li>Collaborated to expand into Insurance & Consulting.</li>
                  <li>Rolled out Result Multiplier Part I.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '1.2em' }}>
                <strong style={{ color: '#1976D2' }}>2023: Expansion & Handover</strong>
                <ul style={{ margin: '0.5em 0 1em 1.2em' }}>
                  <li>Released second book Why Do Entrepreneurs Miss the Bus?</li>
                  <li>Empowered younger leaders by handing over verticals.</li>
                  <li>Restarted Wisdom Knights.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '1.2em' }}>
                <strong style={{ color: '#1976D2' }}>2024: Multipliers in Motion</strong>
                <ul style={{ margin: '0.5em 0 1em 1.2em' }}>
                  <li>Entered Goa & Surat aggressively.</li>
                  <li>Launched Opportunity Multiplier and Advanced Gurukul.</li>
                  <li>Collaborated with new partners in Ahmedabad & Kerala.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '1.2em' }}>
                <strong style={{ color: '#1976D2' }}>2025: Vision Forward</strong>
                <ul style={{ margin: '0.5em 0 1em 1.2em' }}>
                  <li>Rolled out a new Vision.</li>
                  <li>Launched smmart Financial Azadi with Dipak Dhabalia.</li>
                  <li>Conducted the Goa workshop Why Entrepreneurs Fail to Scale?</li>
                </ul>
              </div>
              <p style={{ fontWeight: 600, color: '#FF8C00', marginTop: '1.5em' }}>
                25 years. Thousands of lives transformed. One fearless mission.<br />
                We continue to move forward — bigger, bolder, and more committed to building self-led, system-driven organizations across India.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="journey-images-row" style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            <img src={journeyImage} alt="Smmart Event" style={{ width: '400px', maxWidth: '100%', borderRadius: '18px', boxShadow: '0 8px 32px rgba(25, 118, 210, 0.12)' }} />
            <img src={journeyImageCake} alt="Smmart Cake" style={{ width: '400px', maxWidth: '100%', borderRadius: '18px', boxShadow: '0 8px 32px rgba(25, 118, 210, 0.12)' }} />
            <img src={journeyImage2} alt="Smmart Event" style={{ width: '400px', maxWidth: '100%', borderRadius: '18px', boxShadow: '0 8px 32px rgba(25, 118, 210, 0.12)' }} />
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
            {/* <motion.button
              className="stat-btn gradient-btn"
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C00' }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #FF8C00, #FFA500)' }}
            >
              INSIGHTS
            </motion.button> */}
            {/* <motion.button
              className="stat-btn gradient-btn"
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C00' }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #FF8C00, #FFA500)' }}
            >
              CORE
            </motion.button> */}
          </motion.div>
          {/* <motion.p
            className="stat-note"
            variants={fadeIn}
          >
            All brands and our operations to build on modern principles
          </motion.p> */}
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