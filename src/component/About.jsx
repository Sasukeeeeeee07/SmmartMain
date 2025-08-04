import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./About.css";
import Header from "./Header";
import santoshNair from "./images/Santosh Nair.JPG";
import sindhuNair from "./images/SindhuNair.JPG";
import Mehernosh from "./images/Mehernosh.jpeg";
import rajeshTanksali from "./images/Rajesh Tanksali - Accounts & Finance DGM (1).JPG";
import darshanMehta from "./images/Darshan Mehta.jpg";
import GeetaNaidu from "./images/Geeta Naidu Khan.JPG";
import Footer from "./Footer";
import { motion } from "framer-motion";
import SmmartText from './SmmartText';

const teamMembers = [
  {
    name: "Santosh Nair",
    position: "Position",
    bio: "Santosh Nair is one of India's most inspiring business transformation coaches and the visionary behind smmart Training & Consultancy Services and the Santosh Nair Online Academy. With over 25 years of experience, he has mentored more than 1.5 lakh entrepreneurs and partnered with over 100+ organizations, driving real change from the ground up. Known for his fearless energy, sharp insights, and futuristic approach, Santosh Nair empowers individuals to become self-led, high-performance leaders. At the heart of his work is a powerful mission to build a new future for Indian enterprise, driven by bold minds and unstoppable action.",
    image: santoshNair,
  },
  {
    name: "Sindhu Nair",
    position: "Position",
    bio: "I and my founder husband, Santosh Nair started smmart Training in Feb 2000 and its been operational successfully since then. Though we are based in Mumbai and Rajkot, we operate in Surat, Pune, Nagpur, Amravati, Raipur, Delhi, Hyderabad, Calicut, Cochin. With the online curriculum added to our portfolio, we have added Pan India and international clients to our circle. After working for decades with corporates and multi national companies, we shifted gear to focus extensively with MSME Entrepreneurs through our motivational programs, trainings, coaching, mentoring etc. We enhance their capability and have successfully helped transform more than 12 million individuals, entrepreneurs and their enterprises.",
    image: sindhuNair,
  },
  {
    name: "Mehernosh",
    position: "Position",
    bio: "With over 25 years of rich, multi-industry and multi-location leadership experience, I bring a powerful blend of strategic foresight, operational precision, and transformation capability to every organisation I serve. I operate at the intersection of strategy, adaptability, and execution—ensuring that vision is not only crafted but also converted into sustainable business outcomes. My Value Proposition: I help organisations scale smartly—by simplifying complexity, aligning teams to business goals, building future-ready capabilities, and embedding agility into operations.",
    image: Mehernosh,
  },
  {
    name: "Rajesh Tanksali",
    position: "Position",
    bio: "Rajesh brings over 20 years of experience in managing core functions of accounts, finance, taxation, and audits. At smmart, he oversees financial planning, compliance, fund management, and finalization of accounts, ensuring robust financial governance and strategic support to business operations.",
    image: rajeshTanksali,
  },
  {
    name: "Geeta Naidu Khan",
    position: "Position",
    bio: "A result-oriented, award-winning Customer Experience leader with over 16 years of experience in BFSI, Travel & Hospitality. Proven expertise in setting up back-office operations, building service frameworks, driving SLAs, and managing large teams across global markets. Known for strategic thinking, people leadership, process innovation, and consistently exceeding customer and stakeholder expectations.",
    image: GeetaNaidu,
  },
  {
    name: "Darshan Mehta",
    position: "Position",
    bio: "Darshan Mehta is the Director, Professional Trainer and Motivational Speaker at Vigour Learnings. T.I.G.E.R. Darshan Mehta has succeeded in creating passionate experiences for his listeners and motivated them with his impactful insights and in-depth knowledge.",
    image: darshanMehta,
  },
];

const TeamMemberCard = React.memo(({ member, isActive, onClick }) => (
  <motion.div
    className={`team-member-card ${isActive ? 'active' : ''}`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="card-image-container">
      <img src={member.image} alt={member.name} style={{ objectPosition: 'top' }} />
      {isActive && <div className="active-indicator"></div>}
    </div>
    <div className="card-content">
      <h3>{member.name}</h3>
      <p>{member.position}</p>
    </div>
  </motion.div>
));

const FeaturedMember = React.memo(({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const bioPreview = useMemo(() => {
    if (!member.bio) return '';
    if (expanded || member.bio.length <= 300) return member.bio;
    return member.bio.substring(0, 300) + '...';
  }, [member.bio, expanded]);

  return (
    <motion.div 
      className="featured-member"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="featured-content">
        <div className="featured-text">
          <motion.h2 className="sectiontitle">
            LEADERSHIP THAT THINKS <span className="smmart-text-small">smm<span>art</span></span>
          </motion.h2>
          <h1>{member.name}</h1>
          <h3>{member.position}</h3>
          <div className="bio-container">
            <p>{bioPreview}</p>
            {member.bio.length > 300 && (
              <button 
                className="read-more-btn" 
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>
        <div className="featured-image-container">
          <motion.img
            src={member.image}
            alt={member.name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
});

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselRef, setCarouselRef] = useState(null);

  const currentMember = useMemo(() => teamMembers[currentIndex], [currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  }, []);

  const handleSelect = useCallback((idx) => {
    setCurrentIndex(idx);
  }, []);

  useEffect(() => {
    if (carouselRef) {
      const activeCard = carouselRef.querySelector('.team-member-card.active');
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
    <div className="about-page">
      <Header />
      <div className="header-spacer"></div>
      
      <main className="about-content">
        {/* Carousel Nav Outer - Prev/Next on far left/right */}
        <div className="carousel-nav-outer">
          <button 
            className="nav-arrow nav-left" 
            onClick={handlePrev} 
            aria-label="Previous" 
            title="Previous"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="nav-arrow nav-right" 
            onClick={handleNext} 
            aria-label="Next" 
            title="Next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Featured Member Section */}
        <section className="featured-section">
          <FeaturedMember 
            member={currentMember} 
          />
        </section>

        {/* Team Carousel Section */}
        <section className="team-carousel-section">
          <div className="carousel-container">
            <div className="carousel-items" ref={setCarouselRef}>
              {teamMembers.map((member, idx) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  isActive={idx === currentIndex}
                  onClick={() => handleSelect(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;