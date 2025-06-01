import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './BookDetail.css';
// Import book cover images
import bookcoverpage1 from './images/bookcoverpage1.jpg';
import bookcoverpage2 from './images/bookcoverpage2.jpg';
import bookcoverpage3 from './images/bookcoverpage3.jpg';

const books = [
  {
    id: 1,
    image: bookcoverpage1,
    title: 'Why do Entrepreneurs Miss the Bus?',
    author: 'Santosh Nair',
    rating: 4.5,
    genre: 'Business & Entrepreneurship',
    awards: ['Best Business Book 2023', 'Entrepreneurship Excellence Award'],
    description: `In this groundbreaking exploration of entrepreneurial challenges, Santosh Nair delves deep into the common pitfalls that cause entrepreneurs to "miss the bus." Through extensive research and real-world case studies, the author illuminates the critical factors that separate successful ventures from failed attempts.

The book begins by examining the psychological barriers that entrepreneurs face, from fear of failure to overconfidence. Nair then progresses to analyze market timing, resource allocation, and strategic decision-making processes that impact business success.

Key chapters explore:
- The Mindset Matrix: Understanding entrepreneurial psychology
- Timing the Market: When to launch and when to pivot
- Resource Optimization: Making the most of limited resources
- Strategic Partnership Development
- Risk Assessment and Mitigation Strategies

Through compelling narratives and practical insights, readers will learn how to:
1. Identify and overcome common entrepreneurial blindspots
2. Develop resilient business models
3. Build effective support networks
4. Navigate market uncertainties
5. Scale sustainably and responsibly`,
    reviews: [
      {
        id: 1,
        user: "John Smith",
        rating: 5,
        comment: "A must-read for every aspiring entrepreneur. The insights are practical and immediately applicable.",
        date: "2024-01-15"
      },
      {
        id: 2,
        user: "Sarah Johnson",
        rating: 4,
        comment: "Great book with valuable lessons. Could have included more international case studies.",
        date: "2024-01-10"
      },
      {
        id: 3,
        user: "Michael Chen",
        rating: 5,
        comment: "The author's experience really shines through. Excellent practical advice.",
        date: "2024-01-05"
      }
    ]
  },
  {
    id: 2,
    image: bookcoverpage2,
    title: 'Eleven Commandments of Life Maximization',
    author: 'Santosh Nair',
    rating: 5,
    genre: 'Self-Development',
    awards: ['Personal Growth Book of the Year', 'Reader\'s Choice Award 2023'],
    description: `Discover the transformative power of life maximization through eleven fundamental commandments that will revolutionize your approach to personal and professional growth.

This comprehensive guide presents a structured framework for achieving excellence in all aspects of life. Each commandment is thoroughly explored with practical examples and actionable strategies.

Key Commandments Include:
- The Power of Purposeful Living
- Mastering Time and Energy Management
- Building Meaningful Relationships
- Financial Intelligence and Wealth Creation
- Continuous Learning and Adaptation

The book provides readers with:
1. Detailed action plans for each commandment
2. Real-life success stories and case studies
3. Practical exercises and self-assessment tools
4. Long-term sustainability strategies
5. Metrics for measuring progress`,
    reviews: []
  },
  {
    id: 3,
    image: bookcoverpage3,
    title: '52 Result Multiplier Thoughts',
    author: 'Santosh Nair',
    rating: 4,
    genre: 'Productivity & Success',
    awards: ['Innovation in Business Literature 2023'],
    description: `Transform your thinking and multiply your results with this groundbreaking collection of 52 powerful thought frameworks. Each week brings a new perspective that can revolutionize your approach to success.

This unique book combines weekly insights with practical applications, ensuring that each thought becomes a catalyst for tangible results. The author presents a year-long journey of transformation through strategic thinking.

Weekly Themes Include:
- Paradigm Shifts for Exponential Growth
- Mental Models for Decision Making
- Success Patterns and Principles
- Innovation and Creative Thinking
- Leadership Mindset Development

Readers Will Gain:
1. Weekly action points and exercises
2. Reflection prompts and journaling space
3. Implementation strategies
4. Progress tracking tools
5. Community support resources`,
    reviews: []
  }
];

const BookDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [localReviews, setLocalReviews] = useState([]);
  const book = books.find(b => b.id === parseInt(id));

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      user: "Guest User",
      rating: rating,
      comment: comment,
      date: new Date().toISOString().split('T')[0]
    };
    setLocalReviews([newReview, ...localReviews]);
    setComment('');
    setRating(5);
  };

  if (!book) return <div>Book not found</div>;

  // Combine and sort reviews, then take only the latest 3
  const allReviews = [...localReviews, ...(book.reviews || [])]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="book-detail-page">
      <Header />
      <div className="book-detail-container">
        <div className="book-detail-path">
          Home / Books / {book.title}
        </div>
        
        <div className="book-detail-hero">
          <div className="book-image-container">
            <img src={book.image} alt={book.title} className="book-detail-image" />
          </div>
          <div className="book-info-container">
            <h1 className="book-title">{book.title}</h1>
            <div className="book-author">By {book.author}</div>
            <div className="book-rating">
              {'★'.repeat(Math.floor(book.rating))}
              {book.rating % 1 ? '½' : ''}
              <span className="rating-number">({book.rating})</span>
            </div>
            <div className="book-genre">Genre: {book.genre}</div>
            {book.awards && (
              <div className="book-awards">
                <h3>Awards</h3>
                <ul>
                  {book.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="book-description">
          <h2>About the Book</h2>
          <p>{book.description}</p>
        </div>

        <div className="book-reviews">
          <h2>Latest Reviews</h2>
          <div className="overall-rating">
            <div className="rating-number">{book.rating}</div>
            <div className="rating-stars">
              {'★'.repeat(Math.floor(book.rating))}
              {book.rating % 1 ? '½' : ''}
            </div>
          </div>

          <div className="review-form">
            <h3>Add a Review</h3>
            <form onSubmit={handleSubmitComment}>
              <div className="rating-select">
                <label>Your Rating:</label>
                <div className="star-rating">
                  {[5, 4, 3, 2, 1].map(num => (
                    <button
                      key={num}
                      type="button"
                      className={`star-button ${rating >= num ? 'active' : ''}`}
                      onClick={() => setRating(num)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review here..."
                required
              />
              <button type="submit" className="submit-review">Submit Review</button>
            </form>
          </div>

          <div className="reviews-list">
            {allReviews.length > 0 ? (
              allReviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <span className="reviewer-name">{review.user}</span>
                    <span className="review-rating">
                      {'★'.repeat(review.rating)}
                    </span>
                  </div>
                  <div className="review-date">{review.date}</div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetail; 