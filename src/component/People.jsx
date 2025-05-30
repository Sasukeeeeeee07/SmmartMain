import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './People.css';

const People = () => {
  return (
    <div className="people-page">
      <div className="people-content">
        <h1>Our People</h1>
        <div className="people-grid">
          {/* Team members will be added here */}
          <div className="team-member">
            <div className="member-image">
              {/* Add image here */}
            </div>
            <h3>Dr. Smmart</h3>
            <p className="position">Founder & CEO</p>
            <p className="bio">
              Leading innovation and transformation in professional development and coaching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People; 