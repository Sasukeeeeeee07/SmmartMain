import React, { useEffect } from 'react';
import homevideo from '../assets/videos/homevideo.mp4';
import Header from './Header';
import './Home.css';

const Home = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="App">
      <Header />      <div className="home-section">        <video
        className="bg-video"
        autoPlay
        loop
        playsInline
        controls /* Add controls so users can control volume and playback */
        src={homevideo}
      >
        Your browser does not support the video tag.
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