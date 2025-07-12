import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Events.css';
import Header from './Header';
import Footer from './Footer';

// Import banner images from Featured component
import egBatchBanner from '../assets/banners/EG_50th Batch Launch.jpg';
import pepTalkBanner from '../assets/banners/Peptalk.jpg';
import tigerBanner from '../assets/banners/T.I.G.E.R. BANNER WEBSITE.jpg';
import whyDoGoaBanner from '../assets/banners/why do goa.jpg';

// Event data with banner images and descriptions
const events = [
  {
    type: 'featured',
    title: 'Entrepreneur Gurukul (50th Batch)',
    name: 'Entrepreneur Gurukul (50th Batch)',
    description: 'Join our flagship program - the 50th batch of Entrepreneur Gurukul. Transform your entrepreneurial journey with comprehensive training, mentorship, and practical insights from industry experts.',
    image: egBatchBanner,
    learnMore: true,
    fullDescription: 'Entrepreneur Gurukul is our premier program designed to transform aspiring entrepreneurs into successful business leaders. This 50th batch represents a milestone in our journey of empowering entrepreneurs across India. The program includes intensive training sessions, one-on-one mentorship, networking opportunities, and practical business development strategies. Participants will gain access to exclusive resources, industry connections, and ongoing support to build and scale their ventures successfully.'
  },
  {
    type: 'normal',
    name: 'T.I.G.E.R. Program',
    description: 'Transform, Innovate, Grow, Execute, and Rise with our comprehensive T.I.G.E.R. program designed for ambitious entrepreneurs.',
    image: tigerBanner,
    learnMore: true,
    fullDescription: 'The T.I.G.E.R. Program is a comprehensive transformation initiative that focuses on five key pillars: Transform your mindset, Innovate your approach, Grow your business, Execute your strategies, and Rise to new heights. This program combines theoretical knowledge with practical implementation, helping entrepreneurs develop the skills and mindset needed to build sustainable, scalable businesses.'
  },
  {
    type: 'normal',
    name: 'Pep Talk',
    description: 'Get motivated and inspired with our energizing Pep Talk sessions designed to boost your entrepreneurial spirit and drive.',
    image: pepTalkBanner,
    learnMore: true,
    fullDescription: 'Pep Talk sessions are designed to inspire, motivate, and energize entrepreneurs at every stage of their journey. These interactive sessions feature industry leaders, successful entrepreneurs, and motivational speakers who share their experiences, insights, and strategies for success. Whether you\'re just starting out or looking to scale your business, these sessions provide the motivation and clarity you need to move forward with confidence.'
  },
  {
    type: 'normal',
    name: 'Why do entrepreneurs fail to scale',
    description: 'Explore the common pitfalls and challenges that prevent entrepreneurs from scaling their businesses successfully.',
    image: whyDoGoaBanner,
    learnMore: true,
    fullDescription: 'This insightful session delves into the critical reasons why many entrepreneurs struggle to scale their businesses beyond the initial phase. We analyze common mistakes, strategic errors, and mindset issues that hinder growth. Through real case studies and practical examples, participants will learn how to identify potential scaling challenges early and develop strategies to overcome them. This program is essential for entrepreneurs who want to build sustainable, scalable businesses.'
  },
];

const EventCard = ({ type, name, title, description, learnMore, image, fullDescription }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={`card ${type === 'featured' ? 'featured-card' : 'regular-card'}`}>
        {image && (
          <div className="event-image-container">
            <img src={image} alt={name} className="event-image" />
          </div>
        )}
        {type === 'featured' && (
          <>
            <div className="featured-label">Featured Event</div>
            <h2 className="card-title">{title}</h2>
          </>
        )}
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
        {learnMore && <button className="learn-more-btn" onClick={handleLearnMore}>Learn more</button>}
      </div>

      {/* Modal for full description */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{name}</h2>
              <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
            </div>
            <div className="modal-body">
              <p>{fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



const SMMARTEvents = () => {
  return (
    <div className="events-page-container">
      <Header />
      <div className="events-container">
        <div className="events-header-section">
          <h1 className="events-main-title">Explore smmart Events</h1>
        </div>
        <div className="events-layout">
          <div className="featured-event-section">
            <EventCard {...events[0]} />
          </div>
          <div className="regular-events-grid">
            <EventCard {...events[1]} />
            <EventCard {...events[2]} />
            <EventCard {...events[3]} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SMMARTEvents;