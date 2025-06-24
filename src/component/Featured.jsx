import React, { useState, useRef } from 'react';
import '../assets/Featured.css';
import santosh from './images/santosh.jpg';

const Featured = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsContainerRef = useRef(null);

  // Extended dummy data for upcoming events
  const events = [
    { id: 1, date: '28', title: 'Why do entrepreneurs miss the bus ?', subtitle: 'This workshop helps entrepreneurs shift from daily firefighting to structured scaling. Discover the real reasons you’re stuck and learn how to build a business that runs with clarity, systems, and empowered teams.', time: 'Time and Date' },
    { id: 2, date: '10', title: '.T.I.G.E.R. Program', subtitle: 'Tough. Ingenious. Go-getter. Enterprising. Resourceful.The T.I.G.E.R. program awakens the leader within.If you’re ready to break limits, face life head-on, and operate at your full potential,this is where it begins.', time: 'Time and Date' },
    { id: 3, date: '25', title: 'Pep Talk', subtitle: 'smmart PepTalk is a high-voltage dose of energy, clarity, and mindset reset for entrepreneurs and leaders.Get ready to reignite your fire, sharpen your focus, and walk out unshakable.', time: 'Time and Date' },
    { id: 4, date: '31', title: 'Entrepreneur Gurukul (50th Batch)', subtitle: 'Entrepreneur Gurukul is a 14-month program designed to help you break free from daily operations and build a self-sustaining, growth-ready business. Gain clarity, leadership mastery, and real-time business transformation', time: 'Time and Date' },
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
            <span>Introducing</span> <span className="highlight">Smmart</span>
          </div>
          <h2 className="meet-title">Meet, <span className="purple-text">Santosh Nair</span></h2>
          <p className="meet-description">
            Santosh Nair is one of India’s most inspiring business transformation coaches and the visionary behind smmart Training & Consultancy Services and the Santosh Nair Online Academy. With over 25 years of experience, he has mentored more than 1.5 lakh entrepreneurs and partnered with over 100+ organizations, driving real change from the ground up. Known for his fearless energy, sharp insights, and futuristic approach, Santosh Nair empowers individuals to become self-led, high-performance leaders. At the heart of his work is a powerful mission to build a new future for Indian enterprise, driven by bold minds and unstoppable action.
          </p>
        </div>
        <div className="meet-image">
          <img src={santosh} alt="Santosh Nair" className="person-image" />
        </div>
      </div>

      {/* Upcoming events section */}
      <div className="events-section">
        <div className="events-header">
          <h2 className="section-title">smmart events</h2>
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