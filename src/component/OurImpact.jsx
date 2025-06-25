import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OurImpact.css';

// Import company logos
import TataLogo from './images/TataLogo.png';
import VodaphoneLogo from './images/Vodaphone.jpg';
import GodrejLogo from './images/GodrejLogo.png';
import HyundaiLogo from './images/HyundaiLogo.png';
import MahindraLogo from './images/MahindraLogo.png';

const impactData = [
  { value: 201473, label: 'LIVES TOUCHED', color: '#3aebd7' },
  { value: 80589, label: 'CUSTOMERS TRANSFORMED', color: '#ffb347' },
  { value: 3626, label: 'SUCCESS STORIES', color: '#6be36b' },
  { value: 151, label: 'COMPANIES SERVED', color: '#ff914d' },
];

const companyLogos = [
  { logo: TataLogo, name: 'TATA', color: '#3a8dde' },
  { logo: VodaphoneLogo, name: 'VODAFONE', color: '#ff914d' },
  { logo: GodrejLogo, name: 'GODREJ', color: '#6be36b' },
  { logo: HyundaiLogo, name: 'HYUNDAI', color: '#3aebd7' },
  { logo: MahindraLogo, name: 'MAHINDRA', color: '#ffb347' }
];

function useCountUp(target, start, duration, trigger) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    if (!trigger) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (target - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [target, start, duration, trigger]);
  return count;
}

const OurImpact = () => {
  const sectionRef = useRef();
  const marqueeRef = useRef();
  const [inView, setInView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  // Duplicate company logos for seamless loop
  const allCompanies = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

  const count1 = useCountUp(impactData[0].value, 0, 1800, inView);
  const count2 = useCountUp(impactData[1].value, 0, 1800, inView);
  const count3 = useCountUp(impactData[2].value, 0, 1800, inView);
  const count4 = useCountUp(impactData[3].value, 0, 1800, inView);

  return (
    <section className="impact-bg" ref={sectionRef}>
      <h2 className="impact-title">OUR IMPACT</h2>
      <div className="impact-cards-row">
        <div className="impact-card" style={{ '--glow-color': impactData[0].color }}>
          <div className="impact-number" style={{ color: impactData[0].color }}>
            {count1.toLocaleString()}+
          </div>
          <div className="impact-label">{impactData[0].label}</div>
          <div className="impact-progress-bar">
            <div className="impact-progress" style={{ background: impactData[0].color }}></div>
          </div>
        </div>
        <div className="impact-card" style={{ '--glow-color': impactData[1].color }}>
          <div className="impact-number" style={{ color: impactData[1].color }}>
            {count2.toLocaleString()}+
          </div>
          <div className="impact-label">{impactData[1].label}</div>
          <div className="impact-progress-bar">
            <div className="impact-progress" style={{ background: impactData[1].color }}></div>
          </div>
        </div>
        <div className="impact-card" style={{ '--glow-color': impactData[2].color }}>
          <div className="impact-number" style={{ color: impactData[2].color }}>
            {count3.toLocaleString()}+
          </div>
          <div className="impact-label">{impactData[2].label}</div>
          <div className="impact-progress-bar">
            <div className="impact-progress" style={{ background: impactData[2].color }}></div>
          </div>
        </div>
        <div className="impact-card" style={{ '--glow-color': impactData[3].color }}>
          <div className="impact-number" style={{ color: impactData[3].color }}>
            {count4.toLocaleString()}+
          </div>
          <div className="impact-label">{impactData[3].label}</div>
          <div className="impact-progress-bar">
            <div className="impact-progress" style={{ background: impactData[3].color }}></div>
          </div>
        </div>
      </div>      <div className="impact-marquee-container">
        <div className="impact-marquee" ref={marqueeRef}>
          <div className="impact-marquee-inner">
            {allCompanies.map((company, i) => (
              <div className="company-logo-container" key={i} style={{ '--company-color': company.color }}>
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-logo"
                  title={company.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
