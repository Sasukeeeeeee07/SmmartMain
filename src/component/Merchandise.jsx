import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import './Merchandise.css';

// Import book images from the correct path
import cards52Image from '../assets/MerchandiseImages/52-CARDS.png';
import whyDoImage from '../assets/MerchandiseImages/WHY DO.png';
import clm11Image from '../assets/MerchandiseImages/11 CLM.png';
import whyBookImage from '../assets/MerchandiseImages/5 WHY BOOK.png';
import habit21Image from '../assets/MerchandiseImages/21 HABIT.png';
import gratitudeImage from '../assets/MerchandiseImages/Gratitude Book.png';
import paretoImage from '../assets/MerchandiseImages/Pareto Book.png';
import peopleMultiplierImage from '../assets/MerchandiseImages/People Multipler Book.png';
import resonanceImage from '../assets/MerchandiseImages/People Multipler Resonance Book.png';
import selfLearningImage from '../assets/MerchandiseImages/Self Learning Book.png';
import victoryImage from '../assets/MerchandiseImages/VICTORY BOOK.png';

const books = [
  {
    id: 1,
    image: whyDoImage,
    title: 'Why do Entrepreneurs miss the Bus?',
    author: 'Santosh Nair',
    rating: 4.5,
    description: 'An engaging exploration of entrepreneurship. Santosh Nair offers his unique perspective on the bumpy road ahead for dreamers. This book encourages readers to challenge traditional thinking, take risks, and seize opportunities.',
  },
  {
    id: 2,
    image: clm11Image,
    title: 'Eleven Commandments of Life Maximization',
    author: 'Santosh Nair',
    rating: 5,
    description: 'Principles, procedures, and action-based tools for maximizing your life. This book will empower you to become a "Life Maximizer" rather than a "Handsome Destroyer."',
  },
  {
    id: 3,
    image: cards52Image,
    title: '52 Result Multiplier Thoughts',
    author: 'Santosh Nair',
    rating: 4,
    description: '52 life-boosters, this book lays down something or other that can move you forward in life. A collection of powerful result multiplier thoughts.',
  },
  {
    id: 4,
    image: whyBookImage,
    title: 'The 5 Whys Method',
    author: 'Santosh Nair',
    rating: 4.5,
    description: 'A practical guide to the powerful "5 Whys" problem-solving technique that helps identify the root cause of issues in business and life.',
  },
  {
    id: 5,
    image: habit21Image,
    title: '21 Habits of Success',
    author: 'Santosh Nair',
    rating: 4.5,
    description: 'Discover the 21 transformative habits that successful entrepreneurs and leaders practice daily to achieve extraordinary results.',
  },
  {
    id: 6,
    image: gratitudeImage,
    title: 'The Gratitude Practice',
    author: 'Santosh Nair',
    rating: 5,
    description: 'Learn how the simple practice of gratitude can transform your mindset, boost productivity, and improve relationships in business and personal life.',
  },
  {
    id: 7,
    image: paretoImage,
    title: 'The Pareto Principle in Business',
    author: 'Santosh Nair',
    rating: 4.5,
    description: 'How to apply the 80/20 rule to maximize efficiency, focus on what matters most, and achieve exponential growth in your business.',
  },
  {
    id: 8,
    image: peopleMultiplierImage,
    title: 'People Multiplier',
    author: 'Santosh Nair',
    rating: 5,
    description: 'The definitive guide to amplifying your impact through people. Learn how to build, lead and grow high-performing teams that drive extraordinary results.',
  },
];

const Merchandise = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedBooks = showAll ? books : books.slice(0, 3);

  const slideUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={slideUp} className="merchandise-bg">
      <Header />
      <div className="merch-hero-section">
        <div className="merch-quote-section">
          <motion.h1 className="merch-quote" {...slideUp}>"Today a Reader,<br />Tomorrow a Leader."</motion.h1>
          <motion.div className="merch-quote-author" {...slideUp}>- Margaret Fuller</motion.div>
        </div>
        <div className="floating-books-container">
          <div className="floating-book book1">
            <img src={books[0].image} alt="Book 1" />
          </div>
          <div className="floating-book book2">
            <img src={books[1].image} alt="Book 2" />
          </div>
          <div className="floating-book book3">
            <img src={books[2].image} alt="Book 3" />
          </div>
        </div>
      </div>
      <div className="merch-books-list">
        {displayedBooks.map(book => (
          <div className="merch-book-card" key={book.id}>
            <div className="merch-book-img-wrap">
              <img src={book.image} alt={book.title} className="merch-book-img" />
            </div>
            <div className="merch-book-info">
              <h2 className="merch-book-title">{book.title}</h2>
              <div className="merch-book-author">Author: <span>{book.author}</span></div>
              <div className="merch-book-rating">{'★'.repeat(Math.floor(book.rating))}{book.rating % 1 ? '½' : ''}</div>
              <div className="merch-book-desc">{book.description}</div>
              <Link to={`/merchandise/${book.id}`} className="merch-readmore-btn">Read More</Link>
              <Link to="/contact" className="merch-buy-btn">Buy</Link>
            </div>
          </div>
        ))}

        {!showAll && (
          <div className="view-more-container">
            <motion.button
              className="view-more-btn"
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default Merchandise;