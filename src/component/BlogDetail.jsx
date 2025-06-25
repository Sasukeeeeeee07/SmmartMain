import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogPhoto from './images/santosh.jpg';
import './BlogDetail.css';
import { FaClock, FaUser, FaCalendarAlt, FaComment, FaShare, FaHeart, FaBookmark, FaArrowLeft, FaTags } from 'react-icons/fa';

// Blog data that should match the data in Blog.jsx
const allBlogs = {
  1: {
    id: 1,
    title: 'Are You a Dreamer or a Doer?',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    date: 'May 15, 2023',
    readTime: '5 min read',
    tags: ['Leadership', 'Motivation', 'Success'],
    content: [
      "Too many get lost in ideas, believing success happens from thinking alone. Dreamers envision. Doers execute.",
      "The dream fuels your purpose—execution brings it to life. What matters isn't how big your dream is—it's how strong your doing muscle.",
      "Dreams without action are like seeds without soil—potential without possibility. Doers build the vision brick by brick, even when it's tedious.",
      "Every breakthrough business started as a thought. But it became reality through relentless action. Your success isn't hiding in better ideas—it's waiting in better execution."
    ]
  },
  2: {
    id: 2,
    title: 'Why Your Inner Voice Defines Your Outer Reality',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    date: 'April 28, 2023',
    readTime: '4 min read',
    tags: ['Mindset', 'Growth', 'Self-Development'],
    content: [
      "The opinions you hold about yourself determine the world you build around you. Self-doubt builds blocks; self-belief builds bridges.",
      "Speak to yourself with the respect you reserve for others—and watch your world change. Check your inner dialogue—it is shaping your business, your leadership, and your life.",
      "Every great achievement begins with a private victory over self-limiting beliefs. What you say to yourself matters more than what others say about you.",
      "Your mind is the most powerful tool for transformation. Train it to support your highest aspirations rather than validate your deepest fears."
    ]
  },
  3: {
    id: 3,
    title: 'Clarity Is the New Currency',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    date: 'April 10, 2023',
    readTime: '3 min read',
    tags: ['Strategy', 'Focus', 'Productivity'],
    content: [
      "Confusion is the real barrier to growth—not competition. Clear goals, clear systems, clear communication—these create traction.",
      "When clarity becomes your routine, progress becomes your habit. Ask yourself today: What is my clearest next step?",
      "In a world of information overload, the ability to simplify complexity is a superpower. The clearer your vision, the sharper your execution.",
      "Success isn't just about working hard—it's about knowing precisely where to direct your energy. Clarity cuts through the noise."
    ]
  },
  4: {
    id: 4,
    title: 'Build a Business That Builds You',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    date: 'March 23, 2023',
    readTime: '6 min read',
    tags: ['Business', 'Growth', 'Leadership'],
    content: [
      "Most businesses grow around their founders. The best businesses grow because of them. If your business isn't stretching you, it's not scaling.",
      "Every challenge should stretch your mind, skills, and vision. When you build a business that upgrades you every day, legacy follows.",
      "Your business is not just an income source—it's a personal development platform. Design it to challenge your limitations and expand your capabilities.",
      "The true measure of business success isn't just the profit it generates, but the person it transforms you into."
    ]
  },
  5: {
    id: 5,
    title: 'The Freedom Matrix: Living Beyond Profit',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    date: 'February 15, 2023',
    readTime: '5 min read',
    tags: ['Freedom', 'Systems', 'Lifestyle'],
    content: [
      "Profit is essential. Real freedom is optional. Time freedom. Creative freedom. Leadership freedom. Financial freedom.",
      "To achieve them, build systems that deliver both impact and independence. A business that runs without you is a business that truly frees you.",
      "True entrepreneurial success isn't just about making money—it's about designing a life where you control your time, energy, and impact.",
      "The ultimate business achievement is creating something valuable that doesn't depend on your daily presence to thrive."
    ]
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentBlogId, setCurrentBlogId] = useState(Number(id) || 1);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(24);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Update currentBlogId when URL parameter changes
  useEffect(() => {
    if (id) {
      const blogId = Number(id);
      // Check if the blog with this ID exists
      if (allBlogs[blogId]) {
        setIsLoading(true);
        setCurrentBlogId(blogId);
        window.scrollTo(0, 0);

        // Simulate loading for a smoother transition
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      } else {
        // If blog doesn't exist, redirect to blog list or show not found
        navigate('/blog');
      }
    }
  }, [id, navigate]);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Smith",
      avatar: BlogPhoto,
      text: "This is exactly what I needed to hear. The future is indeed bright if we approach it with the right mindset.",
      timestamp: "2 hours ago",
      likes: 8
    },
    {
      id: 2,
      author: "Sarah Johnson",
      avatar: BlogPhoto,
      text: "Great insights! I especially appreciate the point about healthcare advancements. It's amazing to see how technology is transforming medicine.",
      timestamp: "5 hours ago",
      likes: 5
    },
    {
      id: 3,
      author: "Michael Brown",
      avatar: BlogPhoto,
      text: "Very thought-provoking article. It's refreshing to see such an optimistic yet realistic take on technological advancement.",
      timestamp: "1 day ago",
      likes: 12
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
        avatar: BlogPhoto,
        text: comment,
        timestamp: "Just now",
        likes: 0
      };
      const updatedComments = [newComment, ...comments];
      setComments(updatedComments);
      setComment('');
    }
  };
  const handleReadMore = (blogId) => {
    // Navigate to the correct blog URL instead of just updating state
    navigate(`/blog/${blogId}`);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  if (!currentBlog) return <div>Blog not found</div>;

  return (
    <div className="blog-detail-page">
      <Header />

      <div className={`blog-detail-wrapper ${isLoading ? 'loading' : ''}`}>
        <div className="blog-detail-back-link">
          <Link to="/blog" className="blog-back-btn">
            <FaArrowLeft className="back-icon" /> Back to Articles
          </Link>
        </div>

        <div className="blog-detail-header">
          <div className="blog-detail-image-container">
            <img src={currentBlog.image} alt={currentBlog.title} className="blog-detail-image" />
            <div className="blog-detail-overlay"></div>
          </div>

          <div className="blog-detail-header-content">
            <div className="blog-detail-meta">
              <span className="blog-detail-date">
                <FaCalendarAlt className="blog-detail-icon" /> {currentBlog.date}
              </span>
              <span className="blog-detail-divider">•</span>
              <span className="blog-detail-readtime">
                <FaClock className="blog-detail-icon" /> {currentBlog.readTime}
              </span>
            </div>

            <h1 className="blog-detail-title">{currentBlog.title}</h1>

            <div className="blog-detail-author">
              <div className="blog-detail-author-info">
                <img src={currentBlog.image} alt={currentBlog.author} className="blog-detail-author-avatar" />
                <span className="blog-detail-author-name">
                  <FaUser className="blog-detail-icon" /> {currentBlog.author}
                </span>
              </div>
            </div>

            <div className="blog-detail-tags">
              {currentBlog.tags.map((tag, index) => (
                <span key={index} className="blog-detail-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-detail-container">
          <div className="blog-detail-content">
            {currentBlog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="blog-detail-actions">
            {/* <div className="blog-detail-action-left">
              <button
                className={`blog-detail-like-btn ${isLiked ? 'active' : ''}`}
                onClick={handleLike}
                title={isLiked ? "Unlike" : "Like this article"}
              >
                <FaHeart className="blog-detail-action-icon" />
                <span>{likes}</span>
              </button>

              <button className="blog-detail-comment-btn" title="Go to comments">
                <FaComment className="blog-detail-action-icon" />
                <span>{comments.length}</span>
              </button>
            </div> */}

            {/* <div className="blog-detail-action-right">
              <button className="blog-detail-share-btn" title="Share this article">
                <FaShare className="blog-detail-action-icon" />
                <span>Share</span>
              </button>

              <button
                className={`blog-detail-bookmark-btn ${isBookmarked ? 'active' : ''}`}
                onClick={handleBookmark}
                title={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
              >
                <FaBookmark className="blog-detail-action-icon" />
                <span>{isBookmarked ? "Saved" : "Save"}</span>
              </button>
            </div> */}
          </div>

          <div className="blog-detail-tags-section">
            <h3 className="blog-detail-tags-title">
              <FaTags className="blog-detail-icon" /> Tags
            </h3>
            <div className="blog-detail-tags-list">
              {currentBlog.tags.map((tag, index) => (
                <span key={index} className="blog-detail-tag-large">{tag}</span>
              ))}
            </div>
          </div>

          <div className="blog-comments-section">
            <h2 className="blog-comments-title">
              <FaComment className="blog-detail-icon" /> Comments ({comments.length})
            </h2>

            <form onSubmit={handleCommentSubmit} className="comment-form">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts..."
                required
              />
              <button type="submit">Post Comment</button>
            </form>

            <div className="comments-list">
              {comments.map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <div className="comment-user">
                      <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                      <span className="comment-author">{comment.author}</span>
                    </div>
                    <span className="comment-time">{comment.timestamp}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                  <div className="comment-actions">
                    <button className="comment-like-btn">
                      <FaHeart className="comment-action-icon" /> {comment.likes}
                    </button>
                    <button className="comment-reply-btn">Reply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="related-blogs">
          <h2 className="related-blogs-title">Related Articles</h2>
          <div className="related-blogs-grid">
            {relatedBlogs.map(blog => (
              <div key={blog.id} className="related-blog-card">
                <div className="related-blog-image-container">
                  <img src={blog.image} alt={blog.title} className="related-blog-img" />
                  <div className="related-blog-overlay"></div>
                </div>
                <div className="related-blog-content">
                  <div className="related-blog-meta">
                    <span className="related-blog-date">{blog.date}</span>
                    <span className="related-blog-divider">•</span>
                    <span className="related-blog-readtime">
                      <FaClock className="blog-icon" /> {blog.readTime}
                    </span>
                  </div>
                  <h3 className="related-blog-title">{blog.title}</h3>
                  <div className="related-blog-tags">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="related-blog-tag">{tag}</span>
                    ))}
                  </div>
                  <button
                    className="related-blog-read-btn"
                    onClick={() => handleReadMore(blog.id)}
                  >
                    Read Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-newsletter">
          <div className="blog-newsletter-content">
            <h3 className="blog-newsletter-title">Enjoyed this article?</h3>
            <p className="blog-newsletter-text">
              Subscribe to our newsletter to receive more insightful content directly in your inbox.
            </p>

            <form className="blog-newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="blog-newsletter-input"
                required
              />
              <button type="submit" className="blog-newsletter-btn">Subscribe</button>
            </form>

            <p className="blog-newsletter-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;