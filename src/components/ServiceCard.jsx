// components/ServiceCard.js - Service Card Component
import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link, delay }) => {
  return (
    <div 
      className="service-card" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="service-link">
        Learn More <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default ServiceCard;
