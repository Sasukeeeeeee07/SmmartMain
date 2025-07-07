import React, { useState, useEffect } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

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
    desc: 'Santosh Nair is one of India’s most inspiring business transformation coaches and the visionary behind smmart Training & Consultancy Services and the Santosh Nair Online Academy. With over 25 years of experience, he has mentored more than 1.5 lakh entrepreneurs and partnered with over 100+ organizations, driving real change from the ground up. Known for his fearless energy, sharp insights, and futuristic approach, Santosh Nair empowers individuals to become self-led, high-performance leaders. At the heart of his work is a powerful mission to build a new future for Indian enterprise, driven by bold minds and unstoppable action.',
    image: santoshNair
  },
  {
    name: 'Mehernosh',
    title: 'Coach',
    desc: 'With over 25 years of rich, multi-industry and multi-location leadership experience, I bring a powerful blend of strategic foresight, operational precision, and transformation capability to every organisation I serve. I operate at the intersection of strategy, adaptability, and execution—ensuring that vision is not only crafted but also converted into sustainable business outcomes. My Value Proposition: I help organisations scale smartly—by simplifying complexity, aligning teams to business goals, building future-ready capabilities, and embedding agility into operations. Whether leading change, building new revenue engines, or reimagining structures, I drive performance through purpose. Key Contributions: - Spearheaded multi-location and multi-industry transformations across consulting, education, digital, and healthcare sectors - Led high-impact turnarounds through process innovation, strategic realignment, and revenue optimisation - Mentored CXOs and emerging leaders to develop strong internal pipelines and cultures of accountability - Integrated AI-readiness and data-driven decision-making into legacy systems for future resilience. My Skill Identity & Executive Presence: I am often seen as a strategic catalyst and calm executor—someone who can articulate the larger picture while driving granular excellence. My executive presence is grounded in authenticity, clarity, and the ability to lead with both empathy and impact. Skillset Snapshot: - Strategic Planning & Business Design - Operational Leadership & P&L Management - Change & Crisis Management - Team Alignment & Capability Building - Brand Communication & Stakeholder Engagement - Data & AI Integration for Business Decision Making.',
    image: sindhuNair
  },
  {
    name: 'Mrs. Sindhu Santosh Nair',
    title: 'Co-founder | Coach',
    desc: 'I and my founder husband, Santosh Nair started smmart Training in Feb 2000 and its been operational successfully since then.Though we are based in Mumbai and Rajkot, we operate in Surat, Pune, Napgur, Amravati, Raipur, Delhi, Hyderabad, Calicut, Cochin. With the online curriculum added to our portfolio, we have added Pan India and international clients to our circle.After working for decades with corporates and multi national companies, we shifted gear to focus extensively with MSME Entrepreneurs thru our motivational programs, trainings, coaching, mentoring etc etc. We enhance their capability and have successfully helped transform more than 12 million individuals, entrepreneurs and their enterprises.We organise and also execute motivational programs, workshops, training interventions, review audits, Organisational need analysis, Training need analysis, creating systems & processes and making organisations future ready!.Our focus is implementation and not just Training.We have a fleet of highly acclaimed Trainers, coaches and OD Experts. Our set of Trainers and Business enhancers are key to us. We are always on the lookout for a Talent pool that is high on energy, ambitious, having a maverick mindset and willing to leave an inedible mark In our growth trajectory.Our journey is still on and we are ably guided by our chairmans strong BHAG to be the Harvard of entrepreneur transformation, create 100 million success stories and become a billion dollar company by 2035.',
    image: sindhuNair
  },
  {
    name: 'Geeta Naidu Khan',
    title: 'Trainer',
    desc: 'A result-oriented, award-winning Customer Experience leader with over 16 years of experience in BFSI, Travel & Hospitality. Proven expertise in setting up back-office operations, building service frameworks, driving SLAs, and managing large teams across global markets. Known for strategic thinking, people leadership, process innovation, and consistently exceeding customer and stakeholder expectations.',
    image: anupNair
  },
  {
    name: 'Darshan Mehta',
    title: 'Director | Professional Trainer | Motivational Speaker',
    desc: 'Darshan Mehta is the Director, Professional Trainer and Motivational Speaker at Vigour Learnings.T.I.G.E.R. Darshan Mehta has succeeded in creating passionate experiences for his listeners and motivated them with his impactful insights and in-depth knowledge. After attending his sessions, an individual not only gets motivated for his professional growth, but also develops his personality, confidence, and intellectual level, and is able to see a new transformation in his life!',
    image: rajeshTanksali
  },
  {
    name: 'Rajesh Tanksali',
    title: 'Deputy General Manager – Accounts & Finance',
    desc: 'Rajesh brings over 20 years of experience in managing core functions of accounts, finance, taxation, and audits. At smmart, he oversees financial planning, compliance, fund management, and finalization of accounts, ensuring robust financial governance and strategic support to business operations.',
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
  const [selectedMember, setSelectedMember] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Ensure dialog opens within the visible view area of the section
  const openDialog = (member, event) => {
    setSelectedMember(member);
    setDialogOpen(true);
    setTimeout(() => {
      const dialogElement = document.querySelector('.dialog-box');
      if (dialogElement) {
        const cardRect = event.target.closest('.sigma-card').getBoundingClientRect();
        const sectionRect = document.querySelector('.sigma-team-section').getBoundingClientRect();

        const topPosition = cardRect.top - sectionRect.top;
        const leftPosition = cardRect.left - sectionRect.left;

        dialogElement.style.position = 'absolute';
        dialogElement.style.top = `${topPosition}px`;
        dialogElement.style.left = `${leftPosition}px`;
        dialogElement.style.transform = 'translate(0, 0)';
      }
    }, 0);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const isLongText = (text) => {
    return text && text.length > 150;
  };

  const truncateText = (text, maxLength = 150) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <motion.div
      className="sigma-team-section"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h2 className="sigma-team-title" variants={textVariants}>
        Meet the smmart Training Team
      </motion.h2>
      <div className="sigma-team-cards">
        {sigmaTeam.map((member, idx) => (
          <motion.div
            className="sigma-card"
            key={idx}
            variants={cardVariants}
            onClick={(e) => openDialog(member, e)}
          >
            <div className="sigma-card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="sigma-card-content">
              <motion.div
                className="sigma-card-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {member.name}
              </motion.div>
              <motion.div
                className="sigma-card-role"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {member.title}
              </motion.div>
              <motion.div
                className="sigma-card-desc"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {truncateText(member.desc)}
                {isLongText(member.desc) && (
                  <motion.button
                    className="read-more-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openDialog(member);
                    }}
                  >
                    Read More
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog isOpen={dialogOpen} onClose={closeDialog} member={selectedMember} />
    </motion.div>
  );
}

function SigmaGlowingCard() {
  const glowingCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Text animation variants with staggered delays
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const roleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.5 }
    }
  };

  return (
    <motion.div
      style={{
        width: '100%',
        minHeight: 'calc(100vh - 300px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: 'none',
        marginTop: 24,
        marginBottom: 24,
      }}
      initial="hidden"
      animate="visible"
      variants={glowingCardVariants}
    >
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
        <motion.div
          style={{
            fontWeight: 700,
            fontSize: 32,
            color: '#fff',
            marginBottom: 12,
            textShadow: '0 0 12px #fff, 0 0 24px #fff',
          }}
          variants={titleVariants}
        >
          T.I.G.E.R. Aditya Singh Rajawat
        </motion.div>
        <motion.div
          style={{
            color: '#3fa1ff',
            fontWeight: 600,
            fontSize: 20,
            marginBottom: 24,
          }}
          variants={roleVariants}
        >
          Trainer
        </motion.div>
        <motion.div
          style={{
            color: '#fff',
            fontSize: 20,
            lineHeight: 1.6,
            letterSpacing: 0.2,
          }}
          variants={descVariants}
        >
          T.I.G.E.R. Aditya Singh is a dynamic trainer specializing in professional sales and individual transformation. Since 2005, he has addressed over 5 lakh people, transformed 2,500+ MNC team members, and supported 1 lakh insurance professionals. Known for activity-driven workshops, Aditya excels in Selling Skills, Sales Mastery, Telephone Handling, Objection Handling, and Retail & Channel Management.
        </motion.div>
      </div>
    </motion.div>
  );
}

