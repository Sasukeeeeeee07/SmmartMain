import React, { useState } from 'react';
import SmmartText from './SmmartText';
import '../assets/OfferSection.css';

const programsData = [
  {
    id: 1,
    name: "Entrepreneur Gurukul (EG)",
    description: "smmart’s flagship transformation program that helps entrepreneurs build self-led, scalable, and system-driven businesses. It focuses on mindset shifts, business clarity, delegation, team empowerment, and strategic scaling..",
    details: [
      " Business owners, founders, second-generation entrepreneurs, and solopreneurs looking to break out of daily operations and grow sustainably.",
      "Duration: 14 months (7 sessions over 8 days)",
    ]
  },
  {
    id: 2,
    name: "Auto Pilot Organization (APO)",
    description: "A tactical implementation-focused program that equips entrepreneurs to create systems, build SOPs, delegate effectively, and run their business without being stuck in operations.",
    details: [
      "Entrepreneurs overwhelmed with firefighting, seeking freedom from daily chaos and looking to run a business that works without them.",
      "Duration: 3–6 months (Multiple live + implementation sessions)",
    ]
  },
  {
    id: 3,
    name: "T.I.G.E.R. Program",
    description: "A personal leadership and identity transformation program that turns ordinary individuals into extraordinary thinkers and doers. T.I.G.E.R. stands for Tough, Ingenious, Go-getter, Enterprising, Resourceful.",
    details: [
      "Aspiring leaders, professionals, students, and entrepreneurs who want to build mental toughness, clarity, and fearlessness.",
      "Duration: 1 Day or Weekend Format",
    ]
  },
  {
    id: 4,
    name: "Financial Azadi (Wealth & Financial Wellness)",
    description: "A focused session that helps entrepreneurs understand wealth-building stages, money psychology, and the path to long-term financial independence. Covers the “0 to 100 Cr Club” journey.",
    details: [
      "Business owners, salaried professionals, and youth aiming to build financial intelligence, discipline, and passive income strategies.",
      "Duration: 1-Day Workshop + follow-up learning",
    ]
  },
  {
    id: 5,
    name: "Why Do Entrepreneurs Miss the Bus?",
    description: "A mindset-reset session that reveals the real reasons why entrepreneurs get stuck—micromanagement, lack of systems, unclear roles—and how to regain direction and scale smartly.",
    details: [
      "Entrepreneurs who feel stuck, overwhelmed, or unscalable despite working hard.",
      "Duration: 2-Day Workshop",
    ]
  },
  {
    id: 6,
    name: "smmart PepTalk (Coming Soon)",
    description: "A high-voltage motivational and clarity-driven talk that energizes entrepreneurs with fresh perspectives, execution triggers, and business truth bombs.",
    details: [
      "General entrepreneurs, sales teams, young leaders, franchise owners, and anyone needing a growth jolt.",
      "Duration: 60–90 mins per session (multi-city/high-frequency)",
    ]
  }
];

const ProgramButton = ({ program, isOpen, onClick }) => {
  return (
    <div className="program-container">
      <button className={`program-button ${isOpen ? 'active' : ''}`} onClick={onClick}>
        <SmmartText>{program.name}</SmmartText> <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>→</span>
      </button>
      {isOpen && (
        <div className="program-details">
          <p className="program-description"><SmmartText>{program.description}</SmmartText></p>
          <ul className="program-features">
            {program.details.map((detail, index) => (
              <li key={index}><SmmartText>{detail}</SmmartText></li>
            ))}
          </ul>
          {/* <button className="learn-more">Learn More</button> */}
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