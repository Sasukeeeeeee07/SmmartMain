import React, { useState } from 'react';
import './Blog.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import BlogPhoto from './images/santosh.jpg';
import Footer from './Footer';

const featuredBlog = {
  title: 'Embracing the future : Why abundance awaits us all.',
  author: 'Dr. Smmart',
  image: BlogPhoto,
  description: 'A deep dive into the mindset shifts needed to thrive in a world of exponential change. Discover how to unlock abundance in your life and business.',
};

const blogTeaser = {
  quote: 'Why do we remain disturbed?',
  text: 'Explore the root causes of our persistent worries and how to overcome them for a more peaceful life.',
};

const blogCards = [
  {
    title: 'How to embrace change as an entrepreneur',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    text: 'Change is inevitable. Learn how to adapt and thrive in a rapidly evolving business landscape.',
  },
  {
    title: 'The power of positive thinking',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    text: 'Harness the power of your mind to create success and happiness in all areas of your life.',
  },
  {
    title: 'Building resilience in tough times',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    text: 'Discover strategies to stay strong and bounce back from setbacks, both personally and professionally.',
  },
  {
    title: 'Building resilience in tough times',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    text: 'Discover strategies to stay strong and bounce back from setbacks, both personally and professionally.',
  },
  {
    title: 'Building resilience in tough times',
    author: 'Dr. Smmart',
    image:BlogPhoto,
    text: 'Discover strategies to stay strong and bounce back from setbacks, both personally and professionally.',
  },
  {
    title: 'Building resilience in tough times',
    author: 'Dr. Smmart',
    image: BlogPhoto,
    text: 'Discover strategies to stay strong and bounce back from setbacks, both personally and professionally.',
  },
];

const Blog = () => {
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const filteredCards = blogCards.filter(card => card.title.toLowerCase().includes(search.toLowerCase()));
  const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 3);

  return (
    <div className="blog-bg">
      <Header />
      <section className="blog-hero">
        <div className="blog-hero-featured attractive-featured">
          <img src={featuredBlog.image} alt="author" className="blog-hero-img" style={{width:'180px',height:'180px'}} />
          <div className="blog-hero-content">
            <h1 className="featured-title">{featuredBlog.title}</h1>
            <div className="blog-hero-author">By <span className="featured-author">{featuredBlog.author}</span></div>
            <p className="featured-desc">{featuredBlog.description}</p>
            <button className="blog-btn" onClick={() => navigate('/blog/1')}>Read More</button>
          </div>
        </div>
      </section>
      <section className="blog-mid-banner">
        <div className="blog-mid-quote">{blogTeaser.quote}</div>
        <div className="blog-mid-text">{blogTeaser.text}</div>
      </section>
      <section className="blog-main">
        <div className="blog-main-header">
          <h2>TOP PICKS FOR YOU</h2>
          <input
            className="blog-search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="blog-card-grid">
          {visibleCards.map((card, idx) => (
            <div className="blog-card" key={idx}>
              <img src={card.image} alt="author" className="blog-card-img" />
              <div className="blog-card-content">
                <h3>{card.title}</h3>
                <div className="blog-card-author">By {card.author}</div>
                <p>{card.text}</p>
                <button className="blog-btn" onClick={() => navigate('/blog/1')}>Read More</button>
              </div>
            </div>
          ))}
        </div>
        {filteredCards.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <button className="blog-btn" onClick={() => setShowAll(v => !v)}>
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </section>
      {/* <Footer />
       */}
    </div>
  );
};

export default Blog; 