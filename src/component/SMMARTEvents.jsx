import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import '../assets/Events.css';

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
  const baseStyle =
    'rounded-xl shadow-md p-6 text-white bg-gradient-to-r from-zinc-700 to-zinc-400';
  const buttonStyle =
    'mt-4 bg-orange-400 text-white font-bold py-2 px-4 rounded hover:bg-orange-500';

  return (
    <div className={`${baseStyle} ${type === 'featured' ? 'col-span-2 h-48 relative' : ''}`}>
      {type === 'featured' && (
        <>
          <div className="absolute top-2 right-2 text-xs text-orange-300 italic">
            Short catchy <br /> video on loop
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm mt-1">{description}</p>
      {learnMore && <button className={buttonStyle}>Learn more</button>}
    </div>
  );
};

const BlurredCard = () => (
  <div className="rounded-xl p-6 text-white bg-gradient-to-r from-zinc-700 to-zinc-400 opacity-40 blur-sm">
    <h3 className="text-xl font-bold">Event Name</h3>
    <p className="text-sm mt-1">Short catchy description</p>
    <button className="mt-4 bg-white text-black font-bold py-2 px-4 rounded cursor-not-allowed">
      Learn more
    </button>
  </div>
);

const SMMARTEvents = () => {
  return (
    <div className="bg-black min-h-screen px-8 py-10 font-sans">
      <h1 className="text-3xl font-bold text-white mb-8">Explore smmart Events</h1>

      <div className="grid grid-cols-2 gap-6">
        <EventCard {...events[0]} />
        <EventCard {...events[1]} />
        <EventCard {...events[2]} />
        <div className="col-span-2 grid grid-cols-2 gap-6 mt-6 relative">
          <BlurredCard />
          <BlurredCard />
          <h2 className="absolute text-3xl font-bold text-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            Coming soon...
          </h2>
          <div className="absolute bottom-2 right-4 text-xs text-orange-300 italic">
            blurred undisclosed events
          </div>
        </div>
      </div>
    </div>
  );
};


export default SMMARTEvents;