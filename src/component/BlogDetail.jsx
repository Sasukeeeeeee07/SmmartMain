import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogPhoto from './images/santosh.jpg';
import './BlogDetail.css';

const allBlogs = {
  1: {
    id: 1,
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
  },
  2: {
    id: 2,
    title: "The Power of Positive Thinking",
    author: "Dr. Smmart",
    date: "August 25, 2023",
    image: BlogPhoto,
    content: [
      "Positive thinking isn't just about maintaining a sunny disposition. It's a powerful tool that can transform your life and career in meaningful ways.",
      "Research has shown that optimistic people are more likely to succeed in their endeavors, maintain better health, and build stronger relationships.",
      "In this blog, we explore practical strategies to cultivate a positive mindset and harness its power for personal and professional growth."
    ]
  },
  3: {
    id: 3,
    title: "Building Resilience in Tough Times",
    author: "Dr. Smmart",
    date: "August 27, 2023",
    image: BlogPhoto,
    content: [
      "Resilience is not about avoiding failure or hardship – it's about how we respond to it.",
      "Through understanding the psychology of resilience and implementing proven strategies, we can develop the mental strength to overcome any challenge.",
      "Learn how to bounce back stronger from setbacks and use them as stepping stones to success."
    ]
  },
  4: {
    id: 4,
    title: "Leadership in the Digital Age",
    author: "Dr. Smmart",
    date: "August 30, 2023",
    image: BlogPhoto,
    content: [
      "The digital revolution has transformed how we lead and manage teams.",
      "Modern leaders must adapt to new paradigms of remote work, digital collaboration, and rapid technological change.",
      "Discover the essential skills and mindsets needed to lead effectively in our connected world."
    ]
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const [currentBlogId, setCurrentBlogId] = useState(Number(id) || 1);
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

  const currentBlog = allBlogs[currentBlogId];
  
  const relatedBlogs = Object.values(allBlogs)
    .filter(blog => blog.id !== currentBlogId)
    .slice(0, 3);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "Guest User",
        text: comment,
        timestamp: "Just now"
      };
      const updatedComments = comments.length >= 3 
        ? [newComment, comments[0], comments[1]]
        : [newComment, ...comments];
      setComments(updatedComments);
      setComment('');
    }
  };

  const handleReadMore = (blogId) => {
    setCurrentBlogId(blogId);
    window.scrollTo(0, 0);
  };

  if (!currentBlog) return <div>Blog not found</div>;

  return (
    <div className="blog-detail-page">
      <Header />
      
      <main className="blog-detail-main">
        <div className="blog-detail-container">
          <div className="blog-detail-header">
            <img src={currentBlog.image} alt={currentBlog.title} className="blog-detail-image" />
            <h1>{currentBlog.title}</h1>
            <div className="blog-detail-meta">
              <span className="author">By {currentBlog.author}</span>
              <span className="date">{currentBlog.date}</span>
            </div>
          </div>

          <div className="blog-detail-content">
            {currentBlog.content.map((paragraph, index) => (
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
                    <p className="description">{blog.content[0]}</p>
                    <button 
                      className="read-more"
                      onClick={() => handleReadMore(blog.id)}
                    >
                      Read More
                    </button>
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

      <Footer />
    </div>
  );
};

export default BlogDetail; 