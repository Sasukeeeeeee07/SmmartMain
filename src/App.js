import React from 'react';
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
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
import Contact from "./component/Contact";
import ApplyJob from "./component/ApplyJob";
import Featured from './component/Featured';
import FAQSection from './component/FAQSection';

import './App.css';

function AppContent() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== "/apply";

  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/people" element={<People />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/events" element={<Events />} />
      </Routes>
     
    </>
  );
}

function App() {
  return (
    <div>
      <Home />
      <Featured />
      <OfferSection />
      <OurImpact />
      <FAQSection />
      <Footer />
      
    </div>
  );
}

export default App;
