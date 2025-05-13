// Navbar.jsx with Close Button Only
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
  
  // Close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
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
          <div className="mobile-close" onClick={closeMenu}></div>
          
          <li className="navbar-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
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
                  onClick={closeMenu}
                >
                  Chemical Division
                </Link>
              </li>
              <li>
                <Link 
                  to="/business/industrial" 
                  onClick={closeMenu}
                >
                  Industrial Division
                </Link>
              </li>
              <li>
                <Link 
                  to="/business/food-beverage" 
                  onClick={closeMenu}
                >
                  Food & Beverages
                </Link>
              </li>
              <li>
                <Link 
                  to="/business/it" 
                  onClick={closeMenu}
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
              onClick={closeMenu}
            >
              Enquiry
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'active' : ''}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      
      
    </nav>
  );
};

export default Navbar;