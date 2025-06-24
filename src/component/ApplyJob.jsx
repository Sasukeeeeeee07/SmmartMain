import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Career.css';
import './ApplyJob.css';

const jobs = [
  {
    id: 1,
    title: 'Executive / Sr. Executive – Reviews',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Urgent opening for Executive / Sr. Executive – Reviews (Customer organization related)',
    roleSignificance: 'This role is critical for ensuring quality and compliance in our review department.',
    responsibilities: [
      'Implementation & Review (75%)',
      'Ensure Standardization (20%)',
      'Additional duties as assigned',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '1-3 years experience in a similar role',
      'Excellent communication skills',
    ],
    qualifications: [
      "Bachelor's degree in any field",
      'Relevant certifications preferred',
    ],
    skills: [
      'Attention to detail',
      'Analytical thinking',
      'Teamwork',
    ],
    benefits: [
      'Health insurance',
      'Paid time off',
      'Learning & development',
    ],
    salary: '₹4,00,000 – ₹6,00,000 per annum',
    company: 'Smmart Training & Consultancy',
  },
  {
    id: 2,
    title: 'Marketing Specialist',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Join our marketing team to drive campaigns and brand awareness.',
    roleSignificance: 'Help us grow our brand and reach new audiences.',
    responsibilities: [
      'Develop and execute marketing campaigns',
      'Analyze campaign performance',
      'Collaborate with design and sales teams',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '2+ years experience in marketing',
      'Strong communication skills',
    ],
    qualifications: [
      "Bachelor\'s degree in Marketing or related field",
      'MBA preferred',
    ],
    skills: [
      'Creativity',
      'Digital marketing',
      'Teamwork',
    ],
    benefits: [
      'Health insurance',
      'Performance bonus',
      'Learning & development',
    ],
    salary: '₹5,00,000 – ₹7,00,000 per annum',
    company: 'Smmart Training & Consultancy',
  },
  {
    id: 3,
    title: 'Finance Analyst',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Analyze financial data and help us grow smartly.',
    roleSignificance: 'Support business decisions with financial insights.',
    responsibilities: [
      'Prepare financial reports',
      'Analyze trends and forecasts',
      'Support budgeting and planning',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '2+ years experience in finance',
      'Strong analytical skills',
    ],
    qualifications: [
      "Bachelor\'s degree in Finance or related field",
      'CA/MBA preferred',
    ],
    skills: [
      'Financial modeling',
      'Excel',
      'Attention to detail',
    ],
    benefits: [
      'Health insurance',
      'Performance bonus',
      'Learning & development',
    ],
    salary: '₹6,00,000 – ₹8,00,000 per annum',
    company: 'Smmart Training & Consultancy',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    type: 'Contract',
    location: 'Remote',
    description: 'Design beautiful and user-friendly interfaces for our products.',
    roleSignificance: 'Shape the user experience of our digital products.',
    responsibilities: [
      'Create wireframes and prototypes',
      'Work with developers to implement designs',
      'Conduct user research',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '1+ years experience in UI/UX',
      'Portfolio of design work',
    ],
    qualifications: [
      "Bachelor\'s degree in Design or related field",
      'Relevant certifications preferred',
    ],
    skills: [
      'Figma/Sketch/Adobe XD',
      'Creativity',
      'User research',
    ],
    benefits: [
      'Remote work',
      'Flexible hours',
      'Learning & development',
    ],
    salary: '₹3,00,000 – ₹5,00,000 per annum',
    company: 'Smmart Training & Consultancy',
  },
  {
    id: 5,
    title: 'Operations Manager',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Lead and optimize our operations team for maximum efficiency.',
    roleSignificance: 'Drive operational excellence across the company.',
    responsibilities: [
      'Manage operations team',
      'Optimize processes',
      'Ensure compliance and quality',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '3+ years experience in operations',
      'Leadership skills',
    ],
    qualifications: [
      "Bachelor\'s degree in any field",
      'MBA preferred',
    ],
    skills: [
      'Process optimization',
      'Team management',
      'Problem-solving',
    ],
    benefits: [
      'Health insurance',
      'Performance bonus',
      'Learning & development',
    ],
    salary: '₹7,00,000 – ₹10,00,000 per annum',
    company: 'Smmart Training & Consultancy',
  },
];

