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
          >            <motion.div
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
              >                <motion.div
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
                </motion.div>                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Demanding Excellence</h4>
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
              >                <motion.div
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
                </motion.div>                <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Challenging Status Quo</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0' }}>
                  We continuously question conventional wisdom and push boundaries to create breakthrough solutions.
                </p>
              </motion.div>


            </motion.div>
          </motion.div>
        ); case 'VISION':
        return (<motion.div
          className="vision-content"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >            <motion.div
          className="vision-statement"
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
            <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Vision 2035</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0' }}>
              To become a <strong style={{ color: '#FF8C00' }}>global transformation leader by 2035</strong> by creating <strong style={{ color: '#FF8C00' }}>100 million success stories</strong> and awakening the fearless entrepreneur in every individual.
            </p>
          </motion.div>

          <motion.div
            className="vision-goals"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h4 style={{ color: '#FF8C00', marginBottom: '1rem' }}>We Envision A World Where:</h4>
            <motion.div
              className="vision-pillars"
              variants={staggeredChildren} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem',
                justifyItems: 'center'
              }}
            >
              <motion.div
                className="vision-pillar"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >                  <h5 style={{ color: '#FF8C00', marginBottom: '0.5rem' }}>Self-Led Organizations</h5>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0' }}>Built through autonomy and leadership excellence</p>
              </motion.div>

              <motion.div
                className="vision-pillar"
                variants={slideUp}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
              >                  <h5 style={{ color: '#FF8C00', marginBottom: '0.5rem' }}>Scalable Systems</h5>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0' }}>Designed for sustainable growth and expansion</p>
              </motion.div>

              <motion.div

              >
              </motion.div>
            </motion.div>              <motion.div
              className="transformation-approach"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 140, 0, 0.1)'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h5 style={{ color: '#FF8C00', marginBottom: '1rem' }}>Our Transformation Promise</h5>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0' }}>
                We deliver guaranteed success through a powerful blend of <strong>standardization</strong>, <strong>customization</strong>, and <strong>personalization</strong> — transforming lives through real, measurable, and sustained action, not theory.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        );
      case 'MISSION':
        return (<motion.div
          className="mission-content"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >              <motion.div
          className="mission-statement"
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
            <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Mission</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0' }}>
              At <SmmartText>smmart</SmmartText> Training & Consultancy Services, our mission is to <strong style={{ color: '#FF8C00' }}>awaken the fearless entrepreneur</strong> in every individual and empower them to build <strong style={{ color: '#FF8C00' }}>self-led, scalable, and system-driven organizations</strong>. We operate with a high-performance culture grounded in discipline, accountability, and action — where transformation is driven not by theory, but by <strong style={{ color: '#FF8C00' }}>implementation</strong>.
            </p>
          </motion.div>

          <motion.div
            className="mission-pillars"
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
              className="pillar"
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
              <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Awaken</h4>
              <p>Igniting the fearless entrepreneur within through rigorous insights and intense facilitation</p>
            </motion.div>

            <motion.div
              className="pillar"
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
              <h4 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Empower</h4>
              <p>Building self-led, scalable organizations through 100% implementation guarantee</p>
            </motion.div>

            <motion.div>

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
            <img src={whatWeDo} alt="What We Do" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', display: 'block', margin: '0 auto' }} />
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
            <img src={ourApproach} alt="Our Approach" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', display: 'block', margin: '0 auto' }} />
          </motion.div>
          <motion.div
            className="approach-content"
            variants={slideUp}
          >
            <motion.h3 style={{ color: '#FF8C00' }}>Our Approach</motion.h3>
            <motion.p whileHover={{ scale: 1.02 }}>
              <span style={{ color: '#FF8C00' }}><SmmartText>smmart</SmmartText></span>'s approach combines time-tested strategies with real-world experience.
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
        </motion.section>        {/* Future Goals Section */}

      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default AboutSmmart;