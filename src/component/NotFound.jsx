import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-text">
          <h1 className="error-404">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <h2>OOOPS... Page Not Found</h2>
          <p>The page you are looking for doesn't exist</p>
          <button onClick={() => navigate('/')} className="go-home-btn">
            GO HOME
          </button>
        </div>
        <div className="illustration-container">
          <div className="character left-character">
            <div className="character-body"></div>
          </div>
          <div className="character right-character">
            <div className="character-body"></div>
          </div>
          <div className="decorative-elements">
            <div className="leaf leaf-1"></div>
            <div className="leaf leaf-2"></div>
            <div className="leaf leaf-3"></div>
            <div className="leaf leaf-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 