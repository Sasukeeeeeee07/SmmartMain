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
import About from "./component/About";
import People from "./component/People";
import Career from "./component/Career";
import Blog from "./component/Blog";
import BlogDetail from "./component/BlogDetail";
import Merchandise from "./component/Merchandise";
import Contact from "./component/Contact";
import ApplyJob from "./component/ApplyJob";
import './App.css';

function AppContent() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== "/apply";

  return (
    <>
      {showHeaderFooter && <Header />}
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
      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    
      <AppContent />
    
  );
}

export default App;
