import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './BookDetail.css';
// Import book cover images from the correct path
import cards52Image from '../assets/MerchandiseImages/52-CARDS.png';
import whyDoImage from '../assets/MerchandiseImages/WHY DO.png';
import clm11Image from '../assets/MerchandiseImages/11 CLM.png';
import whyBookImage from '../assets/MerchandiseImages/5 WHY BOOK.png';
import habit21Image from '../assets/MerchandiseImages/21 HABIT.png';
import gratitudeImage from '../assets/MerchandiseImages/Gratitude Book.png';
import paretoImage from '../assets/MerchandiseImages/Pareto Book.png';
import peopleMultiplierImage from '../assets/MerchandiseImages/People Multipler Book.png';

const books = [
  {
    id: 1,
    image: whyDoImage,
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
  }, {
    id: 2,
    image: clm11Image,
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
  }, {
    id: 3,
    image: cards52Image,
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
  },
  {
    id: 4,
    image: whyBookImage,
    title: 'The 5 Whys Method',
    author: 'Santosh Nair',
    rating: 4.5,
    genre: 'Business Strategy',
    awards: ['Problem-Solving Excellence Award'],
    description: `Discover the powerful "5 Whys" method that has revolutionized problem-solving in business and personal life. This methodical approach to finding root causes was popularized by Toyota but has applications far beyond manufacturing.

In this comprehensive guide, Santosh Nair explores how asking "why" five times can break through surface-level symptoms to reveal the true underlying issues. The book provides a structured framework for implementing this technique across various scenarios.

Key chapters include:
- The Origins and Evolution of the 5 Whys
- Common Pitfalls in Problem Analysis
- Adapting the Method for Different Industries
- Combining 5 Whys with Other Problem-Solving Tools
- Building a Root Cause Analysis Culture

Through practical case studies and guided exercises, readers will learn how to:
1. Properly formulate "why" questions
2. Recognize when you've reached a true root cause
3. Implement effective countermeasures
4. Document and share learnings across an organization
5. Develop problem-solving teams`,
    reviews: [
      {
        id: 1,
        user: "Elena Rodriguez",
        rating: 5,
        comment: "This book transformed how our team approaches problems. Simple yet profound methodology.",
        date: "2024-02-10"
      }
    ]
  },
  {
    id: 5,
    image: habit21Image,
    title: '21 Habits of Success',
    author: 'Santosh Nair',
    rating: 4.5,
    genre: 'Personal Development',
    awards: ['Lifestyle Transformation Award'],
    description: `Transform your life with 21 carefully curated habits that successful individuals practice consistently. This step-by-step guide breaks down complex behavior patterns into manageable daily practices.

Each habit is thoroughly explored with scientific backing, practical implementation strategies, and real-world examples. The book follows a structured 21-day program to help readers integrate these habits systematically.

Key habits explored include:
- Strategic Morning Routines
- Deep Work Practices
- Relationship Building Techniques
- Financial Intelligence Habits
- Physical and Mental Wellness Practices

The book provides readers with:
1. Daily action plans for each habit
2. Habit stacking strategies
3. Tracking templates and tools
4. Troubleshooting common obstacles
5. Long-term sustainability frameworks`,
    reviews: []
  },
  {
    id: 6,
    image: gratitudeImage,
    title: 'The Gratitude Practice',
    author: 'Santosh Nair',
    rating: 5,
    genre: 'Mindfulness & Well-being',
    awards: ['Wellness Book of the Year'],
    description: `Discover how the simple practice of gratitude can fundamentally transform your mindset, relationships, and success. This book dives deep into both the science and application of gratitude as a daily practice.

Through a combination of research, case studies, and practical exercises, readers will understand how gratitude rewires neural pathways and creates cascading positive effects in all areas of life.

Key sections include:
- The Neuroscience of Gratitude
- Gratitude in Leadership and Business
- Overcoming Negativity Bias
- Creating Sustainable Gratitude Practices
- Measuring the Impact of Gratitude

This comprehensive guide offers:
1. Multiple gratitude journaling techniques
2. Gratitude meditation scripts
3. Exercises for teams and organizations
4. Digital tools and resources
5. Strategies for difficult circumstances`,
    reviews: []
  },
  {
    id: 7,
    image: paretoImage,
    title: 'The Pareto Principle in Business',
    author: 'Santosh Nair',
    rating: 4.5,
    genre: 'Business Efficiency',
    awards: ['Business Strategy Award 2023'],
    description: `Master the transformative 80/20 rule that has revolutionized business efficiency across industries. This comprehensive guide explores how to identify and leverage the vital few inputs that produce the majority of your desired outcomes.

Drawing on extensive research and case studies, the book demonstrates the Pareto Principle's application across marketing, sales, product development, time management, and strategic planning.

Key chapters include:
- The Mathematical Foundations of Pareto's Discovery
- Identifying Your Critical 20%
- Common Misapplications and How to Avoid Them
- Creating Pareto-Driven Business Strategies
- Combining the 80/20 Rule with Other Business Principles

Through practical frameworks and tools, readers will learn to:
1. Conduct meaningful 80/20 analysis in their organizations
2. Reallocate resources for maximum impact
3. Make smarter strategic decisions
4. Implement focused productivity systems
5. Build more efficient teams and processes`,
    reviews: []
  },
  {
    id: 8,
    image: peopleMultiplierImage,
    title: 'People Multiplier',
    author: 'Santosh Nair',
    rating: 5,
    genre: 'Leadership & Management',
    awards: ['Leadership Book of the Year', 'HR Innovation Award'],
    description: `Discover the transformative power of becoming a People Multiplier - a leader who amplifies the capabilities, engagement, and impact of every team member. This comprehensive guide presents a new paradigm for leadership effectiveness.

Drawing on extensive research and real-world application, Santosh Nair reveals the principles and practices that enable leaders to multiply human potential rather than merely manage it.

Key sections include:
- The Multiplier Mindset: Beyond Traditional Management
- Creating Psychological Safety and Trust
- Talent Identification and Development Systems
- Building High-Performance Team Cultures
- Scaling Multiplier Effects Throughout Organizations

Through concrete frameworks and tools, readers will learn how to:
1. Identify and remove barriers to human potential
2. Create systems that amplify individual strengths
3. Implement effective coaching and mentoring approaches
4. Build scalable leadership development programs
5. Measure and improve multiplier effects`,
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