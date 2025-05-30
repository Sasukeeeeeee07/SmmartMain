import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Career.css';

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
  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="career-bg">
        <Header />
        <div className="career-content-wrapper">
          <div className="applyjob-card" style={{textAlign:'center'}}>
            <h2>Job not found</h2>
            <Link to="/careers" className="career-apply-btn">Back to Careers</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="career-bg">
      <Header />
      <div className="career-content-wrapper">
        <div className="applyjob-card">
          <div className="applyjob-card-header">
            <div className="applyjob-card-title">{job.title}</div>
            <div className="applyjob-card-meta">
              <span className="applyjob-type">{job.type}</span>
              <span className="applyjob-location">{job.location}</span>
            </div>
          </div>
          <div className="applyjob-tabs">
            <button className={tab === 'overview' ? 'active' : ''} onClick={() => setTab('overview')}>Overview</button>
            <button className={tab === 'application' ? 'active' : ''} onClick={() => setTab('application')}>Application</button>
          </div>
        </div>
        <div className="applyjob-tab-content">
          {tab === 'overview' && (
            <div className="applyjob-overview">
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
              <h3>Company Info</h3>
              <p>{job.company}</p>
            </div>
          )}
          {tab === 'application' && (
            <div className="application-form-container">
              {!submitted ? (
                <form className="application-form" onSubmit={handleSubmit}>
                  <h2>Apply for a Position</h2>
                  <label>
                    Full Name
                <input type="text" placeholder="First Name" className='FirstName' required />
                  </label>
                  <label>
                    Email Address
                <input type="email" placeholder="Email" required />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" placeholder="Phone Number" pattern="[0-9]{10,15}" required />
                  </label>
                  <label>
                    Resume
                    <input type="file" accept=".pdf,.doc,.docx" required />
                  </label>
                  <label>
                    Summary
                    <textarea rows={4} placeholder="Summary" />
                  </label>
                  <button type="submit" className="career-apply-btn" style={{marginTop: '18px'}}>Submit Application</button>
                  <div className="explore-link">
                    <a href="/careers">Explore jobs</a>
              </div>
                </form>
              ) : (
                <div className="success-card">
                  <img src="/images/Book.jpg" alt="Success" className="success-icon" />
                  <h2>Your Application is In!</h2>
                  <p>
                    Thank you for applying to join our team. Your passion inspires us and we can't wait to explore your talents!
                  </p>
                  <a href="/careers" className="explore-link">Explore more jobs</a>
              </div>
              )}
              </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyJob; 