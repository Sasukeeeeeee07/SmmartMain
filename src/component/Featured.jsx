import React, { useState, useRef } from 'react';
import '../assets/Featured.css';
import santosh from './images/santosh.jpg';

const Featured = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsContainerRef = useRef(null);

  // Extended dummy data for upcoming events
  const events = [
    { id: 1, date: '28', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
    { id: 2, date: '10', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
    { id: 3, date: '25', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
    { id: 4, date: '31', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
    { id: 5, date: '15', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
    { id: 6, date: '20', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
    { id: 7, date: '05', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
    { id: 8, date: '12', title: 'TITLE', subtitle: 'SUBTITLE', time: 'Time and Date' },
  ];

  const eventsPerPage = 4;
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handlePrevClick = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollLeft -= eventsContainerRef.current.offsetWidth;
    }
  };

  const handleNextClick = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollLeft += eventsContainerRef.current.offsetWidth;
    }
  };

  return (
    <div className="featured-section">
      {/* Meet Santosh Nair section */}
      <div className="meet-person">
        <div className="meet-info">
          <div className="introducing">
            <span>Introducing</span> <span className="highlight">SmmartPro</span>
          </div>
          <h2 className="meet-title">Meet, <span className="purple-text">Santosh Nair</span></h2>
          <p className="meet-description">
            At the heart of our Trading and consultancy Services 
            are the businesses, with our strategists, who spent decades 
            building some of the world's leading brands. They know 
            what drives growth and how to make brands matter.
          </p>
        </div>
        <div className="meet-image">
          <img src={santosh} alt="Santosh Nair" className="person-image" />
        </div>
      </div>

      {/* Upcoming events section */}
      <div className="events-section">
        <div className="events-header">
          <h2 className="section-title">Upcoming events</h2>
          <div className="events-navigation">
            {/* <span className="see-more">See more events</span> */}
            <div className="nav-buttons">
              <button className="nav-btn prev-btn" onClick={handlePrevClick}>←</button>
              <button className="nav-btn next-btn" onClick={handleNextClick}>→</button>
            </div>
          </div>
        </div>

        <div className="events-grid" ref={eventsContainerRef}>
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">{event.date}°</div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-subtitle">{event.subtitle}</p>
                <p className="event-time">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="event-indicators">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${currentPage === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured; 