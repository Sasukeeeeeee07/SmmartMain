import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import SmmartText from './SmmartText';
import './EventDetail.css';

// Import banner images
import egBatchBanner from '../assets/banners/EG_50th Batch Launch.jpg';
import pepTalkBanner from '../assets/banners/Peptalk.jpg';
import tigerBanner from '../assets/banners/T.I.G.E.R. BANNER WEBSITE.jpg';
import whyDoGoaBanner from '../assets/banners/why do goa.jpg';

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Hook to track window width for responsive behavior
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced event data with more details
  const eventsData = {
    'entrepreneur-gurukul': {
      id: 1,
      title: 'Entrepreneur Gurukul (50th Batch)',
      image: egBatchBanner,
      date: 'July 31, 2025',
      duration: '3 Days',
      location: 'Mumbai, India',
      category: 'Business Training',
      description: 'Join our flagship program - the 50th batch of Entrepreneur Gurukul. Transform your entrepreneurial journey with comprehensive training, mentorship, and practical insights from industry experts.',
      fullDescription: `Entrepreneur Gurukul is our premier program designed to transform aspiring entrepreneurs into successful business leaders. This 50th batch represents a milestone in our journey of empowering entrepreneurs across India.

The program includes intensive training sessions, one-on-one mentorship, networking opportunities, and practical business development strategies. Participants will gain access to exclusive resources, industry connections, and ongoing support to build and scale their ventures successfully.

This comprehensive program covers all aspects of entrepreneurship from ideation to execution, market analysis to scaling strategies, and everything in between.`,
      highlights: [
        'Intensive 3-day training program',
        'One-on-one mentorship sessions',
        'Networking with industry experts',
        'Practical business development strategies',
        'Access to exclusive resources',
        'Ongoing support and guidance',
        'Certificate of completion'
      ],
      agenda: [
        { time: 'Day 1', topic: 'Entrepreneurial Mindset & Vision Setting' },
        { time: 'Day 2', topic: 'Business Strategy & Market Analysis' },
        { time: 'Day 3', topic: 'Scaling & Implementation Strategies' }
      ],
      price: '₹15,000',
      instructor: 'Santosh Nair & Expert Team'
    },
    'tiger-program': {
      id: 2,
      title: 'T.I.G.E.R. Program',
      image: tigerBanner,
      date: 'July 10, 2025',
      duration: '2 Days',
      location: 'Bangalore, India',
      category: 'Transformation Program',
      description: 'Transform, Innovate, Grow, Execute, and Rise with our comprehensive T.I.G.E.R. program designed for ambitious entrepreneurs.',
      fullDescription: `The T.I.G.E.R. Program is a comprehensive transformation initiative that focuses on five key pillars: Transform your mindset, Innovate your approach, Grow your business, Execute your strategies, and Rise to new heights.

This program combines theoretical knowledge with practical implementation, helping entrepreneurs develop the skills and mindset needed to build sustainable, scalable businesses. Each pillar is designed to address specific challenges that entrepreneurs face in their journey.

Through interactive sessions, case studies, and hands-on exercises, participants will develop a comprehensive understanding of what it takes to succeed in today's competitive business environment.`,
      highlights: [
        'Transform: Mindset transformation techniques',
        'Innovate: Creative problem-solving methods',
        'Grow: Sustainable growth strategies',
        'Execute: Implementation frameworks',
        'Rise: Leadership development',
        'Interactive workshops and case studies',
        'Practical implementation tools'
      ],
      agenda: [
        { time: 'Day 1', topic: 'Transform & Innovate - Mindset and Innovation' },
        { time: 'Day 2', topic: 'Grow, Execute & Rise - Growth and Leadership' }
      ],
      price: '₹12,000',
      instructor: 'Santosh Nair & Transformation Experts'
    },
    'pep-talk': {
      id: 3,
      title: 'Pep Talk',
      image: pepTalkBanner,
      date: 'July 25, 2025',
      duration: '4 Hours',
      location: 'Delhi, India',
      category: 'Motivational Session',
      description: 'Get motivated and inspired with our energizing Pep Talk sessions designed to boost your entrepreneurial spirit and drive.',
      fullDescription: `Pep Talk sessions are designed to inspire, motivate, and energize entrepreneurs at every stage of their journey. These interactive sessions feature industry leaders, successful entrepreneurs, and motivational speakers who share their experiences, insights, and strategies for success.

Whether you're just starting out or looking to scale your business, these sessions provide the motivation and clarity you need to move forward with confidence. The format includes inspiring talks, interactive Q&A sessions, and networking opportunities with like-minded entrepreneurs.

These sessions are perfect for entrepreneurs who need that extra push to overcome challenges and achieve their goals.`,
      highlights: [
        'Inspiring talks from industry leaders',
        'Interactive Q&A sessions',
        'Networking with entrepreneurs',
        'Motivational strategies and techniques',
        'Success stories and case studies',
        'Action planning workshops',
        'Continued community support'
      ],
      agenda: [
        { time: '2:00 PM', topic: 'Opening & Welcome' },
        { time: '2:30 PM', topic: 'Keynote: Overcoming Entrepreneurial Challenges' },
        { time: '4:00 PM', topic: 'Interactive Q&A and Networking' },
        { time: '5:30 PM', topic: 'Action Planning & Closing' }
      ],
      price: '₹3,000',
      instructor: 'Santosh Nair & Guest Speakers'
    },
    'why-entrepreneurs-fail-to-scale': {
      id: 4,
      title: 'Why do entrepreneurs fail to scale?',
      image: whyDoGoaBanner,
      date: 'July 28, 2025',
      duration: '1 Day',
      location: 'Goa, India',
      category: 'Strategic Workshop',
      description: 'Explore the common pitfalls and challenges that prevent entrepreneurs from scaling their businesses successfully.',
      fullDescription: `This insightful session delves into the critical reasons why many entrepreneurs struggle to scale their businesses beyond the initial phase. We analyze common mistakes, strategic errors, and mindset issues that hinder growth.

Through real case studies and practical examples, participants will learn how to identify potential scaling challenges early and develop strategies to overcome them. This program is essential for entrepreneurs who want to build sustainable, scalable businesses.

The workshop includes interactive discussions, group exercises, and actionable frameworks that participants can immediately apply to their businesses.`,
      highlights: [
        'Analysis of common scaling pitfalls',
        'Real case studies and examples',
        'Strategic frameworks for scaling',
        'Interactive group discussions',
        'Actionable implementation tools',
        'Personalized scaling assessments',
        'Ongoing mentorship opportunities'
      ],
      agenda: [
        { time: '9:00 AM', topic: 'Common Scaling Challenges & Pitfalls' },
        { time: '11:00 AM', topic: 'Case Studies: Success vs Failure' },
        { time: '2:00 PM', topic: 'Strategic Frameworks for Scaling' },
        { time: '4:00 PM', topic: 'Personal Action Planning' }
      ],
      price: '₹8,000',
      instructor: 'Santosh Nair & Business Strategists'
    }
  };

  const event = eventsData[eventId];

  if (!event) {
    return (
      <div className="event-detail-page">
        <Header />
        <div className="event-not-found">
          <h2>Event not found</h2>
          <button onClick={() => navigate('/smmartevents')}>Back to Events</button>
        </div>
        <Footer />
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggeredChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className="event-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)' }}
    >
      <Header />      <motion.main 
        className="event-detail-container"
        style={{
          paddingTop: isMobile ? '100px' : undefined
        }}
      >
        {/* Hero Section */}
        <motion.section
          className="event-hero"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="event-hero-content">
            <motion.div className="event-hero-image" variants={slideUp}>
              <img src={event.image} alt={event.title} />
            </motion.div>

            <motion.div className="event-hero-info" variants={slideUp}>
              <motion.button
                className="back-btn"
                onClick={() => navigate('/smmartevents')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back to Events
              </motion.button>

              <h1 className="event-title">{event.title}</h1>

              <div className="event-meta">
                <div className="meta-item">
                  <i className="fas fa-calendar"></i>
                  <span>{event.date}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-clock"></i>
                  <span>{event.duration}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-tag"></i>
                  <span>{event.category}</span>
                </div>
              </div>

              <div className="event-price">
                <span className="price-label">Investment:</span>
                <span className="price-value">{event.price}</span>
              </div>

              <motion.button
                className="register-btn"
                whileHover={{ scale: 1.05, backgroundColor: '#FF8C00' }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Description Section */}
        <motion.section
          className="event-description"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggeredChildren}
        >
          <motion.div className="description-content" variants={slideUp}>
            <h2>About This Event</h2>
            <p className="short-description">{event.description}</p>
            <div className="full-description">
              {event.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Highlights Section */}
        <motion.section
          className="event-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggeredChildren}
        >
          <motion.h2 variants={slideUp}>What You'll Get</motion.h2>
          <motion.div className="highlights-grid" variants={staggeredChildren}>
            {event.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                variants={slideUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <i className="fas fa-check-circle"></i>
                <span>{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Agenda Section */}
        <motion.section
          className="event-agenda"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggeredChildren}
        >
          <motion.h2 variants={slideUp}>Event Agenda</motion.h2>
          <motion.div className="agenda-list" variants={staggeredChildren}>
            {event.agenda.map((item, index) => (
              <motion.div
                key={index}
                className="agenda-item"
                variants={slideUp}
                whileHover={{ scale: 1.01 }}
              >
                <div className="agenda-time">{item.time}</div>
                <div className="agenda-topic">{item.topic}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Instructor Section */}
        <motion.section
          className="event-instructor"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggeredChildren}
        >
          <motion.h2 variants={slideUp}>Your Instructor</motion.h2>
          <motion.div className="instructor-info" variants={slideUp}>
            <h3>{event.instructor}</h3>
            <p>
              Led by <SmmartText>smmart</SmmartText>'s founder Santosh Nair and expert team members,
              bringing over 25 years of entrepreneurial experience and having mentored more than
              1.5 lakh entrepreneurs across India.
            </p>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="event-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.div className="cta-content" variants={slideUp}>
            <h2>Ready to Transform Your Journey?</h2>
            <p>Don't miss this opportunity to learn from the best and take your business to the next level.</p>
            <div className="cta-buttons">
              <motion.button
                className="register-btn primary"
                whileHover={{ scale: 1.05, backgroundColor: '#FF8C00' }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now - {event.price}
              </motion.button>
              <motion.button
                className="contact-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      </motion.main>

      <Footer />
    </motion.div>
  );
};

export default EventDetail;
