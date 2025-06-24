import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import './IndividualTransformation.css';

const IndividualTransformation = () => {
  return (
    <div className="individual-transformation-page">
      <Header />

      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>TRANSFORM YOUR POTENTIAL</h1>
            <p className="hero-subtitle">Discover the path to personal excellence and professional mastery</p>
            <button className="cta-button">Start Your Journey</button>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="intro-section glass-card">
          <div className="section-header">
            <h2><span className="highlight">Individual Transformation</span> at SMMART</h2>
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
            <h2>Our Transformation Programs</h2>
            <div className="divider center"></div>
            <p className="section-subtitle">Comprehensive solutions designed for lasting change</p>
          </div>

          <div className="program-grid">
            <div className="program-card glass-card">
              <div className="program-card-header">
                <h3>Client Pep Talks</h3>
                <span className="program-duration">2-3 Hours</span>
              </div>
              <p>Immersive motivational sessions designed to inspire action and reset your mindset. These talks provide immediate clarity, energy, and practical strategies to overcome challenges.</p>
              <ul className="program-features">
                <li>Motivation boost</li>
                <li>Clarity on next steps</li>
                <li>Actionable strategies</li>
              </ul>
              <button className="program-btn">Learn More</button>
            </div>

            <div className="program-card glass-card">
              <div className="program-card-header">
                <h3>Wisdom Knights</h3>
                <span className="program-duration">Quarterly Meetup</span>
              </div>
              <p>Our exclusive alumni networking platform where individuals share insights, celebrate wins, and collectively solve challenges. These quarterly meetups foster community and continuous growth.</p>
              <ul className="program-features">
                <li>Peer learning</li>
                <li>Success networking</li>
                <li>Knowledge exchange</li>
              </ul>
              <button className="program-btn">Learn More</button>
            </div>

            <div className="program-card glass-card">
              <div className="program-card-header">
                <h3>SNOA Video Library</h3>
                <span className="program-duration">Self-paced</span>
              </div>
              <p>Access our vast collection of 250+ video resources from the Santosh Nair Online Academy, covering topics from sales & marketing to time management and confidence building.</p>
              <ul className="program-features">
                <li>On-demand learning</li>
                <li>Diverse topics</li>
                <li>Expert insights</li>
              </ul>
              <button className="program-btn">Access Library</button>
            </div>

            <div className="program-card glass-card">
              <div className="program-card-header">
                <h3>Specialized Workshops</h3>
                <span className="program-duration">1-2 Days</span>
              </div>
              <p>Focused interactive sessions on specific development areas, including Professional Selling Skills, Leadership, and T.I.G.E.R. Vision, designed to build mastery in critical competencies.</p>
              <ul className="program-features">
                <li>Hands-on learning</li>
                <li>Skill building</li>
                <li>Immediate application</li>
              </ul>
              <button className="program-btn">View Schedule</button>
            </div>

            <div className="program-card glass-card">
              <div className="program-card-header">
                <h3>Online Programs</h3>
                <span className="program-duration">Flexible</span>
              </div>
              <p>Advanced digital learning experiences including Auto Pilot Organization (APO), Auto Exponential Organization (AEO), and Auto Transforming Organization (ATO) focused on sustainable growth.</p>
              <ul className="program-features">
                <li>Remote learning</li>
                <li>Advanced concepts</li>
                <li>Flexible schedule</li>
              </ul>
              <button className="program-btn">Enroll Now</button>
            </div>

            <div className="program-card glass-card">
              <div className="program-card-header">
                <h3>Train the Trainer</h3>
                <span className="program-duration">Advanced</span>
              </div>
              <p>Elite program for individuals who wish to master the art of transformation and become certified trainers within the smmart ecosystem. Learn how to create and deliver impactful training.</p>
              <ul className="program-features">
                <li>Certification</li>
                <li>Speaking skills</li>
                <li>Content creation</li>
              </ul>
              <button className="program-btn">Apply Now</button>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section className="audience-section glass-card">
          <div className="section-header">
            <h2>Who Can Benefit</h2>
            <div className="divider"></div>
            <p className="section-subtitle">Our programs serve diverse individuals at various life stages</p>
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
              <div className="audience-icon">👨‍💻</div>
              <h3>Employees</h3>
              <p>Enhancing workplace performance and advancement opportunities</p>
              <Link to="/contact" className="audience-btn">Start Now</Link>
            </div>

            <div className="audience-card">
              <div className="audience-icon">🏠</div>
              <h3>Homemakers</h3>
              <p>Finding purpose and creating value in personal and family contexts</p>
              <Link to="/contact" className="audience-btn">Start Now</Link>
            </div>

            <div className="audience-card">
              <div className="audience-icon">💼</div>
              <h3>Insurance Agents</h3>
              <p>Building client relationships and enhancing sales capabilities</p>
              <Link to="/contact" className="audience-btn">Start Now</Link>
            </div>

            <div className="audience-card">
              <div className="audience-icon">🌐</div>
              <h3>Network Marketers</h3>
              <p>Developing team-building and persuasive communication skills</p>
              <Link to="/contact" className="audience-btn">Start Now</Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section glass-card">
          <div className="section-header centered">
            <h2>Success Stories</h2>
            <div className="divider center"></div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">The Individual Transformation program completely changed my approach to both life and work. I've gained clarity, confidence, and practical tools that I use every single day.</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <p>Marketing Professional</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">As a student, I was unsure about my direction in life. This program helped me identify my strengths and create a roadmap for my future that aligns with my values and aspirations.</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Rahul Mehta</h4>
                  <p>Engineering Student</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">The practical exercises and personalized coaching helped me break through long-standing barriers. My productivity has doubled, and I've achieved goals I once thought impossible.</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Ajay Patel</h4>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content glass-card">
            <h2>Begin Your Transformation Journey Today</h2>
            <p>Take the first step toward unlocking your full potential and creating lasting positive change in your life.</p>
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
