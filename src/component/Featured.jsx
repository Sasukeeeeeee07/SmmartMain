import React, { useState, useRef } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SmmartText from './SmmartText';
import '../assets/Featured.css';
import '../assets/EventsSection.css';
import '../assets/EventsPerformance.css';
import santosh from './images/Santosh Nair.JPG';
// Import banner images
import egBatchBanner from '../assets/banners/EG_50th Batch Launch.jpg';
import pepTalkBanner from '../assets/banners/Peptalk.jpg';
import tigerBanner from '../assets/banners/T.I.G.E.R. BANNER WEBSITE.jpg';
import whyDoGoaBanner from '../assets/banners/why do goa.jpg';

const Featured = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsContainerRef = useRef(null);
  const navigate = useNavigate();
  // Event data with banner images
  const events = [
    {
      id: 1,
      title: 'Why do entrepreneurs fail to scale',
      image: whyDoGoaBanner,
      slug: 'why-entrepreneurs-fail-to-scale',
      date: 'July 28, 2025'
    },
    {
      id: 2,
      title: 'T.I.G.E.R. Program',
      image: tigerBanner,
      slug: 'tiger-program',
      date: 'July 10, 2025'
    },
    {
      id: 3,
      title: 'Pep Talk',
      image: pepTalkBanner,
      slug: 'pep-talk',
      date: 'July 25, 2025'
    },
    {
      id: 4,
      title: 'Entrepreneur Gurukul (50th Batch)',
      image: egBatchBanner,
      slug: 'entrepreneur-gurukul',
      date: 'July 31, 2025'
    }
  ];
  // Animation variants for framer-motion - optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Reduced stagger time
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30 // Reduced distance
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced duration
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 }, // Reduced distance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4 // Reduced duration
      }
    }
  };

  // We'll show all events at once since we only have 4
  const eventsPerPage = 4;
  const totalPages = 1;

  const handlePrevClick = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  };
  const handleEventClick = () => {
    navigate('/smmartevents');
  };

  const handleIndividualEventClick = (eventSlug) => {
    navigate(`/events/${eventSlug}`);
  };
  return (
    <LazyMotion features={domAnimation}>
      <div className="featured-section">
        {/* Meet Santosh Nair section */}      <motion.div
          className="meet-person"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="meet-info"
            initial={{ opacity: 0, x: -30 }} /* Reduced distance */
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} /* Faster animations */
          >
            <motion.div
              className="introducing"
              initial={{ opacity: 0, y: 15 }} /* Reduced distance */
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }} /* Faster animations */
            >
              <span>Introducing</span> <span className="highlight"><SmmartText>smmart</SmmartText></span>
            </motion.div>          <motion.h2
              className="meet-title"
              initial={{ opacity: 0, y: 15 }} /* Reduced distance */
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }} /* Faster animations */
            >
              Meet, <span color="orange">Santosh Nair</span>
            </motion.h2>
            <motion.p
              className="meet-description"
              initial={{ opacity: 0, y: 15 }} /* Reduced distance */
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }} /* Faster animations */
            >
              Santosh Nair is one of India's most inspiring business transformation coaches and the visionary behind <SmmartText>smmart</SmmartText> Training & Consultancy Services and the Santosh Nair Online Academy. With over 25 years of experience, he has mentored more than 1.5 lakh entrepreneurs and partnered with over 100+ organizations, driving real change from the ground up. Known for his fearless energy, sharp insights, and futuristic approach, Santosh Nair empowers individuals to become self-led, high-performance leaders. At the heart of his work is a powerful mission to build a new future for Indian enterprise, driven by bold minds and unstoppable action.
            </motion.p>
          </motion.div>        <motion.div
            className="meet-image"
            initial={{ opacity: 0, x: 30 }} /* Reduced distance */
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} /* Faster animations */
          >
            <motion.img
              src={santosh}
              alt="Santosh Nair"
              className="person-image"
              loading="lazy" /* For better performance */
              whileHover={{
                scale: 1.02, /* Reduced scale effect */
                transition: { duration: 0.2 } /* Faster transition */
              }}
            />
          </motion.div>
        </motion.div>

        {/* Upcoming events section */}
        <motion.div
          className="events-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ marginTop: '80px' }}
        >
          <div className="events-container">
            <motion.div
              className="events-header"
              variants={headerVariants}
            >
              <h2 className="events-heading">
                <SmmartText>smmart</SmmartText> EVENTS
              </h2>
              <span className="events-heading-accent"></span>
            </motion.div>

            <motion.div
              className="events-grid"
              ref={eventsContainerRef}
              variants={containerVariants}
            >
              {events.map((event, index) => (<motion.div
                key={event.id}
                className="event-banner-card"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onClick={() => handleIndividualEventClick(event.slug)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-banner-image"
                  loading="lazy"
                />
              </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="events-cta-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button className="view-all-events-btn" onClick={handleEventClick}>
                View All Events
                <span className="btn-arrow">→</span>
              </button>
            </motion.div>
          </div>
        </motion.div>    </div>
    </LazyMotion>
  );
};

export default Featured;