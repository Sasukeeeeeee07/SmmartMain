import React, { useState } from 'react';
import './TeamCarousel.css';
import { teamMembers } from '../data/teamData'; // ✅ fixed path
import TeamProfileCarousel from './components/TeamProfileCarousel';

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="team-carousel">
      <div className="main-profile">
        <button className="nav-arrow left" onClick={handlePrevClick}>
          &lt;
        </button>
        
        <div className="profile-card">
          <img 
            src={teamMembers[currentIndex].image} 
            alt={teamMembers[currentIndex].name}
            className="profile-image"
          />
          <h2>{teamMembers[currentIndex].name}</h2>
          <p className="position">{teamMembers[currentIndex].position}</p>
          <p className="bio">{teamMembers[currentIndex].bio}</p>
        </div>

        <button className="nav-arrow right" onClick={handleNextClick}>
          &gt;
        </button>
      </div>

      <div className="thumbnails">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={member.image}
              alt={member.name}
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>

      <TeamProfileCarousel team={teamMembers} />
    </div>
  );
};

export default TeamCarousel;