const ApplyJob = () => {
  const { id } = useParams();
  const [tab, setTab] = useState('overview');
  const job = jobs.find(j => String(j.id) === String(id));
  const [submitted, setSubmitted] = useState(false); if (!job) {
    return (
      <div className="apply-page">
        <Header />
        <div className="apply-container">
          <div className="job-card">
            <div className="job-card-header">
              <h2 className="job-card-title">Job Not Found</h2>
            </div>
            <div className="tab-content">
              <div className="success-card">
                <h2>Position Not Available</h2>
                <p>Sorry, the job you're looking for doesn't exist or has been removed.</p>
                <div className="explore-link">
                  <Link to="/careers">View All Jobs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }; return (
    <div className="apply-page">
      <Header />
      <div className="apply-container">
        {/* Page Title */}
        <div className="page-title">
          <h1>Apply for a Position</h1>
          <p>Take the next step in your career journey with us</p>
        </div>

        {/* Job Card */}
        <div className="job-card">
          <div className="job-card-header">
            <h2 className="job-card-title">{job.title}</h2>
            <div className="job-card-meta">
              <span className="job-badge"><i className="fas fa-briefcase"></i> {job.type}</span>
              <span className="job-badge"><i className="fas fa-map-marker-alt"></i> {job.location}</span>
              <span className="job-badge"><i className="fas fa-building"></i> {job.company}</span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="job-tabs">
            <button
              className={`job-tab ${tab === 'overview' ? 'active' : ''}`}
              onClick={() => setTab('overview')}
            >
              Job Overview
            </button>
            <button
              className={`job-tab ${tab === 'application' ? 'active' : ''}`}
              onClick={() => setTab('application')}
            >
              Apply Now
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {tab === 'overview' && (
              <div className="job-overview">
                <h3>Job Description</h3>
                <p>{job.description}</p>

                <h3>Role Significance</h3>
                <p>{job.roleSignificance}</p>

                <h3>Key Responsibilities</h3>
                <ul>{job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>

                <h3>Job Requirements</h3>
                <ul>{job.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul>

                <h3>Qualifications Required</h3>
                <ul>{job.qualifications.map((q, i) => <li key={i}>{q}</li>)}</ul>

                <h3>Skills & Traits</h3>
                <ul>{job.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>

                <h3>Benefits</h3>
                <ul>{job.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>

                <h3>Salary Range</h3>
                <p>{job.salary}</p>
              </div>
            )}

            {tab === 'application' && (
              <div className="application-form-container">
                {!submitted ? (
                  <form className="application-form" onSubmit={handleSubmit}>
                    <h2>Apply for this Position</h2>

                    <label>
                      Full Name
                      <input type="text" placeholder="Your full name" required />
                    </label>

                    <label>
                      Email Address
                      <input type="email" placeholder="Your email address" required />
                    </label>

                    <label>
                      Phone Number
                      <input type="tel" placeholder="Your phone number" pattern="[0-9]{10,15}" required />
                    </label>

                    <label>
                      Resume/CV
                      <input type="file" accept=".pdf,.doc,.docx" required />
                    </label>

                    <label>
                      Cover Letter
                      <textarea placeholder="Tell us why you're a good fit for this role..." />
                    </label>

                    <button type="submit" className="submit-btn">Submit Application</button>

                    <div className="explore-link">
                      <Link to="/careers">Browse all open positions</Link>
                    </div>
                  </form>
                ) : (
                  <div className="success-card">
                    <img src="/images/Book.jpg" alt="Success" className="success-icon" />
                    <h2>Your Application is In!</h2>
                    <p>
                      Thank you for applying to join our team. Your passion inspires us and we can't wait to explore your talents!
                    </p>
                    <div className="explore-link">
                      <Link to="/careers">Explore more jobs</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyJob; 