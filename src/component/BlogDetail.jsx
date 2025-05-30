import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogPhoto from './images/santosh.jpg';
import './BlogDetail.css';

const blogData = {
  title: "Embracing the future: Why Abundance Awaits us all.",
  author: "Dr. Smmart",
  date: "August 23, 2023",
  image: BlogPhoto,
  content: [
    "Why should we fear the advancements in Artificial Intelligence, robotics, infinite computing, ubiquitous broadband networks, digital manufacturing, nanomaterials, synthetic biology, and many other rapidly evolving technologies?",
    "The truth is that we are living in the most exciting time in human history. These technologies are not threats, but rather opportunities that will create unprecedented abundance in our lives.",
    "As these technologies converge and build upon each other, they're creating extraordinary capabilities that will help solve many of humanity's grand challenges.",
    "Think about healthcare. AI and robotics are already helping doctors diagnose diseases more accurately and perform surgery with greater precision. Synthetic biology is opening new frontiers in medicine, while digital manufacturing is making medical devices more accessible.",
    "The key is to embrace these changes with an abundance mindset rather than fear them. When we do this, we can harness these technologies to create a world of unprecedented opportunity and prosperity.",
    "Let me share with you exactly why these developments are not just inevitable, but desirable, and how we can all benefit from them."
  ]
};

const relatedBlogs = [
  {
    id: 2,
    title: "The Power of Positive Thinking",
    author: "Dr. Smmart",
    image: BlogPhoto,
    description: "Discover how positive thinking can transform your life and career."
  },
  {
    id: 3,
    title: "Building Resilience in Tough Times",
    author: "Dr. Smmart",
    image: BlogPhoto,
    description: "Learn strategies to bounce back from setbacks and grow stronger."
  },
  {
    id: 4,
    title: "Leadership in the Digital Age",
    author: "Dr. Smmart",
    image: BlogPhoto,
    description: "Understanding the new paradigms of leadership in our connected world."
  }
];

const BlogDetail = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Smith",
      text: "This is exactly what I needed to hear. The future is indeed bright if we approach it with the right mindset.",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Sarah Johnson",
      text: "Great insights! I especially appreciate the point about healthcare advancements. It's amazing to see how technology is transforming medicine.",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      author: "Michael Brown",
      text: "Very thought-provoking article. It's refreshing to see such an optimistic yet realistic take on technological advancement.",
      timestamp: "1 day ago"
    }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "Guest User",
        text: comment,
        timestamp: "Just now"
      };
      // Remove the oldest comment if we already have 3
      const updatedComments = comments.length >= 3 
        ? [newComment, comments[0], comments[1]]
        : [newComment, ...comments];
      setComments(updatedComments);
      setComment('');
    }
  };

  return (
    
    <div className="blog-detail-page">
      <Header />
      
      <main className="blog-detail-main">
        <div className="blog-detail-container">
          <div className="blog-detail-header">
            <img src={blogData.image} alt={blogData.title} className="blog-detail-image" />
            <h1>{blogData.title}</h1>
            <div className="blog-detail-meta">
              <span className="author">By {blogData.author}</span>
              <span className="date">{blogData.date}</span>
            </div>
          </div>

          <div className="blog-detail-content">
            {blogData.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

      

          <div className="related-blogs">
            <h2>Read Other Blogs</h2>
            <div className="related-blogs-grid">
              {relatedBlogs.map(blog => (
                <div key={blog.id} className="related-blog-card">
                  <img src={blog.image} alt={blog.title} />
                  <div className="related-blog-content">
                    <h3>{blog.title}</h3>
                    <p className="author">By {blog.author}</p>
                    <p className="description">{blog.description}</p>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="blog-comments-section">
            <h2>Comments</h2>
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
                required
              />
              <button type="submit">Post Comment</button>
            </form>

            <div className="comments-list">
              {comments.slice(0, 3).map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-time">{comment.timestamp}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
jkkk
      <Footer />
    </div>
  );
};

export default BlogDetail; 