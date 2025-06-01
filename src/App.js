import React from 'react';
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Events from './component/Events';
import Home from "./component/Home";
import OurImpact from './component/OurImpact';
import About from "./component/About";
import People from "./component/People";
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

import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Featured />
            <OfferSection />
            <TestimonialCarousel />
            <OurImpact />
            <FAQSection />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/about/people" element={<People />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/merchandise/:id" element={<BookDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
