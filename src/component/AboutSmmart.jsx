import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SmmartText from './SmmartText';
import './AboutSmmart.css';
import { motion } from 'framer-motion';
import journeyImage from './images/01_3-1.jpg'; // Add this import at the top with other imports
import journeyImageCake from './images/01_1.jpg';
import journeyImage2 from './images/03-2.jpg';
import whatWeDo from './images/04-2.jpg';
import ourApproach from './images/06-1.jpg';

const AboutSmmart = () => {
  const [activeTab, setActiveTab] = useState('CORE_PURPOSE');

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
      case 'CORE_PURPOSE':
        return (
          <motion.div
            className="core-purpose-content"
            variants={staggeredChildren}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="core-purpose-intro"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 1.5rem auto'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Our Core Purpose</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0' }}>
                To <strong style={{ color: '#FF8C00' }}>awaken the fearless entrepreneur</strong> in every individual and empower them to build <strong style={{ color: '#FF8C00' }}>self-led, scalable, and system-driven organizations</strong>.
              </p>
            </motion.div>

            <motion.div
              className="purpose-details"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 140, 0, 0.1)'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h5 style={{ color: '#FF8C00', marginBottom: '1rem' }}>Why We Exist</h5>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0' }}>
                We operate with a high-performance culture grounded in discipline, accountability, and action — where transformation is driven not by theory, but by <strong style={{ color: '#FF8C00' }}>implementation</strong>. Our purpose is to create a world where every individual discovers their entrepreneurial potential and builds sustainable success.
              </p>
            </motion.div>
          </motion.div>
        );

      case 'CORE_VALUES':
        return (
          <motion.div
            className="values-content"
            variants={staggeredChildren}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="values-intro"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 1.5rem auto'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Our Core Values</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0' }}>
                Guided by our core values that drive transformation through action, not theory
              </p>
            </motion.div>

            <motion.div
              className="values-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                maxWidth: '1200px',
                margin: '0 auto',
                justifyItems: 'center'
              }}
            >
              <motion.div
                className="value-card"
                variants={slideUp}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center',
                  height: '100%'
                }}
              >
                <motion.div
                  className="value-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  E
                </motion.div>
                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Demanding Excellence</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0' }}>
                  We set the highest standards and never compromise on quality in everything we deliver.
                </p>
              </motion.div>

              <motion.div
                className="value-card"
                variants={slideUp}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center',
                  height: '100%'
                }}
              >
                <motion.div
                  className="value-icon"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  C
                </motion.div>
                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Challenging Status Quo</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0' }}>
                  We continuously question conventional wisdom and push boundaries to create breakthrough solutions.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        );

      case 'BHAG':
        return (
          <motion.div
            className="bhag-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <motion.div
              className="bhag-statement"
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)'
              }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Big Hairy Audacious Goal (BHAG)</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333', marginBottom: '0', fontWeight: 'bold' }}>
                To become a <strong style={{ color: '#FF8C00' }}>global transformation leader by 2035</strong> by creating <strong style={{ color: '#FF8C00' }}>100 million success stories</strong> and awakening the fearless entrepreneur in every individual worldwide.
              </p>
            </motion.div>            <motion.div
              className="bhag-metrics"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <motion.div
                className="bhag-metric"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '0.5rem', fontSize: '2rem' }}>100M</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0' }}>Success Stories Created</p>
              </motion.div>

              <motion.div
                className="bhag-metric"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '0.5rem', fontSize: '2rem' }}>2035</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0' }}>Target Achievement Year</p>
              </motion.div>
            </motion.div>
          </motion.div>
        );

      case 'VIVID_DESCRIPTION':
        return (
          <motion.div
            className="vivid-description-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <motion.div
              className="vivid-description-intro"
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)'
              }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Vivid Description</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0' }}>
                We envision a world where every street corner has a <strong style={{ color: '#FF8C00' }}>fearless entrepreneur</strong> who has been transformed by <SmmartText>smmart</SmmartText> methodologies, creating ripples of positive change across communities, nations, and continents.
              </p>
            </motion.div>            <motion.div
              className="vivid-pillars"
              variants={staggeredChildren}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}
            >
              <motion.div
                className="vivid-pillar"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Self-Led Organizations</h4>
                <p>Every business operates with autonomy, leadership excellence, and systematic processes that drive sustainable growth.</p>
              </motion.div>

              <motion.div
                className="vivid-pillar"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Global Impact</h4>
                <p>Our transformation methodologies are implemented across cultures, creating a universal language of entrepreneurial success.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        );

      case 'BRAND_PROMISE':
        return (
          <motion.div
            className="brand-promise-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <motion.div
              className="brand-promise-statement"
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Brand Promise</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333', marginBottom: '0', fontWeight: 'bold' }}>
                We guarantee <strong style={{ color: '#FF8C00' }}>100% implementation success</strong> through our proven blend of <strong style={{ color: '#FF8C00' }}>standardization</strong>, <strong style={{ color: '#FF8C00' }}>customization</strong>, and <strong style={{ color: '#FF8C00' }}>personalization</strong> — transforming lives through measurable action, not theory.
              </p>
            </motion.div>            <motion.div
              className="promise-pillars"
              variants={staggeredChildren}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <motion.div
                className="promise-pillar"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Guaranteed Results</h4>
                <p>100% implementation guarantee with measurable outcomes and sustained transformation.</p>
              </motion.div>

              <motion.div
                className="promise-pillar"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Action-Driven</h4>
                <p>Real transformation through implementation, not theoretical knowledge or empty promises.</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="promise-commitment"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 140, 0, 0.1)',
                textAlign: 'center'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h5 style={{ color: '#FF8C00', marginBottom: '1rem' }}>Our Commitment to You</h5>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0' }}>
                When you choose <SmmartText>smmart</SmmartText>, you're not just getting training — you're getting a <strong style={{ color: '#FF8C00' }}>transformation partner</strong> committed to your success with accountability, discipline, and unwavering support until you achieve your entrepreneurial goals.
              </p>
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
          >                      <motion.h1
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
              Leadership That Thinks <SmmartText>smmart</SmmartText>
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
            <div className="vertical-timeline">
              <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-year">2000–2009: The Foundation Years</h3>
                  <ul>
                    <li>Birth of <SmmartText>smmart</SmmartText> and entry into the MSME sector.</li>
                    <li>First major failures shaped our resilience.</li>
                    <li>Launched T.I.G.E.R., AMYC, and expanded into MLM and Kerala.</li>
                    <li>Surat operations began to take off.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-year">2011–2016: Building the Base</h3>
                  <ul>
                    <li>National programs like Entrepreneur Gurukul gained momentum.</li>
                    <li>International training broadcasted in 10 languages across 12 countries.</li>
                    <li>smmart’s first leadership structure took shape.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-year">2020–2022: Reinvention Era</h3>
                  <ul>
                    <li>Pivoted online during the pandemic.</li>
                    <li>Launched 3 online entrepreneur products.</li>
                    <li>Collaborated to expand into Insurance & Consulting.</li>
                    <li>Rolled out Result Multiplier Part I.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-year">2023: Expansion & Handover</h3>
                  <ul>
                    <li>Released second book Why Do Entrepreneurs Miss the Bus?</li>
                    <li>Empowered younger leaders by handing over verticals.</li>
                    <li>Restarted Wisdom Knights.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-year">2024: Multipliers in Motion</h3>
                  <ul>
                    <li>Entered Goa & Surat aggressively.</li>
                    <li>Launched Opportunity Multiplier and Advanced Gurukul.</li>
                    <li>Collaborated with new partners in Ahmedabad & Kerala.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-year">2025: Vision Forward</h3>
                  <ul>
                    <li>Rolled out a new Vision.</li>
                    <li>Launched <SmmartText>smmart</SmmartText> Financial Azadi with Dipak Dhabalia.</li>
                    <li>Conducted the Goa workshop Why Entrepreneurs Fail to Scale?</li>
                  </ul>
                </div>
              </div>
            </div>
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
        </motion.section>        {/* Core Ideology Section */}
        <motion.section
          className="core-ideology-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >          <motion.h2
          className="section-title"
          style={{
            color: '#FF8C00',
            fontSize: '3.5rem',
            fontWeight: '800',
            textAlign: 'center',
            textShadow: '0 4px 20px rgba(255, 140, 0, 0.3)',
            letterSpacing: '2px',
            marginBottom: '3rem',
            position: 'relative'
          }}
          whileHover={{
            scale: 1.05,
            textShadow: '0 6px 30px rgba(255, 140, 0, 0.5)',
            color: '#FFA500'
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.span
              style={{
                position: 'relative',
                display: 'inline-block'
              }}
              whileHover={{ rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.6 }}
            >
              OUR CORE
            </motion.span>
            <br />
            <motion.span
              style={{
                position: 'relative',
                display: 'inline-block'
              }}
              whileHover={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              IDEOLOGY
            </motion.span>

            {/* Decorative elements */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #FF8C00, transparent)',
                borderRadius: '2px'
              }}
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.div
              style={{
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #FFA500, transparent)',
                borderRadius: '2px'
              }}
              initial={{ width: 0 }}
              animate={{ width: '150px' }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.h2>          <motion.div className="tab-navigation">
            <motion.button
              className={`tab-btn ${activeTab === 'CORE_PURPOSE' ? 'active' : ''}`}
              onClick={() => handleTabChange('CORE_PURPOSE')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'CORE_PURPOSE' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'CORE_PURPOSE' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              CORE PURPOSE
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'CORE_VALUES' ? 'active' : ''}`}
              onClick={() => handleTabChange('CORE_VALUES')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'CORE_VALUES' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'CORE_VALUES' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              CORE VALUES
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'BHAG' ? 'active' : ''}`}
              onClick={() => handleTabChange('BHAG')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'BHAG' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'BHAG' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              BHAG
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'VIVID_DESCRIPTION' ? 'active' : ''}`}
              onClick={() => handleTabChange('VIVID_DESCRIPTION')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'VIVID_DESCRIPTION' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'VIVID_DESCRIPTION' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              VIVID DESCRIPTION
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'BRAND_PROMISE' ? 'active' : ''}`}
              onClick={() => handleTabChange('BRAND_PROMISE')}
              whileHover={{ scale: 1.05, backgroundColor: activeTab === 'BRAND_PROMISE' ? '#FF8C00' : 'rgba(255, 140, 0, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: activeTab === 'BRAND_PROMISE' ? '#FF8C00' : 'rgba(255, 255, 255, 0.2)' }}
            >
              BRAND PROMISE
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
            <motion.h3 style={{ color: '#FF8C00' }}>What We Do</motion.h3>            <motion.ul
              className="what-we-do-list"
              variants={staggeredChildren}
            >
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>01</span>
                Lead Magnets: Free masterclasses, business assessments, and strategy sessions to awaken entrepreneurial awareness.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>02</span>
                Tripwires: Foundation workshops, blueprint sessions, and mindset transformation bootcamps for readiness.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>03</span>
                Core Products: Entrepreneur Gurukul, Result Multiplier, and system-driven transformation programs.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>04</span>
                Profit Maximizers: Wisdom Knights mastermind, executive coaching, and elite leadership summits.
              </motion.li>
              <motion.li variants={slideUp} whileHover={{ x: 10 }}>
                <span className="list-marker" style={{ color: '#FF8C00' }}>05</span>
                Implementation Guarantee: Every event delivers measurable results through action, not theory.
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            className="what-we-do-image"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={whatWeDo} alt="What We Do" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', display: 'block', margin: '0 auto' }} />
          </motion.div>
        </motion.section>        {/* How We Do Section */}
        <motion.section
          className="approach-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          style={{
            padding: 'clamp(1.5rem, 4vw, 3rem) clamp(0.5rem, 2vw, 1rem)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            margin: '2rem auto',
            maxWidth: '1200px',
            border: '1px solid rgba(255, 140, 0, 0.1)'
          }}
        >
          {/* Section Title */}
          <motion.h3 
            style={{ 
              color: '#FF8C00', 
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', 
              fontWeight: 'bold',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              textAlign: 'center',
              textShadow: '0 2px 10px rgba(255, 140, 0, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            How We Do
          </motion.h3>

          <motion.div
            className="how-we-do-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: 'clamp(1rem, 3vw, 2rem)',
              alignItems: 'start'
            }}
          >
            {/* Mobile-first layout - Image and description */}
            <motion.div
              className="approach-left"
              variants={slideUp}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                order: 1,
                marginBottom: 'clamp(1rem, 3vw, 2rem)'
              }}
            >
              <motion.div
                className="approach-image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(255, 140, 0, 0.2)',
                  marginBottom: '1.5rem'
                }}
              >
                <img 
                  src={ourApproach} 
                  alt="How We Do" 
                  style={{ 
                    width: '100%', 
                    maxWidth: 'clamp(200px, 50vw, 320px)', 
                    borderRadius: '15px'
                  }} 
                />
              </motion.div>

              <motion.p 
                style={{ 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                  lineHeight: '1.6', 
                  color: '#555',
                  maxWidth: '100%',
                  margin: '0 auto',
                  padding: '0 1rem'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <span style={{ color: '#FF8C00', fontWeight: 'bold' }}><SmmartText>smmart</SmmartText></span> Training Methodology combines diverse learning approaches for maximum engagement and implementation success.
              </motion.p>
            </motion.div>

            {/* Methodology content */}
            <motion.div
              className="approach-content"
              variants={slideUp}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: 'clamp(1rem, 3vw, 2rem)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 140, 0, 0.15)',
                order: 2
              }}
            >              <motion.div
                className="methodology-grid"
                variants={staggeredChildren}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                  gap: 'clamp(1rem, 2.5vw, 1.5rem)'
                }}
              >                {/* Interactive Learning */}
                <motion.div 
                  variants={slideUp}
                  className="methodology-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 140, 0, 0.05))',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 140, 0, 0.2)'
                  }}
                >
                  <h5 style={{ 
                    color: '#FF8C00', 
                    marginBottom: '1rem', 
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#FF8C00',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Interactive Learning
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['Case Studies', 'Role Plays', 'Participative Drills', 'Games'].map((item, index) => (
                      <motion.span 
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ 
                          fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', 
                          color: '#444', 
                          fontWeight: '500',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#FF8C00',
                          fontWeight: 'bold'
                        }}>•</span>
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Content & Resources */}
                <motion.div 
                  variants={slideUp}
                  className="methodology-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 140, 0, 0.03))',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 140, 0, 0.15)'
                  }}
                >
                  <h5 style={{ 
                    color: '#FF8C00', 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#FF8C00',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Content & Resources
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['Articles', 'Book Reviews', 'Audios', 'Videos'].map((item, index) => (
                      <motion.span 
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        style={{ 
                          fontSize: '0.9rem', 
                          color: '#444', 
                          fontWeight: '500',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#FF8C00',
                          fontWeight: 'bold'
                        }}>•</span>
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Collaborative Learning */}
                <motion.div 
                  variants={slideUp}
                  className="methodology-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06), rgba(255, 140, 0, 0.02))',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 140, 0, 0.12)'
                  }}
                >
                  <h5 style={{ 
                    color: '#FF8C00', 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#FF8C00',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Collaborative Learning
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['Syndicate Discussions', 'Group Presentations', 'Self Administered Tools', 'Personal Counselling'].map((item, index) => (
                      <motion.span 
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        style={{ 
                          fontSize: '0.9rem', 
                          color: '#444', 
                          fontWeight: '500',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#FF8C00',
                          fontWeight: 'bold'
                        }}>•</span>
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Practical Application */}
                <motion.div 
                  variants={slideUp}
                  className="methodology-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.04), rgba(255, 140, 0, 0.01))',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 140, 0, 0.1)'
                  }}
                >
                  <h5 style={{ 
                    color: '#FF8C00', 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#FF8C00',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Practical Application
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['Simulation Exercises', 'On-the-Field Training', 'Written Tests & Quiz', 'Outbound Training'].map((item, index) => (
                      <motion.span 
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        style={{ 
                          fontSize: '0.9rem', 
                          color: '#444', 
                          fontWeight: '500',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#FF8C00',
                          fontWeight: 'bold'
                        }}>•</span>
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom tagline */}
              <motion.div
                style={{
                  marginTop: '2rem',
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'linear-gradient(90deg, rgba(255, 140, 0, 0.1), rgba(255, 140, 0, 0.2), rgba(255, 140, 0, 0.1))',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 140, 0, 0.3)'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.p
                  style={{ 
                    color: '#FF8C00', 
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
                    fontWeight: 'bold', 
                    marginBottom: '0',
                    lineHeight: '1.4'
                  }}
                >
                  Transforming Business Through Proven Methodologies
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>{/* Future Goals Section */}

      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default AboutSmmart;