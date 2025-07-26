import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import santoshNair from "./images/Santosh Nair.JPG";
import sindhuNair from "./images/SindhuNair.JPG";
import Mehernosh from "./images/Mehernosh.jpeg";
import rajeshTanksali from "./images/Rajesh Tanksali - Accounts & Finance DGM (1).JPG";
import darshanMehta from "./images/Darshan Mehta.jpg";
import GeetaNaidu from "./images/Geeta Naidu Khan.JPG";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import SmmartText from './SmmartText';

const teamMembers = [
  {
    name: "Santosh Nair",
    position: "CHAIRMAN & CHIEF ENERGY OFFICER",
    bio: "T.I.G.E.R. Santosh Nair is a Leading Author, a Life Coach, Business Transformation Guru, Motivational Speaker, and Chairman at smmart Training & Consultancy.",
    image: santoshNair,
  },
  {
    name: "Sindhu Nair",
    position: "CO-FOUNDER & DIRECTOR",
    bio: "I and my founder husband, Santosh Nair started smmart Training in Feb 2000 and its been operational successfully since then.Though we are based in Mumbai and Rajkot, we operate in Surat, Pune, Napgur, Amravati, Raipur, Delhi, Hyderabad, Calicut, Cochin. With the online curriculum added to our portfolio, we have added Pan India and international clients to our circle.After working for decades with corporates and multi national companies, we shifted gear to focus extensively with MSME Entrepreneurs thru our motivational programs, trainings, coaching, mentoring etc etc. We enhance their capability and have successfully helped transform more than 12 million individuals, entrepreneurs and their enterprises.We organise and also execute motivational programs, workshops, training interventions, review audits, Organisational need analysis, Training need analysis, creating systems & processes and making organisations future ready!.Our focus is implementation and not just Training.",
    image: sindhuNair,
  },
  {
    name: "Mehernosh",
    position: "DIRECTOR",
    bio: "Anup Nair is a seasoned professional with expertise in operations and team management.",
    image: Mehernosh,
  },
  {
    name: "Rajesh Tanksali",
    position: "DGM, FINANCE & ACCOUNTS",
    bio: "With an experience of 18 years, Mr Tanksali is a true veteran at smmart. He has been instrumental in streamlining financial processes and enhancing the fiscal integrity of the organization.",
    image: rajeshTanksali,
  },
  {
    name: "Geeta Naidu Khan",
    position: "DIRECTOR",
    bio: "Himanshu Tiwari brings his expertise in marketing and business strategy to the leadership team.",
    image: GeetaNaidu,
  },
  {
    name: "Darshan Mehta",
    position: "DIRECTOR",
    bio: "Darshan Mehta is known for his exceptional skills in financial management and business growth.",
    image: darshanMehta,
  },
];