// Dialog component for displaying team member details
function Dialog({ isOpen, onClose, member }) {
  useEffect(() => {
    // Prevent body scrolling when dialog is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (!isOpen || !member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dialog-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="dialog-content"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dialog-header">
              <h2>{member.name}</h2>
              <button className="dialog-close" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="dialog-body">
              <div className="dialog-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="dialog-image"
                />
              </div>
              <h3 className="dialog-title">{member.title}</h3>
              <p className="dialog-description">{member.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
    <motion.div className="about-page-wrapper">
      <Header />
      <div className="header-spacer" style={{ height: '80px' }}></div>
      <div className="main-content">
        <motion.h2 className="subtitle">Leadership that thinks smmart</motion.h2>
        <motion.div className="leader-info">
          <motion.h1 className="leader-name">{current.name}</motion.h1>
          <motion.h3 className="leader-title">{current.position}</motion.h3>
          <motion.p className="leader-description">{current.bio}</motion.p>
        </motion.div>
        <div className="leader-image">
          <img src={current.image} alt={current.name} />
        </div>
      </div>
      <div className="people-section">
        <div className="carousel-container">
          <button className="nav-arrow left" onClick={handlePrev}>&lt;</button>
          <div className="carousel-items">
            {teamMembers.map((person, idx) => (
              <motion.div
                key={person.name}
                className={`person-card${idx === currentIndex ? ' active' : ''}`}
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleSelect(idx)}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: idx === currentIndex
                      ? '3px solid #5da9e9'
                      : '3px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                />
                <motion.p>{person.name}</motion.p>
              </motion.div>
            ))}
          </div>
          <button className="nav-arrow right" onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <SigmaTeamSection />
      <Footer />
    </motion.div>
  );
}

export default About;