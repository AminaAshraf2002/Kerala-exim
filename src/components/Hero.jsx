
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <h1 data-aos="fade-up">Welcome to KERALA EXIM</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Elevating Your Import-Export Journey with Kerala Exim. 
          At Kerala Exim, we excel in global trade facilitation. With our vast network 
          and expertise, we simplify international transactions, whether importing
          goods or exporting products.
        </p>
        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <Link to="/about" className="btn btn-primary">Learn More</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  );
};

export default Hero;