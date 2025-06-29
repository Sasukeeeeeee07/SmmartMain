import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  const slideUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };

  return (
    <motion.div {...fadeIn}>
      <Header />
      <motion.div className="home-section" {...slideUp}>
        <video
          className="bg-video"
          autoPlay
          loop
          playsInline
          muted
          controls
          src={homevideo}
        >
          Your browser does not support the video tag.
        </video>

        <motion.div className="centered-text" {...fadeIn}>
          <motion.h1 {...slideUp}>smmart- True School for Entrepreneurs</motion.h1>

          <button className="ml-button">Join Now</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;