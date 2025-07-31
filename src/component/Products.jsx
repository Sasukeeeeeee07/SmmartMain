import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import './Products.css';

// For now, using placeholder images - you can replace these with actual product images
// Using a consistent placeholder service for better visual presentation
const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x250/3a8dde/ffffff?text=SMMART+Calendar',
    title: 'SMMART Annual Calendar 2025',
    price: '₹299',
    category: 'Calendar',
    description: 'A beautifully designed annual calendar featuring motivational quotes and SMMART principles to keep you inspired throughout the year.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x250/2c5aa0/ffffff?text=SMMART+Mug',
    title: 'SMMART Motivation Mug',
    price: '₹399',
    category: 'Mug',
    description: 'Start your day with inspiration! This ceramic mug features powerful quotes from Santosh Nair and SMMART branding.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x250/4a9eff/ffffff?text=SMMART+T-Shirt',
    title: 'SMMART Premium T-Shirt',
    price: '₹799',
    category: 'T-Shirt',
    description: 'High-quality cotton t-shirt with the SMMART logo. Available in multiple sizes and colors.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x250/3a8dde/ffffff?text=SMMART+Cap',
    title: 'SMMART Baseball Cap',
    price: '₹499',
    category: 'Cap',
    description: 'Stylish baseball cap with embroidered SMMART logo. Perfect for outdoor activities and casual wear.',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300x250/2c5aa0/ffffff?text=Success+Journal',
    title: 'SMMART Success Journal',
    price: '₹599',
    category: 'Stationery',
    description: 'A premium journal designed for goal setting, reflection, and tracking your success journey.',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/300x250/4a9eff/ffffff?text=Laptop+Bag',
    title: 'SMMART Laptop Bag',
    price: '₹1299',
    category: 'Bag',
    description: 'Professional laptop bag with SMMART branding, perfect for entrepreneurs and professionals.',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/300x250/3a8dde/ffffff?text=Water+Bottle',
    title: 'SMMART Water Bottle',
    price: '₹349',
    category: 'Drinkware',
    description: 'Stainless steel water bottle with motivational quotes to keep you hydrated and inspired.',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/300x250/2c5aa0/ffffff?text=Pen+Set',
    title: 'SMMART Premium Pen Set',
    price: '₹899',
    category: 'Stationery',
    description: 'Elegant pen set in a gift box, perfect for professionals and as corporate gifts.',
  },
];

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Calendar', 'Mug', 'T-Shirt', 'Cap', 'Stationery', 'Bag', 'Drinkware'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  const slideUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={slideUp} className="products-bg">
      <Header />


      <div className="products-content">
        <div className="products-header">
          <h2>SMMART Products</h2>
          <p>Discover our range of premium products designed to inspire and motivate your success journey.</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {displayedProducts.map(product => (
            <motion.div
              className="product-card"
              key={product.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >              <div className="product-img-wrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="product-img-fallback" style={{ display: 'none' }}>
                  <div className="fallback-content">
                    <h4>{product.category}</h4>
                    <p>SMMART</p>
                  </div>
                </div>
                <div className="product-overlay">
                  <span className="product-category">{product.category}</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">{product.price}</div>
                <div className="product-desc">{product.description}</div>                <div className="product-actions">
                  <Link
                    to="/contact"
                    className="product-buy-btn"
                    state={{
                      product: {
                        title: product.title,
                        category: product.category,
                        price: product.price,
                        type: 'product'
                      }
                    }}
                  >
                    Buy Now
                  </Link>
                  <Link
                    to="/contact"
                    className="product-enquiry-btn"
                    state={{
                      product: {
                        title: product.title,
                        category: product.category,
                        price: product.price,
                        type: 'enquiry'
                      }
                    }}
                  >
                    Enquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && filteredProducts.length > 6 && (
          <div className="view-more-container">
            <motion.button
              className="view-more-btn"
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Products
            </motion.button>
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default Products;
