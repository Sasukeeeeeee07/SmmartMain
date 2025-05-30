import React from 'react';
import homevideo from '../assets/videos/homevideo.mp4';
import Header from './Header';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="home-section">
        <video className="bg-video" autoPlay loop muted>
          <source src={homevideo} type="video/mp4" />
        </video>

        <div className="centered-text">
          <h1>Smmart- True School for Entrepreneurs</h1>
          <button className="ml-button">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;