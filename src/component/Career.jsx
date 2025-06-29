import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import './Career.css';

const categories = [
  { label: 'All Positions', value: 'all', icon: '📋' },
  { label: 'Business Development', value: 'marketing', icon: '📈' },
  { label: 'Creative & Design', value: 'design', icon: '🎨' },
  { label: 'Operations', value: 'operations', icon: '⚙️' },
  { label: 'Finance & Admin', value: 'finance', icon: '💼' },
];

const jobs = [{
  id: 1,
  title: 'Manager – Human Resources',
  desc: 'Lead talent acquisition, performance systems, and people culture initiatives. This is a strategic role for HR professionals ready to build and scale teams.',
  location: 'Mumbai',
  // type: 'Full-Time',
  category: 'operations',
},
{
  id: 2,
  title: 'Business Development Manager (BDM)',
  desc: 'Drive partnerships, revenue growth, and program enrollments across India. Must have sharp sales acumen, leadership ability, and a result-oriented mindset.',
  location: 'Mumbai',
  // type: 'Full-Time',
  category: 'marketing',
},
{
  id: 3,
  title: 'Business Development Executive (BDE)',
  desc: 'Engage leads, pitch programs, and hit monthly conversion targets. Ideal for high-energy sales talent with excellent communication skills',
  location: 'Mumbai',
  // type: 'Full-Time',
  category: 'finance',
},
{
  id: 4,
  title: 'Business Miner (Lead Research & Prospecting)',
  desc: 'Identify, filter, and qualify potential clients and partners. This role requires research ability, data discipline, and commercial understanding.',
  location: 'Mumbai',
  // type: 'Contract',
  category: 'design',
},
{
  id: 5,
  title: 'Customer Relationship Manager (CRM)',
  desc: 'Build and nurture relationships with clients pre- and post-program. Own engagement, feedback, and retention across the customer journey.',
  location: 'Mumbai',
  // type: 'Full-Time',
  category: 'operations',
},
];

const Career = () => {
  const [selected, setSelected] = useState('all');
  const navigate = useNavigate();

  const filteredJobs = selected === 'all' ? jobs : jobs.filter(j => j.category === selected);

  const slideUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div className="career-bg" initial="hidden" animate="visible">
      <Header />
      <div className="career-content-wrapper">
        <div className="career-container">
          <motion.div className="career-heading" {...slideUp}>Be Part of our Mission</motion.div>
          <motion.div className="career-desc" {...slideUp}>
            Join our team of passionate innovators! At smmart, we believe in empowering talent, fostering growth, and creating meaningful impact. We offer a collaborative environment where your ideas matter and your growth is prioritized.
          </motion.div>
          <div className="career-categories">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`career-category-btn${selected === cat.value ? ' active' : ''}`}
                onClick={() => setSelected(cat.value)}
              >
                <span className="category-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="career-job-list">
            {filteredJobs.map(job => (
              <div className="career-job-card" key={job.id}>
                <div className="career-job-info">
                  <div className="career-job-title">{job.title}</div>
                  <div className="career-job-desc">{job.desc}</div>
                  <div className="career-job-tags">
                    <span className="career-job-tag">
                      <span role="img" aria-label="location">📍</span>
                      {job.location}
                    </span>
                    <span className="career-job-tag">
                      <span role="img" aria-label="job type">{job.type === 'Full-Time' ? '⏱️' : '📄'}</span>
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="career-apply-btn" onClick={() => navigate(`/careers/apply/${job.id}`)}>
                  Apply now <span className="career-apply-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Career;