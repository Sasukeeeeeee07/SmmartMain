import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import './IndividualTransformation.css';

const IndividualTransformation = () => {
  const [activeTab, setActiveTab] = useState('individual');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="individual-transformation-page">
      <Header />

      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>TRANSFORMATION PROGRAMS</h1>
            <p className="hero-subtitle">Comprehensive solutions for personal and professional excellence</p>
          </div>
        </section>

        {/* Transformation Navigation Tabs */}
        <section className="transformation-tabs">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'individual' ? 'active' : ''}`}
              onClick={() => handleTabChange('individual')}
            >
              Individual
            </button>
            <button
              className={`tab-btn ${activeTab === 'entrepreneur' ? 'active' : ''}`}
              onClick={() => handleTabChange('entrepreneur')}
            >
              Entrepreneur
            </button>
            <button
              className={`tab-btn ${activeTab === 'enterprise' ? 'active' : ''}`}
              onClick={() => handleTabChange('enterprise')}
            >
              Enterprise
            </button>
          </div>
        </section>

        {/* Individual Transformation Content */}
        {activeTab === 'individual' && (
          <>
            {/* Introduction Section */}
            <section className="intro-section glass-card">
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
                <div className="key-point">
                  <div className="point-icon">🧠</div>
                  <h3>Mindset Shift</h3>
                  <p>Reshape limiting beliefs and develop a growth-oriented perspective</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">🎯</div>
                  <h3>Goal Clarity</h3>
                  <p>Define meaningful objectives and create actionable roadmaps</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">⚡</div>
                  <h3>Productivity</h3>
                  <p>Master techniques to maximize efficiency and output quality</p>
                </div>
              </div>
            </section>

            {/* Programs Section */}
            <section className="programs-section">
              <div className="section-header centered">
                <h2>Individual Programs</h2>
                <div className="divider center"></div>
                <p className="section-subtitle">Comprehensive solutions designed for lasting personal change</p>
              </div>

              <div className="program-grid">
                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Client Pep Talks</h3>
                    <span className="program-duration">2-3 Hours</span>
                  </div>
                  <p>In-person motivational sessions to spark clarity, action, and energy.</p>
                  <ul className="program-features">
                    <li>Method: Live 1:1 or group motivational sessions.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Learn More</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Wisdom Knights</h3>
                    <span className="program-duration">Quarterly Meetup</span>
                  </div>
                  <p>Quarterly alumni gatherings for inspiration, knowledge exchange, and bonding.</p>
                  <ul className="program-features">
                    <li>Method: Offline community meet-ups.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Learn More</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>SNOA Video Library</h3>
                    <span className="program-duration">Self-paced</span>
                  </div>
                  <p>350+ video titles on sales, time, mindset, habits, and leadership</p>
                  <ul className="program-features">
                    <li>Method: On-demand, self-paced video learning.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Access Library</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Workshops</h3>
                    <span className="program-duration">1-2 Days</span>
                  </div>
                  <p> Focused training on specific life and work topics like Leadership, Vasooli, etc.</p>
                  <ul className="program-features">
                    <li>Method: Offline/online hands-on learning.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Enroll Now</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>APO – Auto Pilot Organization</h3>
                  </div>
                  <p>  Learn how to build systems and processes to run your business independently.</p>
                  <ul className="program-features">
                    <li>Method: Offline/online hands-on learning.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Enroll Now</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>AEO – Auto Exponential Organization</h3>
                  </div>
                  <p>Learn how to create scalable growth engines in life and business.</p>
                  <ul className="program-features">
                    <li>Method: Online models + strategy tools.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Enroll Now</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>ATO – Auto Transforming Organization</h3>
                  </div>
                  <p>Build systems for ongoing transformation, adaptability, and mindset evolution.</p>
                  <ul className="program-features">
                    <li>Method:Self-diagnostics + reflection tools + video-based learning.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Enroll Now</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Train the Trainer</h3>
                    <span className="program-duration">1-2 Days</span>
                  </div>
                  <p> Become a certified smmart Trainer. Build facilitation and delivery expertise.</p>
                  <ul className="program-features">
                    <li>Method: Hybrid – Live coaching + facilitation labs + expert feedback.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Enroll Now</Link>
                </div>
              </div>
            </section>

            {/* Audience Section */}
            <section className="audience-section glass-card">
              <div className="section-header">
                <h2>Who Can Benefit</h2>
                <div className="divider"></div>
                <p className="section-subtitle">Our individual programs serve diverse participants</p>
              </div>

              <div className="audience-grid">
                <div className="audience-card">
                  <div className="audience-icon">👨‍🎓</div>
                  <h3>Students</h3>
                  <p>Building foundations for future success with clarity and purpose</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">👩‍💼</div>
                  <h3>Professionals</h3>
                  <p>Accelerating career growth and developing leadership capabilities</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">🏠</div>
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
              </p>

              <div className="key-points">
                <div className="key-point">
                  <div className="point-icon">🚀</div>
                  <h3>Business Scaling</h3>
                  <p>Implement frameworks for sustainable and efficient business growth</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">⚙️</div>
                  <h3>Systems Creation</h3>
                  <p>Develop automated processes that reduce founder dependency</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">👥</div>
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
              </div>

              <div className="program-grid">
                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Orientation Gurukul</h3>
                  </div>
                  <p> For entrepreneurs with greater than 1 Cr turnover. Build mindset, structure, and clarity.</p>
                  <ul className="program-features">
                    <li>Method: Group sessions, peer activities, learning assignments.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Learn More</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Foundation Gurukul</h3>
                  </div>
                  <p>For ₹1–5 Cr turnover. Focus on people, processes, and productivity.</p>
                  <ul className="program-features">
                    <li>Method: Strategy sessions, live reviews, process tools.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Enroll Now</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Entrepreneur Gurukul</h3>
                  </div>
                  <p> For ₹5–50 Cr turnover. Build leadership team, scalability, and profits.</p>
                  <ul className="program-features">
                    <li>Method: Live sessions + business reviews + buddy meets.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Register</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Advanced Gurukul</h3>
                  </div>
                  <p>For Less than ₹50 Cr businesses. Focus on reorientation and transformation.</p>
                  <ul className="program-features">
                    <li>Method: Deep diagnostics, leadership tools, planning frameworks.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">View Details</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Master Gurukul</h3>
                  </div>
                  <p>For evolved entrepreneurs. Focus on business mastery and long-term vision.</p>
                  <ul className="program-features">
                    <li>Method: Mentoring, immersion labs, strategic execution planning.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">View Details</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Nirvana Gurukul</h3>
                  </div>
                  <p> For legacy-building entrepreneurs. Focus on purpose and long-term impact.</p>
                  <ul className="program-features">
                    <li>Method: Coaching + deep reflection + leadership visioning.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">View Details</Link>
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
                  <div className="audience-icon">🚀</div>
                  <h3>Business Owners</h3>
                  <p>Looking to systematize operations and focus on strategic growth</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">🔄</div>
                  <h3>Scaling Entrepreneurs</h3>
                  <p>Ready to break through current growth plateaus and scale up</p>
                  <Link to="/contact" className="audience-btn">Start Now</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">👨‍👦</div>
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
              </p>

              <div className="key-points">
                <div className="key-point">
                  <div className="point-icon">🏢</div>
                  <h3>Organizational Design</h3>
                  <p>Create adaptive structures and workflows that support innovation</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">🔄</div>
                  <h3>Process Optimization</h3>
                  <p>Streamline operations for maximum efficiency and minimal waste</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">👥</div>
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
              </div>

              <div className="program-grid">
                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Organization Diagnostics</h3>
                  </div>
                  <p>360° study of business across people, systems, culture, and processes.</p>
                  <ul className="program-features">
                    <li>Method: Interviews, surveys, field study, gap analysis.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Request Consultation</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Leadership Development</h3>
                  </div>
                  <p>Equip leaders to handle change, performance, and future readiness</p>
                  <ul className="program-features">
                    <li>Method: Custom training, simulations, coaching labs.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Learn More</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Sales Transformation</h3>
                  </div>
                  <p>Build a high-performing sales engine with systems and accountability.</p>
                  <ul className="program-features">
                    <li>Method: Audits, workshops, field enablement, reviews.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Get Details</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Zone-wise/Division-wise Projects</h3>
                  </div>
                  <p>Long-term structured interventions across company units or verticals.</p>
                  <ul className="program-features">
                    <li>Method: Phase-wise rollout, performance tracking, team coaching.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Schedule Assessment</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Capability Building Programs</h3>
                  </div>
                  <p>Functional training for HR, Admin, Ops, Finance, and Sales teams.</p>
                  <ul className="program-features">
                    <li>Method: Department-specific curriculum + implementation support.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Schedule Assessment</Link>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Culture Transformation</h3>
                  </div>
                  <p> Build alignment, accountability, and ownership mindset in your workforce.</p>
                  <ul className="program-features">
                    <li>Method: Storytelling, rituals, systems, team engagement formats.</li>
                  </ul>
                  <Link to="/contact" className="program-btn">Schedule Assessment</Link>
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
                  <div className="audience-icon">🏢</div>
                  <h3>Medium Enterprises</h3>
                  <p>Organizations ready to implement structured growth systems</p>
                  <Link to="/contact" className="audience-btn">Contact Us</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">📈</div>
                  <h3>Growth-Stage Companies</h3>
                  <p>Businesses navigating rapid expansion and organizational challenges</p>
                  <Link to="/contact" className="audience-btn">Contact Us</Link>
                </div>

                <div className="audience-card">
                  <div className="audience-icon">🔄</div>
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
              <Link to="/contact" className="secondary-btn">Download Brochure</Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default IndividualTransformation;