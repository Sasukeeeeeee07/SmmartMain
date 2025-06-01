import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Merchandise.css';
import bookcoverpage1 from './images/bookcoverpage1.jpg';
import bookcoverpage2 from './images/bookcoverpage2.jpg';
import bookcoverpage3 from './images/bookcoverpage3.jpg';

const books = [
  {
    id: 1,
    image: bookcoverpage1,
    title: 'Why do Entrepreneurs miss the Bus?',
    author: 'Santosh Nair',
    rating: 4.5,
    description: 'An engaging exploration of entrepreneurship. Santosh Nair offers his unique perspective on the bumpy road ahead for dreamers. This book encourages readers to challenge traditional thinking, take risks, and seize opportunities.',
  },
  {
    id: 2,
    image: bookcoverpage2,
    title: 'Eleven Commandments of Life Maximization',
    author: 'Santosh Nair',
    rating: 5,
    description: 'Principles, procedures, and action-based tools for maximizing your life. This book will empower you to become a "Life Maximizer" rather than a "Handsome Destroyer."',
  },
  {
    id: 3,
    image: bookcoverpage3,
    title: '52 Result Multiplier Thoughts',
    author: 'Santosh Nair',
    rating: 4,
    description: '52 life-boosters, this book lays down something or other that can move you forward in life. A collection of powerful result multiplier thoughts.',
  },
];

const Merchandise = () => {
  return (
    <div className="merchandise-bg">
      <Header />
      <div className="merch-hero-section">
        <div className="merch-quote-section">
          <h1 className="merch-quote">"Today a Reader,<br/>Tomorrow a Leader."</h1>
          <div className="merch-quote-author">- Margaret Fuller</div>
        </div>
        <div className="floating-books-container">
          <div className="floating-book book1">
            <img src={bookcoverpage1} alt="Book 1" />
          </div>
          <div className="floating-book book2">
            <img src={bookcoverpage2} alt="Book 2" />
          </div>
          <div className="floating-book book3">
            <img src={bookcoverpage3} alt="Book 3" />
          </div>
        </div>
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