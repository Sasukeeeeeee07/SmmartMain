import React, { useState, useRef, useEffect } from 'react';
import SmmartText from './SmmartText';
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
    name: 'Chirag Katira',
    role: 'SNGT Director',
    text: '"Chirag, Director of SNGT Group, congratulates smmart for completing 25 years and empowering over 30,000 entrepreneurs. He credits smmart for SNGTs growth from ₹25 crores in 2011 to over ₹150 crores today. After his father Rajesh Katira joined the Tiger Program, followed by Chira and his cousins, the company expanded to 90+ branches (90% owned), entered warehousing (5 lakh sq. ft.), and diversified into six other businesses. Managing their joint family business of 32 members with a 10-member core team has been smooth due to <SmmartText>smmart</SmmartText> clarity in vision, mission, and purpose. He thanks Santosh Sir and Sindhu Maam sincerely."',
    videoId: 'xX7lBxQgh0o'
  },
  {
    name: 'Truven Jorge',
    role: 'Co-founder of Yellow (Goa)',
    text: '"The co-founder of Yellow (Goa) realized he was blocking his companys growth. After the first session, he delegated 80% of his tasks, promoted juniors, eliminated non-revenue work, and gained personal freedom. Sales began growing 100% monthly, and he even enjoyed a stress-free anniversary. He overcame trust issues, embraced team responsibility, and implemented systems. He calls the transformation massive and says the program returned 100x the value of his investment."',
    videoId: extractYouTubeVideoId('https://youtu.be/Bz_97XhIF_g'),
  },
  {
    name: 'Noureen & Nazim Hemani',
    role: 'Entrepreneur Gurukul Participants',
    text: '"Hear the inspiring journey of Noureen & Nazim Hemani and how Entrepreneur Gurukul transformed their business approach and mindset."',
    videoId: 'hb4Oytamyko'
  },
  {
    name: 'Mr Mahendra Mehta',
    role: 'Entrepreneur Gurukul Participant',
    text: '"Mr Mahendra Mehta shares his transformative experience with Entrepreneur Gurukul and the impact it had on his entrepreneurial journey."',
    videoId: 'eiufBXbw3ZQ'
  },
  {
    name: 'Sandeep Sanghvi',
    role: 'Entrepreneur Gurukul Participant',
    text: '"Sandeep Sanghvi discusses how Entrepreneur Gurukul helped him scale his business and overcome entrepreneurial challenges."',
    videoId: 'BZ9JjbNRa_c'
  },
  {
    name: 'Kailash Batra',
    role: 'Entrepreneur Gurukul Participant',
    text: '"Kailash Batra explains the powerful insights and strategies he gained from the Entrepreneur Gurukul program."',
    videoId: 'Gr4kXGvbwj4'
  },
  {
    name: 'Pradeep Narkhede',
    role: 'Entrepreneur Gurukul Participant',
    text: '"Pradeep Narkhede shares his success story and the transformation he experienced through Entrepreneur Gurukul."',
    videoId: '-6LEAjEttfM'
  },
  {
    name: 'Mr. Punit',
    role: 'Entrepreneur Gurukul Participant',
    text: '"Mr. Punit discusses how the Entrepreneur Gurukul program changed his perspective on business and leadership."',
    videoId: 'YsXhdiOAJQc'
  },
  {
    name: 'Sourik Shah',
    role: 'Entrepreneur Gurukul Participant',
    text: '"Sourik Shah shares his experience with Entrepreneur Gurukul and the practical insights that helped grow his business."',
    videoId: 'lo0rcM6GeKM'
  },
  {
    name: 'Mixed Testimonials',
    role: 'Entrepreneur Gurukul Participants',
    text: '"A compilation of powerful testimonials from multiple Entrepreneur Gurukul participants sharing their transformation stories."',
    videoId: 'UEwRPQ2tZqU'
  },
];


const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [key, setKey] = useState(0); // Add a key to force iframe reload
  const iframeRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  // Set up YouTube iframe API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    setPlayerReady(false);
    setIsMuted(true);
    setKey(prevKey => prevKey + 1); // Force iframe reload
  };

  const handlePrevClick = () => {
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    handleIndicatorClick(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    handleIndicatorClick(nextIndex);
  };

  const toggleMute = () => {
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        const newMuteState = !isMuted;
        const command = newMuteState ? 'mute' : 'unMute';

        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: command,
            args: []
          }),
          '*'
        );

        iframe.contentWindow.postMessage(
          `{"event":"command","func":"${command}","args":""}`,
          '*'
        );

        setIsMuted(newMuteState);
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

        <button
          className="testimonial-arrow testimonial-arrow-prev"
          onClick={handlePrevClick}
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          className="testimonial-arrow testimonial-arrow-next"
          onClick={handleNextClick}
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-video">
              <iframe
                key={key} // Add key to force reload
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${testimonials[activeIndex].videoId}?autoplay=1&enablejsapi=1&mute=1&modestbranding=1&rel=0&origin=${window.location.origin}`}
                title="Testimonial video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-iframe"
              ></iframe>
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