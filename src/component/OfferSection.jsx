import React, { useState } from 'react';
import '../assets/OfferSection.css';

const programsData = [
  {
    id: 1,
    name: "Leadership Development",
    description: "Comprehensive program designed to enhance leadership skills, strategic thinking, and team management capabilities.",
    details: [
      "Executive Leadership Training",
      "Strategic Decision Making",
      "Team Building & Management",
      "Change Management",
    ]
  },
  {
    id: 2,
    name: "Sales Excellence",
    description: "Master modern sales techniques and strategies to drive business growth and customer satisfaction.",
    details: [
      "Advanced Sales Techniques",
      "Customer Relationship Management",
      "Negotiation Skills",
      "Digital Sales Tools",
    ]
  },
  {
    id: 3,
    name: "Digital Transformation",
    description: "Learn to leverage digital technologies and drive organizational transformation in the modern business landscape.",
    details: [
      "Digital Strategy Development",
      "Technology Implementation",
      "Process Optimization",
      "Change Management",
    ]
  },
  {
    id: 4,
    name: "Business Analytics",
    description: "Master data-driven decision making and business intelligence tools for better business outcomes.",
    details: [
      "Data Analysis Fundamentals",
      "Business Intelligence Tools",
      "Predictive Analytics",
      "Data Visualization",
    ]
  },
  {
    id: 5,
    name: "Project Management",
    description: "Learn industry-standard project management methodologies and best practices.",
    details: [
      "Project Planning",
      "Risk Management",
      "Agile Methodologies",
      "Team Leadership",
    ]
  },
  {
    id: 6,
    name: "Customer Experience",
    description: "Design and implement superior customer experience strategies for business growth.",
    details: [
      "Customer Journey Mapping",
      "Service Design",
      "Voice of Customer",
      "Experience Metrics",
    ]
  }
];

const ProgramButton = ({ program, isOpen, onClick }) => {
  return (
    <div className="program-container">
      <button className={`program-button ${isOpen ? 'active' : ''}`} onClick={onClick}>
        {program.name} <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>→</span>
      </button>
      {isOpen && (
        <div className="program-details">
          <p className="program-description">{program.description}</p>
          <ul className="program-features">
            {program.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <button className="learn-more">Learn More</button>
        </div>
      )}
    </div>
  );
};

const OfferSection = () => {
  const [openProgram, setOpenProgram] = useState(null);

  const handleProgramClick = (programId) => {
    setOpenProgram(openProgram === programId ? null : programId);
  };

  const firstColumn = programsData.slice(0, 3);
  const secondColumn = programsData.slice(3);

  return (
    <section className="offer-section">
      <div className="offer-header">
        <h2>WHAT WE CAN OFFER</h2>
      </div>
      
      <div className="programs-container">
        <div className="programs-column">
          {firstColumn.map(program => (
            <ProgramButton
              key={program.id}
              program={program}
              isOpen={openProgram === program.id}
              onClick={() => handleProgramClick(program.id)}
            />
          ))}
        </div>
        
        <div className="programs-column">
          {secondColumn.map(program => (
            <ProgramButton
              key={program.id}
              program={program}
              isOpen={openProgram === program.id}
              onClick={() => handleProgramClick(program.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection; 