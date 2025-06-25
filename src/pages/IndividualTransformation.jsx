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
                    {/* <li>Clarity on next steps</li>
                    <li>Actionable strategies</li> */}
                  </ul>
                  <button className="program-btn">Learn More</button>
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
                  <button className="program-btn">Learn More</button>
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
                  <button className="program-btn">Access Library</button>
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
                  <button className="program-btn">Enroll Now</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>APO – Auto Pilot Organization</h3>
                    {/* <span className="program-duration">1-2 Days</span> */}
                  </div>
                  <p>  Learn how to build systems and processes to run your business independently.</p>
                  <ul className="program-features">
                    <li>Method: Offline/online hands-on learning.</li>
                  </ul>
                  <button className="program-btn">Enroll Now</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>AEO – Auto Exponential Organization</h3>
                    {/* <span className="program-duration">1-2 Days</span> */}
                  </div>
                  <p>Learn how to create scalable growth engines in life and business.</p>
                  <ul className="program-features">
                    <li>Method: Online models + strategy tools.</li>
                  </ul>
                  <button className="program-btn">Enroll Now</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>ATO – Auto Transforming Organization</h3>
                    {/* <span className="program-duration">1-2 Days</span> */}
                  </div>
                  <p>Build systems for ongoing transformation, adaptability, and mindset evolution.</p>
                  <ul className="program-features">
                    <li>Method:Self-diagnostics + reflection tools + video-based learning.</li>
                  </ul>
                  <button className="program-btn">Enroll Now</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Train the Trainer</h3>
                    <span className="program-duration">1-2 Days</span>
                  </div>
                  <p> Become a certified Smmart Trainer. Build facilitation and delivery expertise.</p>
                  <ul className="program-features">
                    <li>Method: Hybrid – Live coaching + facilitation labs + expert feedback.</li>
                  </ul>
                  <button className="program-btn">Enroll Now</button>
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
                    <span className="program-duration">14 Months</span>
                  </div>
                  <p>Our flagship transformation program helps entrepreneurs build self-led, scalable, and system-driven businesses. Focus on mindset shifts, business clarity, delegation, and strategic scaling.</p>
                  <ul className="program-features">
                    <li>7 sessions over 8 days</li>
                    <li>Implementation support</li>
                    <li>Business transformation</li>
                  </ul>
                  <button className="program-btn">Learn More</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Auto Pilot Organization (APO)</h3>
                    <span className="program-duration">3-6 Months</span>
                  </div>
                  <p>A tactical implementation-focused program that equips entrepreneurs to create systems, build SOPs, delegate effectively, and run their business without being stuck in operations.</p>
                  <ul className="program-features">
                    <li>Systems development</li>
                    <li>Delegation mastery</li>
                    <li>Operational freedom</li>
                  </ul>
                  <button className="program-btn">Enroll Now</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Financial Azadi</h3>
                    <span className="program-duration">1 Day + Follow-up</span>
                  </div>
                  <p>Helps entrepreneurs understand wealth-building stages, money psychology, and the path to long-term financial independence. Covers the "0 to 100 Cr Club" journey.</p>
                  <ul className="program-features">
                    <li>Financial intelligence</li>
                    <li>Wealth strategies</li>
                    <li>Passive income planning</li>
                  </ul>
                  <button className="program-btn">Register</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Why Entrepreneurs Miss the Bus?</h3>
                    <span className="program-duration">2 Days</span>
                  </div>
                  <p>A mindset-reset session that reveals the real reasons why entrepreneurs get stuck—micromanagement, lack of systems, unclear roles—and how to regain direction and scale smartly.</p>
                  <ul className="program-features">
                    <li>Diagnosis of barriers</li>
                    <li>Clarity on solutions</li>
                    <li>Action planning</li>
                  </ul>
                  <button className="program-btn">View Details</button>
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
                    <h3>Auto Transforming Organization (ATO)</h3>
                    <span className="program-duration">6-12 Months</span>
                  </div>
                  <p>A comprehensive organizational development program that transforms company culture, leadership structures, and operational systems to create self-improving, adaptive enterprises.</p>
                  <ul className="program-features">
                    <li>Leadership alignment</li>
                    <li>Systems integration</li>
                    <li>Cultural transformation</li>
                  </ul>
                  <button className="program-btn">Request Consultation</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Leadership Development Program</h3>
                    <span className="program-duration">3-6 Months</span>
                  </div>
                  <p>Equips mid to senior-level managers with the mindset, tools, and techniques needed to lead teams effectively and drive organizational success.</p>
                  <ul className="program-features">
                    <li>Leadership frameworks</li>
                    <li>Team empowerment</li>
                    <li>Strategic thinking</li>
                  </ul>
                  <button className="program-btn">Learn More</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Sales Mastery for Teams</h3>
                    <span className="program-duration">Flexible</span>
                  </div>
                  <p>Transforms sales teams into high-performing units through structured training in consultative selling, objection handling, and client relationship management.</p>
                  <ul className="program-features">
                    <li>Sales process optimization</li>
                    <li>Communication training</li>
                    <li>Performance systems</li>
                  </ul>
                  <button className="program-btn">Get Details</button>
                </div>

                <div className="program-card glass-card">
                  <div className="program-card-header">
                    <h3>Organization Diagnostics</h3>
                    <span className="program-duration">2-4 Weeks</span>
                  </div>
                  <p>A comprehensive assessment of your organization's current state, identifying structural inefficiencies, leadership gaps, and growth opportunities.</p>
                  <ul className="program-features">
                    <li>Cultural assessment</li>
                    <li>Process evaluation</li>
                    <li>Leadership analysis</li>
                  </ul>
                  <button className="program-btn">Schedule Assessment</button>
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
              <button className="secondary-btn">Download Brochure</button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default IndividualTransformation;
