import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Events.css';
import Header from './Header';
import Footer from './Footer';

// Sample event data with status
const events = [
  {
    type: 'featured',
    title: 'Featured Event',
    name: 'Event Name',
    description: 'Short catchy description',
    learnMore: true,
  },
  {
    type: 'normal',
    name: 'Event Name',
    description: 'Short catchy description',
    learnMore: true,
  },
  {
    type: 'normal',
    name: 'Event Name',
    description: 'Short catchy description',
    learnMore: true,
  },
];

const EventCard = ({ type, name, title, description, learnMore }) => {
  return (
    <div className={`card ${type === 'featured' ? 'featured-card' : 'regular-card'}`}>
      {type === 'featured' && (
        <>
          <div className="featured-label">Featured Event</div>
          <h2 className="card-title">{title}</h2>
        </>
      )}
      <h3 className="card-title">{name}</h3>
      <p className="card-description">{description}</p>
      {learnMore && <button className="learn-more-btn">Learn more</button>}
    </div>
  );
};

const BlurredCard = () => (
  <div className="blurred-card-placeholder">
    <h3 className="card-title-blurred">Event Name</h3>
    <p className="card-description-blurred">Short catchy description</p>
    <button className="learn-more-btn-blurred" disabled>Learn more</button>
  </div>
);

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
          </div>
          <div className="coming-soon-section">
            <div className="coming-soon-blurred-cards">
              <BlurredCard />
              <BlurredCard />
            </div>
            <div className="coming-soon-text-overlay">Coming soon...</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SMMARTEvents;