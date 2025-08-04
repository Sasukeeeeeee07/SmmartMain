import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import './IndividualTransformation.css';

const IndividualTransformation = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProgramInquiry = (programTitle, programType, description, duration) => {
    const programInfo = {
      type: 'program',
      title: programTitle,
      category: programType,
      description: description,
      duration: duration
    };

    navigate('/contact', {
      state: { product: programInfo }
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="individual-transformation-page"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Header />

      <motion.div
        className="content-wrapper"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Hero Section */}
        <motion.section className="hero-section" variants={sectionVariants}>
          <div className="hero-content">
            <h1>TRANSFORMATION PROGRAMS</h1>
            <p className="hero-subtitle">Comprehensive solutions for personal and professional excellence</p>
          </div>
        </motion.section>

        {/* Transformation Navigation Tabs */}
        <motion.section className="transformation-tabs" variants={sectionVariants}>
          <div className="tab-buttons">
            <motion.button
              className={`tab-btn ${activeTab === 'individual' ? 'active' : ''}`}
              onClick={() => handleTabChange('individual')}
              variants={buttonVariants}
              whileHover="hover"
            >
              Individual
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'entrepreneur' ? 'active' : ''}`}
              onClick={() => handleTabChange('entrepreneur')}
              variants={buttonVariants}
              whileHover="hover"
            >
              Entrepreneur
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'enterprise' ? 'active' : ''}`}
              onClick={() => handleTabChange('enterprise')}
              variants={buttonVariants}
              whileHover="hover"
            >
              Enterprise
            </motion.button>
          </div>
        </motion.section>

        {/* Individual Transformation Content */}
        {activeTab === 'individual' && (
          <>            {/* Introduction Section */}
            <motion.section className="intro-section glass-card" variants={sectionVariants}>
              <div className="section-header">
                <h2><span className="highlight">Individual Transformation</span></h2>
                <div className="divider"></div>
              </div>

              <p className="intro-text">
                Our Individual Transformation programs are designed to elevate your personal and professional capabilities,
                helping you maximize your potential in every aspect of life. We believe that true growth begins from within,
                which is why our comprehensive approach focuses on developing both mindset and practical skills.
              </p>

              <div className="key-points">
                <motion.div className="key-point" variants={cardVariants}>
                  <div className="point-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Mindset Shift</h3>
                  <p>Reshape limiting beliefs and develop a growth-oriented perspective</p>
                </motion.div>

                <motion.div className="key-point" variants={cardVariants}>
                  <div className="point-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3>Goal Clarity</h3>
                  <p>Define clear objectives and create actionable pathways to success</p>
                </motion.div>

                <motion.div className="key-point" variants={cardVariants}>
                  <div className="point-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Productivity</h3>
                  <p>Optimize performance and maximize efficiency in all endeavors</p>
                </motion.div>
              </div>
            </motion.section>

            {/* Programs Section */}
            <motion.section className="programs-section" variants={sectionVariants}>
              <div className="section-header centered">
                <h2>Individual Programs</h2>
                <div className="divider center"></div>
                <p className="section-subtitle">Comprehensive solutions designed for lasting personal change</p>
              </div>              <div className="program-grid">
                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>Client Pep Talks</h3>
                    <span className="program-duration">Live 1:1</span>
                  </div>
                  <p>In-person motivational sessions to spark clarity, action, and energy for immediate transformation.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Client Pep Talks',
                      'Individual Transformation',
                      'In-person motivational sessions to spark clarity, action, and energy for immediate transformation.',
                      'Live 1:1'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>

                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>Wisdom Knights</h3>
                    <span className="program-duration">Community Meetups</span>
                  </div>
                  <p>Quarterly alumni gatherings for inspiration, knowledge exchange, and bonding.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Wisdom Knights',
                      'Individual Transformation',
                      'Quarterly alumni gatherings for inspiration, knowledge exchange, and bonding.',
                      'Community Meetups'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>

                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>SNOA Video Library</h3>
                    <span className="program-duration">Self-Paced</span>
                  </div>
                  <p>Comprehensive video collection covering mindset, productivity, and personal development strategies.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'SNOA Video Library',
                      'Individual Transformation',
                      'Comprehensive video collection covering mindset, productivity, and personal development strategies.',
                      'Self-Paced'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>

                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>Workshops</h3>
                    <span className="program-duration">Hands on Learning</span>
                  </div>
                  <p>Practical training on leadership, vasooli, and key life skills via online and offline formats.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Workshops',
                      'Individual Transformation',
                      'Practical training on leadership, vasooli, and key life skills via online and offline formats.',
                      'Hands-on Learning'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>

                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>APO</h3>
                    <span className="program-duration">Self-Paced</span>
                  </div>
                  <p>Auto Pilot Organization: Learn how to build systems and processes to run your business independently.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'APO – Auto Pilot Organization',
                      'Individual Transformation',
                      'Auto Pilot Organization: Learn how to build systems and processes to run your business independently.',
                      'Self-Paced'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>

                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>AEO</h3>
                    <span className="program-duration">Strategy-Based</span>
                  </div>
                  <p>Auto Exponential Organization: Learn how to create scalable growth engines in life and business.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'AEO – Auto Exponential Organization',
                      'Individual Transformation',
                      'Auto Exponential Organization: Learn how to create scalable growth engines in life and business.',
                      'Strategy-Based'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>

                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>ATO</h3>
                    <span className="program-duration">Diagnostic + Learning</span>
                  </div>
                  <p>Auto Transforming Organization: Build systems for ongoing transformation, adaptability, and mindset evolution.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'ATO – Auto Transforming Organization',
                      'Individual Transformation',
                      'Auto Transforming Organization: Build systems for ongoing transformation, adaptability, and mindset evolution.',
                      'Diagnostic + Learning'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>

                <motion.div className="program-card glass-card" variants={cardVariants}>
                  <div className="program-card-header">
                    <h3>Train the Trainer</h3>
                    <span className="program-duration">Hybrid</span>
                  </div>
                  <p>Become a certified Smmart Trainer. Build facilitation and delivery expertise.</p>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Train the Trainer',
                      'Individual Transformation',
                      'Become a certified Smmart Trainer. Build facilitation and delivery expertise.',
                      'Hybrid'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.section>

            {/* Audience Section */}
            <section className="audience-section glass-card">
              <div className="section-header">
                <h2>Who Can Benefit</h2>
                <div className="divider"></div>
                <p className="section-subtitle">Our individual programs serve diverse participants</p>
              </div>

              <div className="audience-grid">
                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Students</h3>
                  <p>Building foundations for future success with clarity and purpose</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3>Professionals</h3>
                  <p>Accelerating career growth and developing leadership capabilities</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3>Homemakers</h3>
                  <p>Finding purpose and creating value in personal and family contexts</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Entrepreneur Transformation Content */}
        {activeTab === 'entrepreneur' && (
          <>
            {/* Introduction Section */}
            <section className="intro-section glass-card">
              <div className="section-header">
                <h2><span className="highlight">Entrepreneur Transformation</span></h2>
                <div className="divider"></div>
              </div>

              <p className="intro-text">
                Our Entrepreneur Transformation programs are specifically designed for business owners and entrepreneurs
                who are ready to scale their ventures systematically. We help you transition from daily operations to strategic leadership,
                building self-sustaining and growth-oriented businesses.
              </p>              <div className="key-points">
                <div className="key-point">
                  <div className="point-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Business Scaling</h3>
                  <p>Implement frameworks for sustainable and efficient business growth</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <h3>Systems Creation</h3>
                  <p>Develop automated processes that reduce founder dependency</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h3>Team Leadership</h3>
                  <p>Build and empower high-performing teams aligned with your vision</p>
                </div>
              </div>
            </section>

            {/* Programs Section */}
            <section className="programs-section">
              <div className="section-header centered">
                <h2>Entrepreneur Programs</h2>
                <div className="divider center"></div>
                <p className="section-subtitle">Structured paths to elevate your business and leadership</p>
              </div>              <div className="program-grid">
                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Orientation Gurukul</h3>
                  </div>
                  <p>For entrepreneurs with greater than 1 Cr turnover. Build mindset, structure, and clarity.</p>
                  <ul className="program-features">
                    <li>Method: Group sessions, peer activities, learning assignments.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Orientation Gurukul',
                      'Entrepreneur Transformation',
                      'For entrepreneurs with greater than 1 Cr turnover. Build mindset, structure, and clarity through group sessions, peer activities, and learning assignments.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Foundation Gurukul</h3>
                  </div>
                  <p>For ₹1–5 Cr turnover. Focus on people, processes, and productivity.</p>
                  <ul className="program-features">
                    <li>Method: Strategy sessions, live reviews, process tools.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Foundation Gurukul',
                      'Entrepreneur Transformation',
                      'For ₹1–5 Cr turnover. Focus on people, processes, and productivity through strategy sessions, live reviews, and process tools.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Enroll Now
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Entrepreneur Gurukul</h3>
                  </div>
                  <p>For ₹5–50 Cr turnover. Build leadership team, scalability, and profits.</p>
                  <ul className="program-features">
                    <li>Method: Live sessions + business reviews + buddy meets.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Entrepreneur Gurukul',
                      'Entrepreneur Transformation',
                      'For ₹5–50 Cr turnover. Build leadership team, scalability, and profits through live sessions, business reviews, and buddy meets.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Register
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Advanced Gurukul</h3>
                  </div>
                  <p>For Less than ₹50 Cr businesses. Focus on reorientation and transformation.</p>
                  <ul className="program-features">
                    <li>Method: Deep diagnostics, leadership tools, planning frameworks.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Advanced Gurukul',
                      'Entrepreneur Transformation',
                      'For Less than ₹50 Cr businesses. Focus on reorientation and transformation through deep diagnostics, leadership tools, and planning frameworks.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    View Details
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Master Gurukul</h3>
                  </div>
                  <p>For evolved entrepreneurs. Focus on business mastery and long-term vision.</p>
                  <ul className="program-features">
                    <li>Method: Mentoring, immersion labs, strategic execution planning.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Master Gurukul',
                      'Entrepreneur Transformation',
                      'For evolved entrepreneurs. Focus on business mastery and long-term vision through mentoring, immersion labs, and strategic execution planning.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    View Details
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Nirvana Gurukul</h3>
                  </div>
                  <p>For legacy-building entrepreneurs. Focus on purpose and long-term impact.</p>
                  <ul className="program-features">
                    <li>Method: Coaching + deep reflection + leadership visioning.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Nirvana Gurukul',
                      'Entrepreneur Transformation',
                      'For legacy-building entrepreneurs. Focus on purpose and long-term impact through coaching, deep reflection, and leadership visioning.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </section>

            {/* Audience Section */}
            <section className="audience-section glass-card">
              <div className="section-header">
                <h2>Who Can Benefit</h2>
                <div className="divider"></div>
                <p className="section-subtitle">Our entrepreneur programs are designed for:</p>
              </div>

              <div className="audience-grid">
                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3>Business Owners</h3>
                  <p>Looking to systematize operations and focus on strategic growth</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Scaling Entrepreneurs</h3>
                  <p>Ready to break through current growth plateaus and scale up</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3>Family Businesses</h3>
                  <p>Seeking structure, processes and successful generation transitions</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Enterprise Transformation Content */}
        {activeTab === 'enterprise' && (
          <>
            {/* Introduction Section */}
            <section className="intro-section glass-card">
              <div className="section-header">
                <h2><span className="highlight">Enterprise Transformation</span></h2>
                <div className="divider"></div>
              </div>

              <p className="intro-text">
                Our Enterprise Transformation solutions help established organizations redesign their culture, operations, and leadership frameworks
                to meet the demands of rapid market changes. We partner with management teams to develop scalable, adaptable,
                and forward-thinking organizational structures.
              </p>              <div className="key-points">
                <div className="key-point">
                  <div className="point-icon">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <h3>Organizational Design</h3>
                  <p>Create adaptive structures and workflows that support innovation</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <h3>Process Optimization</h3>
                  <p>Streamline operations for maximum efficiency and minimal waste</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3>Culture Transformation</h3>
                  <p>Build engaged, performance-driven teams with shared values</p>
                </div>
              </div>
            </section>

            {/* Programs Section */}
            <section className="programs-section">
              <div className="section-header centered">
                <h2>Enterprise Programs</h2>
                <div className="divider center"></div>
                <p className="section-subtitle">Comprehensive organizational development solutions</p>
              </div>              <div className="program-grid">
                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Organization Diagnostics</h3>
                  </div>
                  <p>360° study of business across people, systems, culture, and processes.</p>
                  <ul className="program-features">
                    <li>Method: Interviews, surveys, field study, gap analysis.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Organization Diagnostics',
                      'Enterprise Transformation',
                      '360° study of business across people, systems, culture, and processes through interviews, surveys, field study, and gap analysis.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Request Consultation
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Leadership Development</h3>
                  </div>
                  <p>Equip leaders to handle change, performance, and future readiness</p>
                  <ul className="program-features">
                    <li>Method: Custom training, simulations, coaching labs.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Leadership Development',
                      'Enterprise Transformation',
                      'Equip leaders to handle change, performance, and future readiness through custom training, simulations, and coaching labs.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Learn More
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Sales Transformation</h3>
                  </div>
                  <p>Build a high-performing sales engine with systems and accountability.</p>
                  <ul className="program-features">
                    <li>Method: Audits, workshops, field enablement, reviews.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Sales Transformation',
                      'Enterprise Transformation',
                      'Build a high-performing sales engine with systems and accountability through audits, workshops, field enablement, and reviews.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Get Details
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Zone-wise/Division-wise Projects</h3>
                  </div>
                  <p>Long-term structured interventions across company units or verticals.</p>
                  <ul className="program-features">
                    <li>Method: Phase-wise rollout, performance tracking, team coaching.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Zone-wise/Division-wise Projects',
                      'Enterprise Transformation',
                      'Long-term structured interventions across company units or verticals through phase-wise rollout, performance tracking, and team coaching.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Schedule Assessment
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Capability Building Programs</h3>
                  </div>
                  <p>Functional training for HR, Admin, Ops, Finance, and Sales teams.</p>
                  <ul className="program-features">
                    <li>Method: Department-specific curriculum + implementation support.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Capability Building Programs',
                      'Enterprise Transformation',
                      'Functional training for HR, Admin, Ops, Finance, and Sales teams through department-specific curriculum and implementation support.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Schedule Assessment
                  </button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Culture Transformation</h3>
                  </div>
                  <p>Build alignment, accountability, and ownership mindset in your workforce.</p>
                  <ul className="program-features">
                    <li>Method: Storytelling, rituals, systems, team engagement formats.</li>
                  </ul>
                  <button
                    onClick={() => handleProgramInquiry(
                      'Culture Transformation',
                      'Enterprise Transformation',
                      'Build alignment, accountability, and ownership mindset in your workforce through storytelling, rituals, systems, and team engagement formats.',
                      'To be discussed'
                    )}
                    className="program-btn"
                  >
                    Schedule Assessment
                  </button>
                </div>
              </div>
            </section>

            {/* Audience Section */}
            <section className="audience-section glass-card">
              <div className="section-header">
                <h2>Who Can Benefit</h2>
                <div className="divider"></div>
                <p className="section-subtitle">Our enterprise solutions serve:</p>
              </div>

              <div className="audience-grid">
                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3>Medium Enterprises</h3>
                  <p>Organizations ready to implement structured growth systems</p>
                  <Link to="/contact" className="audience-btn">Contact Us</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Growth-Stage Companies</h3>
                  <p>Businesses navigating rapid expansion and organizational challenges</p>
                  <Link to="/contact" className="audience-btn">Contact Us</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <h3>Companies in Transition</h3>
                  <p>Organizations undergoing leadership changes or strategic pivots</p>
                  <Link to="/contact" className="audience-btn">Contact Us</Link>
                </div>
              </div>
            </section>
          </>
        )}

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content glass-card">
            <h2>Begin Your Transformation Journey Today</h2>
            <p>Take the first step toward unlocking your full potential and creating lasting positive change.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="primary-btn">Contact Us</Link>
            </div>
          </div>
        </section>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default IndividualTransformation;