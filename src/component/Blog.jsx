import React, { useState, useEffect } from 'react';
import './Blog.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import BlogPhoto from './images/santosh.jpg';
import Footer from './Footer';
import { FaSearch, FaClock, FaBookmark, FaShare, FaTags } from 'react-icons/fa';

const featuredBlog = {
  id: 1,
  title: 'Are You a Dreamer or a Doer?',
  author: 'Santosh Nair',
  image: BlogPhoto,
  date: 'May 15, 2023',
  readTime: '5 min read',
  description: 'Too many get lost in ideas, believing success happens from thinking alone. Dreamers envision. Doers execute. The dream fuels your purpose—execution brings it to life. What matters isn\'t how big your dream is—it\'s how strong your doing muscle.',
  tags: ['Leadership', 'Motivation', 'Success']
};

const blogTeaser = {
  id: 2,
  quote: 'Why do we remain disturbed?',
  text: 'Explore the root causes of our persistent worries and how to overcome them for a more peaceful life.',
  cta: 'Discover inner peace'
};

const blogCards = [
  {
    id: 2,
    title: 'Why Your Inner Voice Defines Your Outer Reality',
    author: 'Santosh Nair',
    image: BlogPhoto,
    date: 'April 28, 2023',
    readTime: '4 min read',
    text: 'The opinions you hold about yourself determine the world you build around you. Self-doubt builds blocks; self-belief builds bridges. "Speak to yourself with the respect you reserve for others—and watch your world change." Check your inner dialogue—it is shaping your business, your leadership, and your life.',
    tags: ['Mindset', 'Growth', 'Self-Development']
  },
  {
    id: 3,
    title: 'Clarity Is the New Currency',
    author: 'Santosh Nair',
    image: BlogPhoto,
    date: 'April 10, 2023',
    readTime: '3 min read',
    text: 'Confusion is the real barrier to growth—not competition. Clear goals, clear systems, clear communication—these create traction. When clarity becomes your routine, progress becomes your habit. Ask yourself today: What is my clearest next step?',
    tags: ['Strategy', 'Focus', 'Productivity']
  },
  {
    id: 4,
    title: 'Build a Business That Builds You',
    author: 'Santosh Nair',
    image: BlogPhoto,
    date: 'March 23, 2023',
    readTime: '6 min read',
    text: 'Most businesses grow around their founders. The best businesses grow because of them. If your business isn\'t stretching you, it\'s not scaling. Every challenge should stretch your mind, skills, and vision. When you build a business that upgrades you every day, legacy follows.',
    tags: ['Business', 'Growth', 'Leadership']
  },
  {
    id: 1,
    title: 'The Freedom Matrix: Living Beyond Profit',
    author: 'Santosh Nair',
    image: BlogPhoto,
    date: 'February 15, 2023',
    readTime: '5 min read',
    text: 'Profit is essential. Real freedom is optional. Time freedom. Creative freedom. Leadership freedom. Financial freedom. To achieve them, build systems that deliver both impact and independence. A business that runs without you is a business that truly frees you.',
    tags: ['Freedom', 'Systems', 'Lifestyle']
  },
];

const categories = [
  { name: 'All', count: 12 },
  { name: 'Leadership', count: 5 },
  { name: 'Mindset', count: 4 },
  { name: 'Business', count: 3 },
  { name: 'Growth', count: 7 }
];

const Blog = () => {
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  // Filter by search text and category
  const filteredCards = blogCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || card.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 3);

  return (
    <div className="blog-bg">
      <Header />

      <div className="blog-content-wrapper">
        {/* Hero Section with Featured Blog */}
        <section className="blog-hero">
          <div className="blog-hero-featured">
            <div className="blog-hero-featured-content">
              <div className="blog-featured-meta">
                <span className="blog-featured-date">{featuredBlog.date}</span>
                <span className="blog-featured-divider">•</span>
                <span className="blog-featured-readtime">
                  <FaClock className="blog-icon" /> {featuredBlog.readTime}
                </span>
              </div>

              <h1 className="blog-featured-title">{featuredBlog.title}</h1>

              <div className="blog-featured-author">
                <img src={featuredBlog.image} alt={featuredBlog.author} className="blog-author-avatar" />
                <span>By {featuredBlog.author}</span>
              </div>

              <p className="blog-featured-desc">{featuredBlog.description}</p>

              <div className="blog-featured-tags">
                {featuredBlog.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>              <button className="blog-featured-btn" onClick={() => navigate(`/blog/${featuredBlog.id}`)}>
                Read Full Article
              </button>
            </div>

            <div className="blog-hero-featured-image">
              <img src={featuredBlog.image} alt="Featured blog" className="blog-hero-img" />
              <div className="blog-featured-image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Teaser Quote Section */}
        <section className="blog-teaser">
          <div className="blog-teaser-content">
            <div className="blog-teaser-quote">"{blogTeaser.quote}"</div>
            <p className="blog-teaser-text">{blogTeaser.text}</p>            <button className="blog-teaser-btn" onClick={() => navigate(`/blog/${blogTeaser.id}`)}>
              {blogTeaser.cta}
            </button>
          </div>
        </section>

        {/* Main Blog Section */}
        <section className="blog-main">
          <div className="blog-main-header">
            <h2 className="blog-section-title">Explore Our Articles</h2>

            <div className="blog-search-wrapper">
              <div className={`blog-search-container ${isSearchFocused ? 'focused' : ''}`}>
                <FaSearch className="blog-search-icon" />
                <input
                  className="blog-search"
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="blog-categories">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`blog-category-btn ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name} <span className="blog-category-count">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}          <div className="blog-card-grid">
            {visibleCards.map((card, idx) => (
              <div className="blog-card" key={idx}>
                <div className="blog-card-image-container">
                  <img src={card.image} alt={card.title} className="blog-card-img" />
                  <div className="blog-card-image-overlay"></div>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{card.date}</span>
                    <span className="blog-card-divider">•</span>
                    <span className="blog-card-readtime">
                      <FaClock className="blog-icon" /> {card.readTime}
                    </span>
                  </div>

                  <h3 className="blog-card-title">{card.title}</h3>

                  <p className="blog-card-text">{card.text}</p>

                  <div className="blog-card-tags">
                    <FaTags className="blog-icon blog-tag-icon" />
                    {card.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="blog-card-tag">{tag}</span>
                    ))}
                    {card.tags.length > 2 && <span className="blog-card-tag-more">+{card.tags.length - 2}</span>}
                  </div>                  <div className="blog-card-footer">
                    <button className="blog-card-btn" onClick={() => navigate(`/blog/${card.id}`)}>
                      Read More
                    </button>

                    {/* <div className="blog-card-actions">
                      <button className="blog-card-action-btn" title="Bookmark">
                        <FaBookmark />
                      </button>
                      <button className="blog-card-action-btn" title="Share">
                        <FaShare />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredCards.length > 3 && (
            <div className="blog-load-more">
              <button className="blog-load-more-btn" onClick={() => setShowAll(v => !v)}>
                {showAll ? 'View Less' : 'View More Articles'}
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="blog-newsletter">
          <div className="blog-newsletter-content">
            <h3 className="blog-newsletter-title">Stay Updated with Our Latest Insights</h3>
            <p className="blog-newsletter-text">
              Subscribe to our newsletter and never miss the latest articles, updates, and exclusive content.
            </p>

            <form className="blog-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="blog-newsletter-input"
              />
              <button type="submit" className="blog-newsletter-btn">Subscribe</button>
            </form>

            <p className="blog-newsletter-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;