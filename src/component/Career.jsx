import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Career.css';

const categories = [
  { label: 'View All', value: 'all' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Design', value: 'design' },
  { label: 'Operations', value: 'operations' },
  { label: 'Finance', value: 'finance' },
];

const jobs = [
  {
    id: 1,
    title: 'Executive / Sr. Executive – Reviews',
    desc: 'We are having urgent opening for the position of Executive / Sr Executive – Review Department, based in Mumbai.',
    location: 'Mumbai',
    type: '100% Full-Time',
    category: 'operations',
  },
  {
    id: 2,
    title: 'Marketing Specialist',
    desc: 'Join our marketing team to drive campaigns and brand awareness.',
    location: 'Mumbai',
    type: '100% Full-Time',
    category: 'marketing',
  },
  {
    id: 3,
    title: 'Finance Analyst',
    desc: 'Analyze financial data and help us grow smartly.',
    location: 'Mumbai',
    type: '100% Full-Time',
    category: 'finance',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    desc: 'Design beautiful and user-friendly interfaces for our products.',
    location: 'Remote',
    type: 'Contract',
    category: 'design',
  },
  {
    id: 5,
    title: 'Operations Manager',
    desc: 'Lead and optimize our operations team for maximum efficiency.',
    location: 'Mumbai',
    type: '100% Full-Time',
    category: 'operations',
  },
];

const Career = () => {
  const [selected, setSelected] = useState('all');
  const navigate = useNavigate();

  const filteredJobs = selected === 'all' ? jobs : jobs.filter(j => j.category === selected);

  return (
    <div className="career-bg">
      <Header />
      <div className="career-content-wrapper">
        <div className="career-container">
          <div className="career-heading">Be Part of our Mission</div>
          <div className="career-desc">
            We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
          </div>
          <div className="career-categories">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`career-category-btn${selected === cat.value ? ' active' : ''}`}
                onClick={() => setSelected(cat.value)}
              >
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
                    <span className="career-job-tag">{job.location}</span>
                    <span className="career-job-tag">{job.type}</span>
                  </div>
                </div>
                <button className="career-apply-btn" onClick={() => navigate(`/careers/apply/${job.id}`)}>
                  Apply now <span className="career-apply-arrow">↗</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career; 