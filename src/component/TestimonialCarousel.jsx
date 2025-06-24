import React, { useState, useRef, useEffect } from 'react';
import './TestimonialCarousel.css';

// Function to extract YouTube video ID
const extractYouTubeVideoId = (url) => {
  // Handle youtu.be format
  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1].split('?')[0];
  }
  // Handle youtube.com format
  else if (url.includes('youtube.com/watch')) {
    const params = new URLSearchParams(url.split('?')[1]);
    return params.get('v');
  }
  // Return as is if it's already just an ID
  return url;
};

// Just 2 testimonials to match the image exactly
const testimonials = [
  {
    name: 'Ruchita Shah',
    role: 'DF Network LLP',
    text: '"I grew so much through this program—personally and professionally. It boosted my confidence, sharpened my skills, and surrounded me with support. I truly recommend it to anyone seeking real change."',
    videoId: 'xX7lBxQgh0o'
  },
  {
    name: 'Siddhesh Sawant',
    role: 'North Light Studio',
    text: '"This program gave me practical tools to overcome challenges and communicate better. I\'m so thankful for the mentorship I received—it\'s made a real difference in my personal and professional life."',
    videoId: extractYouTubeVideoId('https://youtu.be/Bz_97XhIF_g')
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Start muted for YouTube embed
  const iframeRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  // Set up YouTube iframe API
  useEffect(() => {
    // Add YouTube API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Listen for messages from YouTube iframe
    const handleMessage = (event) => {
      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onReady') {
            setPlayerReady(true);
          }
        } catch (e) {
          // Not a JSON message from our iframe
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  // Handle testimonial switching
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    setPlayerReady(false); // Reset player state when switching testimonials
    setIsMuted(true); // Reset to muted when switching videos
  };
  // Toggle mute/unmute for YouTube video
  const toggleMute = () => {
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        // Send postMessage to YouTube iframe to mute/unmute
        const newMuteState = !isMuted;

        const command = newMuteState ? 'mute' : 'unMute';

        // Use YouTube Player API via postMessage - both formats for compatibility
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: command,
            args: []
          }),
          '*'
        );

        // Also try the alternative message format
        iframe.contentWindow.postMessage(
          `{"event":"command","func":"${command}","args":""}`,
          '*'
        );

        console.log(`Attempting to ${command} YouTube video`);

        // Update mute state
        setIsMuted(newMuteState);
      } else {
        console.warn("YouTube iframe not ready yet");
      }
    } catch (error) {
      console.error("Error toggling YouTube mute state:", error);
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Participants Say</h2>
        <p className="testimonials-subtitle">Hear from those who have experienced the transformation</p>

        {/* Active testimonial card */}
        <div className="testimonial-card">          <div className="testimonial-content">
          <div className="testimonial-video">
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${testimonials[activeIndex].videoId}?autoplay=1&enablejsapi=1&mute=1&modestbranding=1&rel=0&origin=${window.location.origin}`}
              title="Testimonial video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
            ></iframe>            {/* Audio icon in bottom right corner */}
            <div className="volume-control" onClick={toggleMute}>
              <div className="volume-icon">
                {isMuted ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Testimonial text content */}
          <div className="testimonial-text-container">
            <blockquote className="testimonial-quote">
              {testimonials[activeIndex].text}
            </blockquote>
            <div className="testimonial-author">
              <strong>{testimonials[activeIndex].name}</strong>, {testimonials[activeIndex].role}
            </div>
          </div>
        </div>
        </div>

        {/* Navigation dots */}
        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;