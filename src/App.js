import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from './component/ScrollToTop';
import Events from './component/Events';
import Home from "./component/Home";
import OurImpact from './component/OurImpact';
import About from "./component/About";
import People from "./component/AboutSmmart";
import Career from "./component/Career";
import OfferSection from './component/OfferSection';
import Blog from "./component/Blog";
import BlogDetail from "./component/BlogDetail";
import Merchandise from "./component/Merchandise";
import BookDetail from "./component/BookDetail";
import Contact from "./component/Contact";
import ApplyJob from "./component/ApplyJob";
import Featured from './component/Featured';
import FAQSection from './component/FAQSection';
import TestimonialCarousel from './component/TestimonialCarousel';
import NotFound from './component/NotFound';
import Footer from './component/Footer';
import './App.css';
import AboutSmmart from './component/AboutSmmart';

// Component to wrap route elements and force scroll to top
const ScrollToTopWrapper = ({ children }) => {
  useEffect(() => {
    // Force scroll to top with multiple approaches
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
    console.log("ScrollToTopWrapper executed");
  }, []);

  return <>{children}</>;
};

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Force scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    console.log("App location change scroll reset:", location.pathname);
  }, [location]);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Featured />
            <OfferSection />
            <TestimonialCarousel />
            <OurImpact />
            <FAQSection />
            <Footer />
          </>
        } />        <Route path="/about" element={<ScrollToTopWrapper><About /></ScrollToTopWrapper>} />
        <Route path="/about/AboutSmmart" element={<ScrollToTopWrapper><AboutSmmart /></ScrollToTopWrapper>} />
        <Route path="/careers" element={<ScrollToTopWrapper><Career /></ScrollToTopWrapper>} />
        <Route path="/careers/apply/:id" element={<ScrollToTopWrapper><ApplyJob /></ScrollToTopWrapper>} />
        <Route path="/blog" element={<ScrollToTopWrapper><Blog /></ScrollToTopWrapper>} />
        <Route path="/blog/:id" element={<ScrollToTopWrapper><BlogDetail /></ScrollToTopWrapper>} />
        <Route path="/merchandise" element={<ScrollToTopWrapper><Merchandise /></ScrollToTopWrapper>} />
        <Route path="/merchandise/:id" element={<ScrollToTopWrapper><BookDetail /></ScrollToTopWrapper>} />
        <Route path="/contact" element={<ScrollToTopWrapper><Contact /></ScrollToTopWrapper>} />
        <Route path="/events" element={<ScrollToTopWrapper><Events /></ScrollToTopWrapper>} />
        <Route path="*" element={<ScrollToTopWrapper><NotFound /></ScrollToTopWrapper>} />
      </Routes>
    </div>
  );
}

export default App;
