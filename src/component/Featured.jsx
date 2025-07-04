import React, { useState, useRef } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import '../assets/Featured.css';
import '../assets/EventsSection.css';
import '../assets/EventsPerformance.css';
import santosh from './images/santoshnairfeature.jpg';
// Import banner images
import egBatchBanner from '../assets/banners/EG_50th Batch Launch.jpg';
import pepTalkBanner from '../assets/banners/Peptalk.jpg';
import tigerBanner from '../assets/banners/T.I.G.E.R. BANNER WEBSITE.jpg';
import whyDoGoaBanner from '../assets/banners/why do goa.jpg';

const Featured = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsContainerRef = useRef(null);

  // Event data with banner images
  const events = [
    {
      id: 1,
      title: 'Why do entrepreneurs fail to scale',
      image: whyDoGoaBanner,
      // link: 'https://example.com/why-do-entrepreneurs',
      date: 'July 28, 2025'
    },
    {
      id: 2,
      title: 'T.I.G.E.R. Program',
      image: tigerBanner,
      // link: 'https://example.com/tiger-program',
      date: 'July 10, 2025'
    },
    {
      id: 3,
      title: 'Pep Talk',
      image: pepTalkBanner,
      // link: 'https://example.com/pep-talk',
      date: 'July 25, 2025'
    },
    {
      id: 4,
      title: 'Entrepreneur Gurukul (50th Batch)',
      image: egBatchBanner,
      // link: 'https://example.com/entrepreneur-gurukul',
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
              <span>Introducing</span> <span className="highlight">smmart</span>
            </motion.div>          <motion.h2
              className="meet-title"
              initial={{ opacity: 0, y: 15 }} /* Reduced distance */
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }} /* Faster animations */
            >
              Meet, <span className="purple-text">Santosh Nair</span>
            </motion.h2>
            <motion.p
              className="meet-description"
              initial={{ opacity: 0, y: 15 }} /* Reduced distance */
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }} /* Faster animations */
            >
              Santosh Nair is one of India's most inspiring business transformation coaches and the visionary behind smmart Training & Consultancy Services and the Santosh Nair Online Academy. With over 25 years of experience, he has mentored more than 1.5 lakh entrepreneurs and partnered with over 100+ organizations, driving real change from the ground up. Known for his fearless energy, sharp insights, and futuristic approach, Santosh Nair empowers individuals to become self-led, high-performance leaders. At the heart of his work is a powerful mission to build a new future for Indian enterprise, driven by bold minds and unstoppable action.
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
        >
          <div className="events-container">            <motion.div
              className="events-header"
              variants={headerVariants}
            >
              <h2 className="section-title" style={{ textTransform: 'none' }}>smmart EVENTS</h2>
              <div className="events-description">

              </div>
            </motion.div><motion.div
              className="events-grid"
              ref={eventsContainerRef}
              variants={containerVariants}
              style={{ maxWidth: '1400px', margin: '0 auto' }}
            >
              {events.map(event => (<motion.div
                key={event.id}
                className="event-card"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                layoutId={`event-card-${event.id}`}
              >                <a href={event.link} className="event-link">
                  <div
                    className="event-image-container"
                    style={{
                      height: '250px',
                      width: '100%',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      padding: '0',
                      margin: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-image"
                      loading="eager"
                      style={{
                        objectFit: 'scale-down',
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  </div>
                </a>
              </motion.div>
              ))}
            </motion.div>

            {totalPages > 1 && (
              <div className="event-indicators">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${currentPage === index ? 'active' : ''}`}
                    onClick={() => setCurrentPage(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>    </div>
    </LazyMotion>
  );
};

export default Featured;