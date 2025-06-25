import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Career.css';
import './ApplyJob.css';

const jobs = [
  {
    id: 1,
    title: 'Manager – Human Resources',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Lead talent acquisition, performance systems, and people culture initiatives.',
    roleSignificance: 'This is a strategic role for HR professionals ready to build and scale teams.',
    responsibilities: [
      'Develop and implement HR strategies and initiatives',
      'Manage the recruitment lifecycle and onboarding processes',
      'Oversee performance management systems and employee development',
      'Monitor and ensure compliance with employment laws and regulations',
      'Create and nurture a positive work culture',
    ],
    requirements: [
      'Graduate / Post Graduate in HR or related field',
      '5+ years experience in HR management',
      'Strong leadership and communication skills',
    ],
    qualifications: [
      "Bachelor's degree in Human Resources or related field",
      'HR certification preferred (SHRM, HRCI)',
      'MBA specializing in HR is a plus',
    ],
    skills: [
      'People management',
      'Conflict resolution',
      'Recruitment and talent acquisition',
      'Employee relations',
      'Organizational development',
    ],
    benefits: [
      'Comprehensive health insurance',
      'Performance-based bonuses',
      'Learning & development opportunities',
      'Work-life balance initiatives',
      'Career advancement paths',
    ],
    salary: '₹8,00,000 – ₹12,00,000 per annum',
    company: 'smmart Training & Consultancy',
  },
  {
    id: 2,
    title: 'Business Development Manager (BDM)',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Drive partnerships, revenue growth, and program enrollments across India.',
    roleSignificance: 'Must have sharp sales acumen, leadership ability, and a result-oriented mindset.',
    responsibilities: [
      'Identify and develop business opportunities with new and existing clients',
      'Build and maintain relationships with key stakeholders and decision makers',
      'Create and execute strategic sales plans to achieve targets',
      'Analyze market trends and competitor activities',
      'Lead and mentor a team of business development executives',
    ],
    requirements: [
      'Graduate / Post Graduate in Business, Marketing or related field',
      '5+ years experience in business development or sales',
      'Proven track record in meeting and exceeding targets',
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing or related field",
      'MBA preferred',
      'Sales and negotiation certifications a plus',
    ],
    skills: [
      'Strategic planning',
      'Negotiation',
      'Client relationship management',
      'Team leadership',
      'Business acumen',
    ],
    benefits: [
      'Competitive base salary plus commission structure',
      'Health insurance',
      'Performance bonuses',
      'Professional development allowance',
      'Travel allowance',
    ],
    salary: '₹10,00,000 – ₹15,00,000 per annum + incentives',
    company: 'smmart Training & Consultancy',
  },
  {
    id: 3,
    title: 'Business Development Executive (BDE)',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Engage leads, pitch programs, and hit monthly conversion targets.',
    roleSignificance: 'Ideal for high-energy sales talent with excellent communication skills.',
    responsibilities: [
      'Prospect and qualify potential clients',
      'Conduct product demonstrations and sales presentations',
      'Follow up with leads and convert them into clients',
      'Maintain accurate records in CRM system',
      'Meet or exceed monthly sales targets',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '2+ years experience in sales or business development',
      'Strong communication and persuasion skills',
    ],
    qualifications: [
      "Bachelor's degree in any field",
      'Sales training certification is a plus',
    ],
    skills: [
      'Cold calling',
      'Relationship building',
      'Presentation skills',
      'Time management',
      'Resilience and persistence',
    ],
    benefits: [
      'Base salary plus commission',
      'Health insurance',
      'Sales training programs',
      'Career growth opportunities',
      'Team incentive trips',
    ],
    salary: '₹4,50,000 – ₹7,00,000 per annum + incentives',
    company: 'smmart Training & Consultancy',
  },
  {
    id: 4,
    title: 'Business Miner (Lead Research & Prospecting)',
    type: 'Contract',
    location: 'Mumbai',
    description: 'Identify, filter, and qualify potential clients and partners.',
    roleSignificance: 'This role requires research ability, data discipline, and commercial understanding.',
    responsibilities: [
      'Research and identify potential clients and business opportunities',
      'Create and maintain a database of qualified prospects',
      'Perform market analysis and competitor research',
      'Support the sales team with lead qualification',
      'Generate reports on market trends and potential opportunities',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '2+ years experience in research, data analysis or lead generation',
      'Excellent research and analytical skills',
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing, or related field",
      'Certification in data analysis is a plus',
    ],
    skills: [
      'Database management',
      'Market research',
      'Data analysis',
      'Critical thinking',
      'Attention to detail',
    ],
    benefits: [
      'Flexible working hours',
      'Performance-based incentives',
      'Professional development opportunities',
      'Contract extension possibilities',
      'Remote work options',
    ],
    salary: '₹3,50,000 – ₹5,50,000 per annum',
    company: 'smmart Training & Consultancy',
  },
  {
    id: 5,
    title: 'Customer Relationship Manager (CRM)',
    type: 'Full Time',
    location: 'Mumbai',
    description: 'Build and nurture relationships with clients pre- and post-program.',
    roleSignificance: 'Own engagement, feedback, and retention across the customer journey.',
    responsibilities: [
      'Serve as the primary point of contact for clients',
      'Ensure high levels of client satisfaction and retention',
      'Handle client queries, feedback, and concerns promptly',
      'Coordinate with internal teams to address client needs',
      'Create engagement strategies to enhance client experience',
    ],
    requirements: [
      'Graduate / Post Graduate',
      '3+ years experience in customer service or account management',
      'Excellent interpersonal and communication skills',
    ],
    qualifications: [
      "Bachelor's degree in any field",
      'Customer service or CRM certifications are a plus',
    ],
    skills: [
      'Relationship management',
      'Problem-solving',
      'Active listening',
      'Empathy',
      'Conflict resolution',
    ],
    benefits: [
      'Health insurance',
      'Performance bonuses',
      'Learning & development',
      'Career advancement opportunities',
      'Work-life balance initiatives',
    ],
    salary: '₹4,50,000 – ₹7,00,000 per annum',
    company: 'smmart Training & Consultancy',
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