import React, { useState } from "react";
import "./TeamProfileCarousel.css";

const TeamProfileCarousel = ({ team }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + team.length) % team.length);
  const next = () => setCurrent((current + 1) % team.length);

  return (
    <div className="team-carousel">
      <div className="carousel-main">
        <button className="carousel-arrow left" onClick={prev}>&lt;</button>
        <div className="profile-card">
          <img src={team[current].image} alt={team[current].name} className="profile-img" />
          <h1 className="profile-name">{team[current].name}</h1>
          <h3 className="profile-title">{team[current].position}</h3>
          <p className="profile-bio">{team[current].bio}</p>
        </div>
        <button className="carousel-arrow right" onClick={next}>&gt;</button>
      </div>
      <div className="carousel-thumbnails">
        {team.map((member, idx) => (
          <div
            key={member.name}
            className={`carousel-thumb${idx === current ? " active" : ""}`}
            onClick={() => setCurrent(idx)}
          >
            <img src={member.image} alt={member.name} />
            <span className="thumb-name">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfileCarousel; 