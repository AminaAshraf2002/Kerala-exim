// Gallery.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

// Import Assets - Replace with your actual images
import galleryImage1 from '../assets/logo.jpeg';
import galleryImage2 from '../assets/logo.jpeg';
import galleryImage3 from '../assets/logo.jpeg';
import galleryImage4 from '../assets/logo.jpeg';
import galleryImage5 from '../assets/logo.jpeg';
import galleryImage6 from '../assets/logo.jpeg';
import galleryImage7 from '../assets/logo.jpeg';
import galleryImage8 from '../assets/logo.jpeg';

const Gallery = () => {
  // Categories for the gallery filter
  const categories = ['All', 'Chemical', 'Industrial', 'Food & Beverage', 'IT'];
  
  // Gallery items with categories
  const galleryItems = [
    {
      id: 1,
      image: galleryImage1,
      title: 'Chemical Processing Plant',
      category: 'Chemical',
      description: 'State-of-the-art chemical processing facility with advanced quality control systems.'
    },
    {
      id: 2,
      image: galleryImage2,
      title: 'Industrial Equipment Showcase',
      category: 'Industrial',
      description: 'High-performance industrial machinery and equipment for various manufacturing needs.'
    },
    {
      id: 3,
      image: galleryImage3,
      title: 'Food Product Packaging',
      category: 'Food & Beverage',
      description: 'Premium food packaging solutions ensuring quality and freshness.'
    },
    {
      id: 4,
      image: galleryImage4,
      title: 'IT Infrastructure Setup',
      category: 'IT',
      description: 'Advanced IT hardware and software solutions for enterprise clients.'
    },
    {
      id: 5,
      image: galleryImage5,
      title: 'Quality Control Laboratory',
      category: 'Chemical',
      description: 'Our quality control lab ensuring product compliance with international standards.'
    },
    {
      id: 6,
      image: galleryImage6,
      title: 'Logistics Operations',
      category: 'Industrial',
      description: 'Efficient logistics management for timely delivery of products worldwide.'
    },
    {
      id: 7,
      image: galleryImage7,
      title: 'Beverage Processing Line',
      category: 'Food & Beverage',
      description: 'Modern beverage processing and bottling facility with strict quality controls.'
    },
    {
      id: 8,
      image: galleryImage8,
      title: 'Technology Consultation',
      category: 'IT',
      description: 'Expert IT consultation services for customized technology solutions.'
    },
  ];

  // State for active category and selected image
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Open image modal
  const openImageModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="gallery-page-header">
        <div className="gallery-page-overlay"></div>
        <div className="gallery-page-container">
          <h1 data-aos="fade-up">Our Gallery</h1>
          
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content-section">
        <div className="gallery-content-container">
          <div className="gallery-intro" data-aos="fade-up">
            <h2>Explore Our Work</h2>
            <p>
              Welcome to Kerala Exim's visual showcase of our products, facilities, and operations. 
              Browse through our gallery to get a glimpse of our commitment to quality and excellence 
              across all our business divisions.
            </p>
          </div>

          {/* Gallery Filter */}
          <div className="gallery-filter" data-aos="fade-up">
            <ul>
              {categories.map((category, index) => (
                <li 
                  key={index}
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div 
                className="gallery-item" 
                key={item.id} 
                data-aos="fade-up"
                data-aos-delay={(item.id - 1) % 4 * 100}
                onClick={() => openImageModal(item)}
              >
                <div className="gallery-item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <h3>{item.title}</h3>
                    <span>{item.category}</span>
                    <div className="gallery-item-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="gallery-modal">
          <div className="gallery-modal-overlay" onClick={closeImageModal}></div>
          <div className="gallery-modal-content">
            <div className="gallery-modal-header">
              <h3>{selectedImage.title}</h3>
              <button onClick={closeImageModal} className="gallery-modal-close">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="gallery-modal-body">
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="gallery-modal-info">
                <span className="gallery-modal-category">{selectedImage.category}</span>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Business Divisions */}
      <section className="gallery-divisions-section">
        <div className="gallery-content-container">
          <h2 className="gallery-section-title" data-aos="fade-up">Our Business Divisions</h2>
          
          <div className="gallery-divisions-grid">
            <div className="gallery-division-card" data-aos="fade-up">
              <div className="gallery-division-icon">
                <i className="fa-solid fa-flask"></i>
              </div>
              <h3>Chemical Division</h3>
              <p>Discover top-quality chemicals sourced globally for your business needs.</p>
              <Link to="/business/chemical" className="gallery-division-link">View Division</Link>
            </div>
            
            <div className="gallery-division-card" data-aos="fade-up" data-aos-delay="100">
              <div className="gallery-division-icon">
                <i className="fa-solid fa-industry"></i>
              </div>
              <h3>Industrial Division</h3>
              <p>Industrial solutions for diverse sectors including construction and manufacturing.</p>
              <Link to="/business/industrial" className="gallery-division-link">View Division</Link>
            </div>
            
            <div className="gallery-division-card" data-aos="fade-up" data-aos-delay="200">
              <div className="gallery-division-icon">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <h3>Food & Beverage</h3>
              <p>Premium food and beverage products sourced from across the globe.</p>
              <Link to="/business/food-beverage" className="gallery-division-link">View Division</Link>
            </div>
            
            <div className="gallery-division-card" data-aos="fade-up" data-aos-delay="300">
              <div className="gallery-division-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3>IT Division</h3>
              <p>Cutting-edge technology solutions for modern business needs.</p>
              <Link to="/business/it" className="gallery-division-link">View Division</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta-section">
        <div className="gallery-cta-content" data-aos="fade-up">
          <h2>Ready to Partner with Kerala Exim?</h2>
          <p>Contact us today to discuss how we can help grow your business internationally.</p>
          <div className="gallery-cta-buttons">
            <Link to="/contact" className="gallery-cta-btn gallery-cta-btn-primary">Contact Us</Link>
            <Link to="/enquiry" className="gallery-cta-btn gallery-cta-btn-secondary">Make an Enquiry</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;