// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/kerala.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Change this value to control when the navbar changes color
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setShowDropdown(false);
  }, [location]);
  
  // Handle business link click
  const handleBusinessClick = (e) => {
    // If we're directly clicking on the span or the dropdown icon
    if (e.target.tagName.toLowerCase() === 'span' || e.target.tagName.toLowerCase() === 'i') {
      e.preventDefault();
      setShowDropdown(!showDropdown);
    } else {
      // Navigate to main business page
      setShowDropdown(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Kerala Exim" />
        </Link>
        
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About Us
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <Link 
              to="/business" 
              className={location.pathname.includes('/business') ? 'active' : ''}
              onClick={handleBusinessClick}
            >
              Business
              <i className={`fa-solid fa-chevron-down ${showDropdown ? 'rotate' : ''}`}></i>
            </Link>
            <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
              <li>
                <Link to="/business/chemical">Chemical Division</Link>
              </li>
              <li>
                <Link to="/business/industrial">Industrial Division</Link>
              </li>
              <li>
                <Link to="/business/food-beverage">Food & Beverages</Link>
              </li>
              <li>
                <Link to="/business/it">IT Division</Link>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link to="/enquiry" className={location.pathname === '/enquiry' ? 'active' : ''}>
              Enquiry
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
              Gallery
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;