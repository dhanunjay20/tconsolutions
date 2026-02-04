import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Add this import
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import TechStack from './pages/TechStack';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component */}
      <div className="App overflow-x-hidden max-w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/apply/:jobId" element={<ApplyJob />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
