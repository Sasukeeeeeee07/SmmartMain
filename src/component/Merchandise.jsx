import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Merchandise.css';

const books = [
  {
    id: 1,
    image: '/images/book1.jpg',
    title: 'Why do Entrepreneurs miss the Bus?',
    author: 'Santosh Nair',
    rating: 4.5,
    description: 'An engaging exploration of entrepreneurship. Santosh Nair offers his unique perspective on the bumpy road ahead for dreamers. This book encourages readers to challenge traditional thinking, take risks, and seize opportunities. Through real-world stories and practical advice, Nair inspires entrepreneurs to overcome the challenges and self-imposed barriers that confine their progress.',
  },
  {
    id: 2,
    image: '/images/book2.jpg',
    title: 'Eleven Commandments of Life Maximization.',
    author: 'Santosh Nair',
    rating: 5,
    description: 'Principles, procedures, and action-based tools for maximizing your life. This book will empower you to become a "Life Maximizer" rather than a "Handsome Destroyer."',
  },
  {
    id: 3,
    image: '/images/book3.jpg',
    title: '52 Result Multiplier Thoughts',
    author: 'Santosh Nair',
    rating: 4,
    description: '52 life-boosters, this book lays down something or other that can move you forward in life. It is a collection of powerful result multiplier thoughts, each with a story, a lesson, and an action point you can apply in your life as the thought-multiplier in the world of people.',
  },
];

const Merchandise = () => {
  return (
    <div className="merchandise-bg">
      <Header />
      <div className="merch-quote-section">
        <h1 className="merch-quote">"Today a Reader,<br/>Tomorrow a Leader."</h1>
        <div className="merch-quote-author">- Margaret Fuller</div>
      </div>
      <div className="merch-visualization-img-wrap">
        <img src="/images/santosh.jpg" alt="Books Visualization" className="merch-visualization-img" />
      </div>
      <div className="merch-books-list">
        {books.map(book => (
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
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Merchandise; 