const sigmaTeam = [
  {
    name: "T.I.G.E.R. Santosh Nair",
    title: "Chairman | Chief Mentor | Trainer",
    desc: "Santosh Nair is one of India's most inspiring business transformation coaches and the visionary behind smmart Training & Consultancy Services and the Santosh Nair Online Academy. With over 25 years of experience, he has mentored more than 1.5 lakh entrepreneurs and partnered with over 100+ organizations, driving real change from the ground up. Known for his fearless energy, sharp insights, and futuristic approach, Santosh Nair empowers individuals to become self-led, high-performance leaders. At the heart of his work is a powerful mission to build a new future for Indian enterprise, driven by bold minds and unstoppable action.",
    image: santoshNair,
  },
  {
    name: "Mehernosh",
    title: "Coach",
    desc: "With over 25 years of rich, multi-industry and multi-location leadership experience, I bring a powerful blend of strategic foresight, operational precision, and transformation capability to every organisation I serve. I operate at the intersection of strategy, adaptability, and execution—ensuring that vision is not only crafted but also converted into sustainable business outcomes. My Value Proposition: I help organisations scale smartly—by simplifying complexity, aligning teams to business goals, building future-ready capabilities, and embedding agility into operations. Whether leading change, building new revenue engines, or reimagining structures, I drive performance through purpose. Key Contributions: - Spearheaded multi-location and multi-industry transformations across consulting, education, digital, and healthcare sectors - Led high-impact turnarounds through process innovation, strategic realignment, and revenue optimisation - Mentored CXOs and emerging leaders to develop strong internal pipelines and cultures of accountability - Integrated AI-readiness and data-driven decision-making into legacy systems for future resilience. My Skill Identity & Executive Presence: I am often seen as a strategic catalyst and calm executor—someone who can articulate the larger picture while driving granular excellence. My executive presence is grounded in authenticity, clarity, and the ability to lead with both empathy and impact. Skillset Snapshot: - Strategic Planning & Business Design - Operational Leadership & P&L Management - Change & Crisis Management - Team Alignment & Capability Building - Brand Communication & Stakeholder Engagement - Data & AI Integration for Business Decision Making.",
    image: Mehernosh,
  },
  {
    name: "Mrs. Sindhu Santosh Nair",
    title: "Co-founder | Coach",
    desc: "I and my founder husband, Santosh Nair started smmart Training in Feb 2000 and its been operational successfully since then.Though we are based in Mumbai and Rajkot, we operate in Surat, Pune, Napgur, Amravati, Raipur, Delhi, Hyderabad, Calicut, Cochin. With the online curriculum added to our portfolio, we have added Pan India and international clients to our circle.After working for decades with corporates and multi national companies, we shifted gear to focus extensively with MSME Entrepreneurs thru our motivational programs, trainings, coaching, mentoring etc etc. We enhance their capability and have successfully helped transform more than 12 million individuals, entrepreneurs and their enterprises.We organise and also execute motivational programs, workshops, training interventions, review audits, Organisational need analysis, Training need analysis, creating systems & processes and making organisations future ready!.Our focus is implementation and not just Training.We have a fleet of highly acclaimed Trainers, coaches and OD Experts. Our set of Trainers and Business enhancers are key to us. We are always on the lookout for a Talent pool that is high on energy, ambitious, having a maverick mindset and willing to leave an inedible mark In our growth trajectory.Our journey is still on and we are ably guided by our chairmans strong BHAG to be the Harvard of entrepreneur transformation, create 100 million success stories and become a billion dollar company by 2035.",
    image: sindhuNair,
  },
  {
    name: "Geeta Naidu Khan",
    title: "Trainer",
    desc: "A result-oriented, award-winning Customer Experience leader with over 16 years of experience in BFSI, Travel & Hospitality. Proven expertise in setting up back-office operations, building service frameworks, driving SLAs, and managing large teams across global markets. Known for strategic thinking, people leadership, process innovation, and consistently exceeding customer and stakeholder expectations.",
    image: GeetaNaidu,
  },
  {
    name: "Darshan Mehta",
    title: "Director | Professional Trainer | Motivational Speaker",
    desc: "Darshan Mehta is the Director, Professional Trainer and Motivational Speaker at Vigour Learnings.T.I.G.E.R. Darshan Mehta has succeeded in creating passionate experiences for his listeners and motivated them with his impactful insights and in-depth knowledge. After attending his sessions, an individual not only gets motivated for his professional growth, but also develops his personality, confidence, and intellectual level, and is able to see a new transformation in his life!",
    image: darshanMehta,
  },
  {
    name: "Rajesh Tanksali",
    title: "Deputy General Manager – Accounts & Finance",
    desc: "Rajesh brings over 20 years of experience in managing core functions of accounts, finance, taxation, and audits. At smmart, he oversees financial planning, compliance, fund management, and finalization of accounts, ensuring robust financial governance and strategic support to business operations.",
    image: rajeshTanksali,
  },
];

// Memoized components for better performance
const PersonCard = React.memo(({ person, idx, currentIndex, onSelect }) => (
  <motion.div
    className={`person-card${idx === currentIndex ? " active" : ""}`}
    style={{ cursor: "pointer" }}
    whileHover={{ scale: 1.05 }}
    onClick={() => onSelect(idx)}
  >
    <img
      src={person.image}
      alt={person.name}
      style={{
        width: 120,
        height: 120,
        borderRadius: "50%",
        objectFit: "cover",
        border: idx === currentIndex ? "3px solid #5da9e9" : "3px solid transparent",
        transition: "all 0.3s ease",
      }}
    />
    <motion.p>{person.name}</motion.p>
  </motion.div>
));

