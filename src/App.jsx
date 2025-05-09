// App.js - Main Application Component
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { init } from '@emailjs/browser';
init("ih6seffDX1_fFhjSV");

// Components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import ChemicalDivision from './pages/ChemicalDivision';
import IndustrialDivision from './pages/IndustrialDivision';
import FoodBeverageDivision from './pages/FoodBeverageDivision';
import ITDivision from './pages/ITDivision';
import Enquiry from './pages/Enquiry';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/chemical" element={<ChemicalDivision />} />
          <Route path="/business/industrial" element={<IndustrialDivision />} />
          <Route path="/business/food-beverage" element={<FoodBeverageDivision />} />
          <Route path="/business/it" element={<ITDivision />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;