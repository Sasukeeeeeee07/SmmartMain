import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Feedback.css';

const feedbackData = [
  {
    id: 1,
    name: "John Smith",
    company: "Tech Solutions Inc.",
    rating: 5,
    comment: "The leadership development program was transformative for our management team. The practical insights and hands-on exercises helped us develop stronger leadership skills.",
    date: "2024-02-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Global Retail Corp",
    rating: 4,
    comment: "Great sales training program. Our team's performance improved significantly after implementing the techniques learned.",
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Innovation Labs",
    rating: 5,
    comment: "The digital transformation workshop provided excellent insights into modernizing our business processes. Highly recommended!",
    date: "2024-02-08"
  },
  {
    id: 4,
    name: "Emily Brown",
    company: "Marketing Solutions",
    rating: 3,
    comment: "Good content but could use more practical examples. The theoretical knowledge was solid though.",
    date: "2024-02-05"
  },
  {
    id: 5,
    name: "David Wilson",
    company: "Finance Plus",
    rating: 5,
    comment: "Outstanding project management training. The instructor was knowledgeable and the material was well-structured.",
    date: "2024-02-01"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredFeedback = selectedRating === 0
    ? feedbackData
    : feedbackData.filter(feedback => feedback.rating === selectedRating);

  return (
    <div className="feedback-page">
      <Header />
      <div className="feedback-container">
        <h1 className="feedback-title">Customer Feedback</h1>
        
        <div className="rating-filter">
          <h3>Filter by Rating</h3>
          <div className="rating-buttons">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                className={`rating-btn ${selectedRating === rating ? 'active' : ''}`}
                onClick={() => setSelectedRating(rating === selectedRating ? 0 : rating)}
              >
                <StarRating rating={rating} />
                <span className="rating-label">{rating} Star{rating !== 1 ? 's' : ''}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="feedback-list">
          {filteredFeedback.map((feedback) => (
            <div key={feedback.id} className="feedback-card">
              <div className="feedback-header">
                <div className="feedback-user">
                  <h3>{feedback.name}</h3>
                  <p className="company">{feedback.company}</p>
                </div>
                <StarRating rating={feedback.rating} />
              </div>
              <p className="feedback-comment">{feedback.comment}</p>
              <div className="feedback-date">
                {new Date(feedback.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback; 