const SigmaCard = React.memo(({ member, idx, onReadMore }) => {
  const isLongText = member.desc && member.desc.length > 150;
  const truncateText = (text, maxLength = 150) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <motion.div
      className="sigma-card"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
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
          <SmmartText>{member.name}</SmmartText>
        </motion.div>
        <motion.div
          className="sigma-card-role"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SmmartText>{member.title}</SmmartText>
        </motion.div>
        <motion.div
          className="sigma-card-desc"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SmmartText>{truncateText(member.desc)}</SmmartText>
          {isLongText && (
            <motion.button
              className="read-more-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={(e) => onReadMore(member, e)}
            >
              Read More
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
});

const Dialog = React.memo(({ isOpen, onClose, member, type }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2><SmmartText>{member.name}</SmmartText></h2>
          <button className="dialog-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="dialog-content">
          <img
            src={member.image}
            alt={member.name}
            className="dialog-image"
          />
          <h3><SmmartText>{type === 'sigma' ? member.title : member.position}</SmmartText></h3>
          <p><SmmartText>{type === 'sigma' ? member.desc : member.bio}</SmmartText></p>
        </div>
      </div>
    </div>
  );
});

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeaderDialog, setShowLeaderDialog] = useState(false);
  const [dialogLeader, setDialogLeader] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [carouselRef, setCarouselRef] = useState(null);

  const current = useMemo(() => teamMembers[currentIndex], [currentIndex]);

  // Optimized event handlers
  const handleReadmore = useCallback(() => {
    setDialogLeader(current);
    setShowLeaderDialog(true);
  }, [current]);

  const handlecloseDialog = useCallback(() => setShowLeaderDialog(false), []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  }, []);

  const handleSelect = useCallback((idx) => setCurrentIndex(idx), []);

  const handleReadMore = useCallback((member, e) => {
    e.stopPropagation();
    setSelectedMember(member);
    setDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => setDialogOpen(false), []);

  // Auto-scroll carousel to center active item on mobile
  useEffect(() => {
    if (carouselRef && window.innerWidth <= 768) {
      const activeCard = carouselRef.querySelector('.person-card.active');
      if (activeCard) {
        const containerWidth = carouselRef.offsetWidth;
        const cardLeft = activeCard.offsetLeft;
        const cardWidth = activeCard.offsetWidth;
        const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        
        carouselRef.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, carouselRef]);

  return (
    <>
      <motion.div className="about-page-wrapper">
        <Header />
        <div className="header-spacer" style={{ height: "80px" }}></div>
        <div className="main-content">
          <motion.h2 className="subtitle">
            Leadership that thinks <span className="smmart-text"><span className="smm">smm</span><span className="art">art</span></span>
          </motion.h2>
          <motion.div className="leader-info">
            <motion.h1 className="leader-name">{current.name}</motion.h1>
            <motion.h3 className="leader-title">{current.position}</motion.h3>
            <motion.p className="leader-description">
              <SmmartText>{current.bio}</SmmartText>
            </motion.p>
            <button className="leader-read-more" onClick={handleReadmore}>
              Read More
            </button>
          </motion.div>
          <div className="leader-image">
            <img src={current.image} alt={current.name} />
          </div>
        </div>
        
        <Dialog 
          isOpen={showLeaderDialog} 
          onClose={handlecloseDialog} 
          member={dialogLeader} 
          type="leader"
        />
        
        <div className="people-section">
          <div className="carousel-container">
            <button 
              className="nav-arrow left" 
              onClick={handlePrev} 
              style={{ 
                borderRadius: '50%', 
                background: 'rgba(93,169,233,0.15)', 
                border: 'none', 
                boxShadow: '0 2px 8px rgba(93,169,233,0.15)', 
                width: 44, 
                height: 44, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: 8 
              }}
            >
              <span style={{ fontSize: '2rem', color: '#1a365d', fontWeight: 700 }}>&lt;</span>
            </button>
            <div 
              className="carousel-items" 
              ref={setCarouselRef}
            >
              {teamMembers.map((person, idx) => (
                <PersonCard
                  key={person.name}
                  person={person}
                  idx={idx}
                  currentIndex={currentIndex}
                  onSelect={handleSelect}
                />
              ))}
            </div>
            <button 
              className="nav-arrow right" 
              onClick={handleNext} 
              style={{ 
                borderRadius: '50%', 
                background: 'rgba(93,169,233,0.15)', 
                border: 'none', 
                boxShadow: '0 2px 8px rgba(93,169,233,0.15)', 
                width: 44, 
                height: 44, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 8 
              }}
            >
              <span style={{ fontSize: '2rem', color: '#1a365d', fontWeight: 700 }}>&gt;</span>
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="sigma-team-section"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2 
          className="sigma-team-title" 
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          Meet the <span className="smmart-text"><span className="smm">smm</span><span className="art">art</span></span> Training Team
        </motion.h2>
        <div className="sigma-team-cards">
          {sigmaTeam.map((member, idx) => (
            <SigmaCard
              key={member.name}
              member={member}
              idx={idx}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </motion.div>
      
      <Dialog 
        isOpen={dialogOpen} 
        onClose={handleCloseDialog} 
        member={selectedMember} 
        type="sigma"
      />
      
      <Footer />
    </>
  );
}

export default About;