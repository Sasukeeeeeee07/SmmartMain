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
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 1.5rem auto'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Core Purpose</h3>
              <motion.h4 style={{ color: '#FF8C00', fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                "To Transform Lives"
              </motion.h4>
            </motion.div>

            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <motion.div
                className="purpose-how"
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                variants={slideUp}
              >
                <h5 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.2rem' }}>HOW</h5>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0' }}>
                  By providing <strong style={{ color: '#FF8C00' }}>path-breaking solutions</strong> to develop radical shifts in the mindset of all those who come in touch with us.
                </p>
              </motion.div>

              <motion.div
                className="purpose-why"
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)',
                  textAlign: 'center'
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                variants={slideUp}
              >
                <h5 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.2rem' }}>WHY</h5>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0' }}>
                  So that they can <strong style={{ color: '#FF8C00' }}>scale greater heights</strong> in this dynamic and ever-changing world.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ); case 'CORE_VALUES':
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
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem auto'
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '0.8rem' }}>Our Core Values</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0' }}>
                The fundamental principles that guide our transformation journey
              </p>
            </motion.div>            <motion.div
              className="values-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 1rem'
              }}
            >
              {[
                { title: "Demand Excellence", icon: "◆", description: "We set the highest standards and never compromise on quality in everything we deliver." },
                { title: "Challenge the Status Quo", icon: "⟐", description: "We continuously question conventional wisdom and push boundaries for breakthrough solutions." },
                { title: "Speak from Meaningful Experience", icon: "●", description: "Our insights and guidance come from real-world experience and proven results." },
                { title: "Quest to Learn", icon: "◇", description: "We maintain an insatiable curiosity and commitment to continuous learning and growth." },
                { title: "Responsive & Result Oriented", icon: "▲", description: "We act swiftly and focus relentlessly on delivering measurable outcomes." },
                { title: "Entrepreneurial Spirit & No Entitlement Attitude", icon: "◈", description: "We embody the entrepreneurial mindset with ownership, accountability, and no sense of entitlement." }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  variants={slideUp}
                  whileHover={{ scale: 1.02, y: -5 }} style={{
                    background: 'rgba(255, 140, 0, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 140, 0, 0.2)',
                    textAlign: 'center',
                    height: '100%',
                    minHeight: '220px',
                    width: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <motion.div
                    className="value-icon"
                    whileHover={{ scale: 1.1, rotate: 5 }} style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      color: '#FF8C00',
                      fontWeight: 'bold'
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 style={{
                    color: '#FF8C00',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                    lineHeight: '1.3',
                    wordWrap: 'break-word',
                    flex: '0 0 auto'
                  }}>
                    {value.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    marginBottom: '0',
                    color: '#333',
                    flex: '1 1 auto'
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ); case 'BHAG':
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
                border: '1px solid rgba(255, 140, 0, 0.2)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Big Hairy Audacious Goal (BHAG)</h3>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#333', marginBottom: '0', fontWeight: 'bold' }}>
                To create <strong style={{ color: '#FF8C00' }}>100 million success stories</strong> and become a <strong style={{ color: '#FF8C00' }}>Global Transformation Leader by 2035</strong>
              </p>
            </motion.div>

            <motion.div
              className="bhag-metrics"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem',
                maxWidth: '800px',
                margin: '0 auto 1.5rem auto',
                padding: '0 1rem'
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
                <h4 style={{ color: '#FF8C00', marginBottom: '0.5rem', fontSize: '2.5rem' }}>100M</h4>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0', fontWeight: '600' }}>Success Stories to Create</p>
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
                <h4 style={{ color: '#FF8C00', marginBottom: '0.5rem', fontSize: '2.5rem' }}>2035</h4>                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0', fontWeight: '600' }}>Target Achievement Year</p>
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
                <h4 style={{ color: '#FF8C00', marginBottom: '0.5rem', fontSize: '1.8rem' }}>Global</h4>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0', fontWeight: '600' }}>Transformation Leadership</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ); case 'VIVID_DESCRIPTION':
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
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Vivid Description by 2035</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '0', fontWeight: '600' }}>
                <SmmartText>smmart</SmmartText> will be the <strong style={{ color: '#FF8C00' }}>most sought-after Transformation Company globally</strong>
              </p>
            </motion.div>            <motion.div
              className="vivid-details"
              variants={staggeredChildren}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 1rem'
              }}
            >
              {[
                {
                  title: "Culture & Team",
                  icon: "◈",
                  points: [
                    "Members will exhibit camaraderie, high energy, entrepreneurial spirit",
                    "Happy & Great Place to Work",
                    "Every member will work in their Distinct Forte"
                  ]
                },
                {
                  title: "Organization DNA",
                  icon: "⟐",
                  points: [
                    "Belief-driven Parivaar treating transformation as religion",
                    "Learning Organization with 'Learning and Transformation' as core skill",
                    "Every employee groomed to become an Entrepreneur within smmart"
                  ]
                },
                {
                  title: "Service Excellence",
                  icon: "▲",
                  points: [
                    "Dedicated to Transformation and Growth",
                    "Via Standardization, Customization, and Personalization",
                    "SNOA part of academic curriculums in top schools and colleges"
                  ]
                },
                {
                  title: "Digital Dominance",
                  icon: "◇",
                  points: [
                    "Dominate internet presence and social media",
                    "Leading digital transformation platform",
                    "Global online reach and influence"
                  ]
                },
                {
                  title: "Social Impact",
                  icon: "●",
                  points: [
                    "smmart Foundation supporting underprivileged women and children",
                    "Empowerment via entrepreneurship",
                    "Creating sustainable social change"
                  ]
                },
                {
                  title: "Infrastructure",
                  icon: "◆",
                  points: [
                    "100-acre Development Centre (SDC)",
                    "Research and value-driven solutions",
                    "World-class facility for transformation"
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="vivid-pillar"
                  variants={slideUp}
                  whileHover={{ y: -5, scale: 1.02 }} style={{
                    background: 'rgba(255, 140, 0, 0.15)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '2px solid rgba(255, 140, 0, 0.3)',
                    height: '100%',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '2.5rem',
                      marginBottom: '0.5rem',
                      display: 'block',
                      color: '#FF8C00',
                      fontWeight: 'bold'
                    }}>{item.icon}</span>
                    <h4 style={{
                      color: '#FF8C00',
                      marginBottom: '1rem',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>{item.title}</h4>
                  </div>
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        marginBottom: '0.8rem',
                        paddingLeft: '1rem',
                        position: 'relative',
                        color: '#333',
                        fontWeight: '500'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#FF8C00',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }}>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ); case 'BRAND_PROMISE':
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
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 0, 0.3)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Brand Promise</h3>
              <motion.h4 style={{
                color: '#FF8C00',
                fontSize: '2rem',
                marginBottom: '1.5rem',
                fontWeight: 'bold'
              }}>
                100% Implementation
              </motion.h4>
            </motion.div>

            <motion.div
              className="promise-methods"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2rem'
              }}
            >
              <motion.div
                className="promise-through"
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)'
                }}
                whileHover={{ scale: 1.02 }}
                variants={slideUp}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.2rem' }}>Through:</h4>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                  <li style={{
                    fontSize: '1rem',
                    color: '#333',
                    lineHeight: '1.6',
                    marginBottom: '0.8rem',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: '#FF8C00',
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}>•</span>
                    <strong>Rigorous Insights</strong>
                  </li>
                  <li style={{
                    fontSize: '1rem',
                    color: '#333',
                    lineHeight: '1.6',
                    marginBottom: '0.8rem',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: '#FF8C00',
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}>•</span>
                    <strong>Intense Facilitation for Guaranteed Success Stories</strong>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="promise-means"
                style={{
                  background: 'rgba(255, 140, 0, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 140, 0, 0.2)'
                }}
                whileHover={{ scale: 1.02 }}
                variants={slideUp}
              >
                <h4 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.2rem' }}>By means of:</h4>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                  {['Standardization', 'Customization', 'Personalization'].map((item, index) => (
                    <li key={index} style={{
                      fontSize: '1rem',
                      color: '#333',
                      lineHeight: '1.6',
                      marginBottom: '0.8rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: '#FF8C00',
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                      }}>•</span>
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ul>
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
              variants={slideUp}
            >
              <h5 style={{ color: '#FF8C00', marginBottom: '1rem' }}>Our Commitment</h5>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0' }}>
                When you choose <SmmartText>smmart</SmmartText>, you're getting a <strong style={{ color: '#FF8C00' }}>transformation partner</strong> committed to your success with accountability, discipline, and unwavering support until you achieve your goals through our proven methodology.
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
          </motion.div>        </motion.section>        {/* How We Do Section */}
        <motion.section
          className="how-we-do-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          style={{
            padding: '2rem 1rem',
            margin: '1rem auto',
            maxWidth: '1200px'
          }}
        >
          <motion.h2
            className="section-title"
            style={{
              color: '#FF8C00',
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
            whileHover={{ scale: 1.03 }}
          >
            HOW WE DO
          </motion.h2>

          <motion.div
            className="how-we-do-content"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '2rem',
              alignItems: 'center'
            }}
            variants={fadeIn}
          >
            {/* Left side - Simple Image */}
            <motion.div
              className="how-we-do-image"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={ourApproach}
                alt="smmart Training Methodology"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  display: 'block',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
            </motion.div>

            {/* Right side - Compact Content */}
            <motion.div
              className="how-we-do-text"
              variants={staggeredChildren}
              initial="hidden"
              animate="visible"
            >
              <motion.h3
                style={{
                  color: '#FF8C00',
                  marginBottom: '1rem',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}
                variants={slideUp}
              >
                <SmmartText>smmart</SmmartText> TRAINING METHODOLOGY
              </motion.h3>              <motion.div
                className="methodology-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}
                variants={staggeredChildren}
              >                {[
                { title: "CASE STUDIES", icon: "fas fa-chart-bar" },
                { title: "GAMES", icon: "fas fa-gamepad" },
                { title: "ROLE PLAYS", icon: "fas fa-theater-masks" },
                { title: "GROUP PRESENTATIONS", icon: "fas fa-users" },
                { title: "DRILLS", icon: "fas fa-bolt" },
                { title: "INSTRUMENTS", icon: "fas fa-clipboard-list" },
                { title: "ARTICLES", icon: "fas fa-file-alt" },
                { title: "SIMULATIONS", icon: "fas fa-sync-alt" },
                { title: "BOOK REVIEWS", icon: "fas fa-book-open" },
                { title: "FIELD TRAINING", icon: "fas fa-bullseye" },
                { title: "COUNSELLING", icon: "fas fa-comments" },
                { title: "TESTS & QUIZ", icon: "fas fa-clipboard-check" },
                { title: "AUDIOS", icon: "fas fa-volume-up" },
                { title: "OUTBOUND", icon: "fas fa-mountain" },
                { title: "VIDEOS", icon: "fas fa-video" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="methodology-item"
                  variants={slideUp}
                  whileHover={{
                    scale: 1.1,
                    y: -3
                  }}
                  style={{
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >                    <motion.div
                  style={{
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    color: '#1976D2'
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                    <i className={item.icon}></i>
                  </motion.div>
                  <motion.p
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: '#333',
                      lineHeight: '1.3',
                      margin: '0'
                    }}
                  >
                    {item.title}
                  </motion.p>
                </motion.div>
              ))}
              </motion.div>


            </motion.div>
          </motion.div>          {/* Responsive design for mobile */}
          <style jsx>{`
            @media (max-width: 768px) {
              .how-we-do-content {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
              }
              
              .methodology-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) !important;
                gap: 0.8rem !important;
              }
              
              .section-title {
                font-size: 2rem !important;
              }
            }
            
            @media (max-width: 480px) {
              .methodology-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
              
              .methodology-item p {
                font-size: 0.7rem !important;
              }
              
              .methodology-item div {
                font-size: 1.5rem !important;
              }
            }
          `}</style>
        </motion.section>          {/* Mobile responsive styles for Core Values */}
        <style jsx>{`
            @media (max-width: 1024px) {
              .values-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 0.8rem !important;
                padding: 0 0.5rem !important;
                max-width: 900px !important;
              }
              
              .vivid-details {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 0.8rem !important;
                padding: 0 0.5rem !important;
                max-width: 900px !important;
              }
              
              .bhag-metrics {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
                gap: 0.8rem !important;
                padding: 0 0.5rem !important;
                max-width: 600px !important;
              }
            }
            
            @media (max-width: 768px) {
              .values-grid {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
                padding: 0 1rem !important;
                max-width: 100% !important;
              }
              
              .vivid-details {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
                padding: 0 1rem !important;
                max-width: 100% !important;
              }
              
              .bhag-metrics {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
                padding: 0 1rem !important;
                max-width: 100% !important;
              }
            }
            
            @media (max-width: 480px) {
              .values-grid {
                padding: 0 0.5rem !important;
              }
              
              .vivid-details {
                padding: 0 0.5rem !important;
              }
              
              .bhag-metrics {
                padding: 0 0.5rem !important;
              }
              
              .value-card {
                min-height: 180px !important;
                padding: 1.2rem !important;
              }
              
              .vivid-pillar {
                padding: 1.2rem !important;
              }
              
              .value-icon {
                font-size: 2.5rem !important;
              }
              
              .value-card h4 {
                font-size: 1rem !important;
              }
              
              .value-card p {
                font-size: 0.85rem !important;
              }
              
              .vivid-pillar h4 {
                font-size: 1rem !important;
              }
              
              .vivid-pillar li {
                font-size: 0.85rem !important;
              }
            }
          `}</style>
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default AboutSmmart;