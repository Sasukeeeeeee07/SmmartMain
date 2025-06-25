import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import santoshNair from './images/santosh.jpg';
import sindhuNair from './images/sindhu.jpg';
import anupNair from './images/anup.jpg';
import rajeshTanksali from './images/rajesh.jpg';
import himanshuTiwari from './images/himanshu.jpg';
import darshanMehta from './images/darshan.jpg';
import jasmineThakker from './images/jasmine.jpg';
import Footer from './Footer';

const teamMembers = [
  {
    name: 'Santosh Nair',
    position: 'CHAIRMAN & CHIEF ENERGY OFFICER',
    bio: 'T.I.G.E.R. Santosh Nair is a Leading Author, a Life Coach, Business Transformation Guru, Motivational Speaker, and Chairman at smmart Training & Consultancy.',
    image: santoshNair
  },
  {
    name: 'Sindhu Nair',
    position: 'CO-FOUNDER & DIRECTOR',
    bio: 'Sindhu Nair brings extensive experience in business development and strategic planning to the smmart team.',
    image: sindhuNair
  },
  {
    name: 'Anup Nair',
    position: 'DIRECTOR',
    bio: 'Anup Nair is a seasoned professional with expertise in operations and team management.',
    image: anupNair
  },
  {
    name: 'Rajesh Tanksali',
    position: 'DGM, FINANCE & ACCOUNTS',
    bio: 'With an experience of 18 years, Mr Tanksali is a true veteran at smmart. He has been instrumental in streamlining financial processes and enhancing the fiscal integrity of the organization.',
    image: rajeshTanksali
  },
  {
    name: 'Himanshu Tiwari',
    position: 'DIRECTOR',
    bio: 'Himanshu Tiwari brings his expertise in marketing and business strategy to the leadership team.',
    image: himanshuTiwari
  },
  {
    name: 'Darshan Mehta',
    position: 'DIRECTOR',
    bio: 'Darshan Mehta is known for his exceptional skills in financial management and business growth.',
    image: darshanMehta
  },
  {
    name: 'Jasmine Thakker',
    position: 'DIRECTOR',
    bio: 'Jasmine Thakker adds her unique perspective and experience in human resources and organizational development.',
    image: jasmineThakker
  }
];

// Example 12 cards for Sigma section
const sigmaTeam = [
  {
    name: 'T.I.G.E.R. Santosh Nair',
    title: 'Chairman | Chief Mentor | Trainer',
    desc: 'T.I.G.E.R. Santosh Nair is a Leading Author and Life Coach, Business Transformation Guru & Motivational Speaker, Chairman at smmart Training & Consultancy.',
    image: santoshNair
  },
  {
    name: 'Yatin Samant',
    title: 'Coach',
    desc: 'Yatin has 34 years of experience leading Sales, Marketing, Business Development, and General Management across India and Asia Pacific.',
    image: sindhuNair
  },
  {
    name: 'Mrs. Sindhu Santosh Nair',
    title: 'Co-founder | Coach',
    desc: 'Sindhu Nair along with her husband Santosh Nair started smmart Training in Feb 2000 and its been operational successfully since then.',
    image: sindhuNair
  },
  {
    name: 'Nayan Kotian',
    title: 'Trainer',
    desc: 'A Qualified Industrial Electronics Engineer, Nayan comes with over 29 years of rich experience in Sales, Sales Management, Business Development.',
    image: anupNair
  },
  {
    name: 'Rajesh Tagore',
    title: 'Trainer',
    desc: 'Rajesh Tagore Is the Founder of Leader Factory-Sales and Leadership Training Center in Mumbai.',
    image: rajeshTanksali
  },
  {
    name: 'Deepak Dhabalia',
    title: 'Trainer',
    desc: 'Deepak Dhabalia, popularly known as the Money Multiplier is the Founder of DDs Real Wealth Maximizer.',
    image: himanshuTiwari
  },
  {
    name: 'Vijayalakshmi Suvarna',
    title: 'Coach | Trainer',
    desc: 'She is known for real time, forthright, no-nonsense solutions to complex people problems.',
    image: jasmineThakker
  },
  {
    name: 'Mihir Chawda',
    title: 'Trainer',
    desc: 'Mihir Chavda is a Keynote Speaker, an established Trainer, Actor, Voice Over Artist, Entertainer, Value Creator and a Storyteller.',
    image: darshanMehta
  },
  {
    name: 'Amol Muley',
    title: 'Trainer',
    desc: 'Amol Muley Transformed 1000 companies in 40 different industries. He is a Mumbai-based Trainer, Coach, Consultant.',
    image: santoshNair
  },
  {
    name: 'Satish Villait',
    title: 'Chairman | Chief Mentor | Trainer',
    desc: 'SATISH A VILLAIT is an exceptional business coach and the founder of bitsydisplays.com, Bitsy.biz, Joyvirus.com.',
    image: anupNair
  },
  {
    name: 'CA Vishal Thakkar',
    title: 'Trainer',
    desc: 'Vishal is qualified Chartered Accountant, MBA (Fin), GFMB faculty at SP Jain School of Global Management.',
    image: himanshuTiwari
  },
  {
    name: 'Gaurav Trivedi',
    title: 'Trainer',
    desc: 'Gaurav is Having diversified experience of 17+ years of working with various industries like IT, Academics, ISP.',
    image: darshanMehta
  }
];

