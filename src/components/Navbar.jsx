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
  
  // Toggle body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Cleanup function to ensure body scroll is enabled when component unmounts
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);
  
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
  
  // Handle closing menu when clicking on overlay
  const handleOverlayClick = (e) => {
    // If clicking outside the menu and menu is open
    if (isMenuOpen && e.target.classList.contains('navbar-overlay')) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Kerala Exim" />
        </Link>
        
        <div 
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Close button for mobile menu */}
          <div className="mobile-close" onClick={() => setIsMenuOpen(false)}>
            {/* X icon is styled via CSS */}
          </div>
          
          <li className="navbar-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
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
                <Link 
                  to="/business/chemical" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chemical Division
                </Link>
              </li>
              <li>
                <Link 
                  to="/business/industrial" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industrial Division
                </Link>
              </li>
              <li>
                <Link 
                  to="/business/food-beverage" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Food & Beverages
                </Link>
              </li>
              <li>
                <Link 
                  to="/business/it" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  IT Division
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link 
              to="/enquiry" 
              className={location.pathname === '/enquiry' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Enquiry
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Overlay for mobile menu - closes menu when clicked */}
      {isMenuOpen && (
        <div className="navbar-overlay" onClick={handleOverlayClick}></div>
      )}
    </nav>
  );
};

export default Navbar;