import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Merchandise.css';

const books = [
  {
    id: 1,
    image: '/images/book1.jpg',
    title: 'Why do Entrepreneurs miss the Bus?',
    author: 'Santosh Nair',
    rating: 4.5,
    description: 'An engaging exploration of entrepreneurship. Santosh Nair offers his unique perspective on the bumpy road ahead for dreamers. This book encourages readers to challenge traditional thinking, take risks, and seize opportunities. Through real-world stories and practical advice, Nair inspires entrepreneurs to overcome the challenges and self-imposed barriers that confine their progress.',
    longDesc: 'Full long description for Why do Entrepreneurs miss the Bus?...',
  },
  {
    id: 2,
    image: '/images/book2.jpg',
    title: 'Eleven Commandments of Life Maximization.',
    author: 'Santosh Nair',
    rating: 5,
    description: 'Principles, procedures, and action-based tools for maximizing your life. This book will empower you to become a "Life Maximizer" rather than a "Handsome Destroyer."',
    longDesc: 'Full long description for Eleven Commandments of Life Maximization...',
  },
  {
    id: 3,
    image: '/images/book3.jpg',
    title: '52 Result Multiplier Thoughts',
    author: 'Santosh Nair',
    rating: 4,
    description: '52 life-boosters, this book lays down something or other that can move you forward in life. It is a collection of powerful result multiplier thoughts, each with a story, a lesson, and an action point you can apply in your life as the thought-multiplier in the world of people.',
    longDesc: 'Full long description for 52 Result Multiplier Thoughts...',
  },
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => String(b.id) === String(id));

  if (!book) return <div style={{color:'#fff', padding:'2rem'}}>Book not found. <Link to="/merchandise">Back to Merchandise</Link></div>;

  return (
    <div className="book-detail-bg">
      <div className="book-detail-card">
        <img src={book.image} alt={book.title} className="book-detail-img" />
        <div className="book-detail-info">
          <h1>{book.title}</h1>
          <div className="book-detail-author">Author: {book.author}</div>
          <div className="book-detail-rating">{'★'.repeat(Math.floor(book.rating))}{book.rating % 1 ? '½' : ''}</div>
          <div className="book-detail-desc">{book.longDesc}</div>
          <Link to="/merchandise" className="merch-readmore-btn">Back to Merchandise</Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetail; 