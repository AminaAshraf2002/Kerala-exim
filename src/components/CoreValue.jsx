// components/CoreValue.js - Core Value Component
import React from 'react';
import './CoreValue.css';

const CoreValue = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="core-value" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="value-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CoreValue;