function SigmaTeamSection() {
  return (
    <div className="sigma-team-section">
      <h2 className="sigma-team-title">
        Meet the smmart Training Team
      </h2>
      <div className="sigma-team-cards">
        {sigmaTeam.map((member, idx) => (
          <div className="sigma-card" key={idx}>
            <div className="sigma-card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="sigma-card-content">
              <div className="sigma-card-title">{member.name}</div>
              <div className="sigma-card-role">{member.title}</div>
              <div className="sigma-card-desc">{member.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SigmaGlowingCard() {
  return (
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - 300px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      background: 'none',
      marginTop: 24,
      marginBottom: 24,
    }}>
      <div
        style={{
          background: 'rgba(20, 25, 40, 0.85)',
          borderRadius: 20,
          boxShadow: '0 0 40px 8px #fff, 0 4px 32px rgba(255,255,255,0.18)',
          padding: '40px 36px',
          maxWidth: 900,
          width: '100%',
          margin: '0 16px',
          textAlign: 'center',
          border: '2px solid rgba(255,255,255,0.12)',
        }}
      >
        <div style={{
          fontWeight: 700,
          fontSize: 32,
          color: '#fff',
          marginBottom: 12,
          textShadow: '0 0 12px #fff, 0 0 24px #fff',
        }}>
          T.I.G.E.R. Aditya Singh Rajawat
        </div>
        <div style={{
          color: '#3fa1ff',
          fontWeight: 600,
          fontSize: 20,
          marginBottom: 24,
        }}>
          Trainer
        </div>
        <div style={{
          color: '#fff',
          fontSize: 20,
          lineHeight: 1.6,
          letterSpacing: 0.2,
        }}>
          T.I.G.E.R. Aditya Singh is a dynamic trainer specializing in professional sales and individual transformation. Since 2005, he has addressed over 5 lakh people, transformed 2,500+ MNC team members, and supported 1 lakh insurance professionals. Known for activity-driven workshops, Aditya excels in Selling Skills, Sales Mastery, Telephone Handling, Objection Handling, and Retail & Channel Management.
        </div>
      </div>
    </div>
  );
}

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = teamMembers[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };
  const handleSelect = (idx) => setCurrentIndex(idx);

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <h2 className="subtitle">Leadership that thinks smmart</h2>
        <div className="leader-info">
          <h1 className="leader-name">{current.name}</h1>
          <h3 className="leader-title">{current.position}</h3>
          <p className="leader-description">{current.bio}</p>
        </div>
        <div className="leader-image">
          <img src={current.image} alt={current.name} />
        </div>
      </div>
      <div className="people-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <button className="nav-arrow left" onClick={handlePrev} style={{ fontSize: 32, background: 'none', border: 'none', color: '#5da9e9', cursor: 'pointer' }}>&lt;</button>
        {teamMembers.map((person, idx) => (
          <div
            key={person.name}
            className={`person-card${idx === currentIndex ? ' active' : ''}`}
            style={{ margin: '0 8px', border: idx === currentIndex ? '3px solid #5da9e9' : '3px solid transparent', borderRadius: '50%', transition: 'border 0.2s' }}
            onClick={() => handleSelect(idx)}
          >
            <img src={person.image} alt={person.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }} />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: 8 }}>{person.name}</p>
          </div>
        ))}
        <button className="nav-arrow right" onClick={handleNext} style={{ fontSize: 32, background: 'none', border: 'none', color: '#5da9e9', cursor: 'pointer' }}>&gt;</button>
      </div>
      <SigmaTeamSection />
      <SigmaGlowingCard />
      <Footer />
    </div>
  );
}

export default About;