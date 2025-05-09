// ITDivision.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ITDivision.css';

// Import Assets
import itImage1 from '../assets/it.png';
import itImage2 from '../assets/logo.jpeg';
import itImage3 from '../assets/logo.jpeg';

const ITDivision = () => {
  return (
    <div className="it-division-page">
      {/* Page Header */}
      <section className="it-page-header">
        <div className="it-page-overlay"></div>
        <div className="it-page-container">
          <h1 data-aos="fade-up">IT Division</h1>
          <div className="it-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link> <span>/</span> <Link to="/business">Business</Link> <span>/</span> <span>IT Division</span>
          </div>
        </div>
      </section>

      {/* Division Overview */}
      <section className="it-division-overview">
        <div className="it-overview-grid">
          <div className="it-overview-content" data-aos="fade-right">
            <span className="it-section-subtitle">IT Division</span>
            <h2 className="it-division-title">Cutting-Edge Technology Solutions for Modern Businesses</h2>
            <p>
              Empower your business with cutting-edge technology from Kerala Exim's IT Division. 
              We specialize in importing and exporting a wide range of IT products, including 
              hardware, software, and peripherals. From innovative solutions to reliable equipment, 
              we ensure seamless integration and enhanced productivity for your business.
            </p>
            <div className="it-division-features">
              <div className="it-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Comprehensive range of high-quality IT hardware and software</span>
              </div>
              <div className="it-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Authentic products with manufacturer warranties and support</span>
              </div>
              <div className="it-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Expert guidance for technology selection and implementation</span>
              </div>
              <div className="it-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Competitive pricing through established global partnerships</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
          <div className="it-overview-image" data-aos="fade-left">
            <img src={itImage1} alt="IT Solutions" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="it-products-section">
        <div className="it-section-header">
          <h2 className="it-section-title" data-aos="fade-up">Our IT Products</h2>
          <p className="it-section-description" data-aos="fade-up" data-aos-delay="100">
            Discover our comprehensive range of IT solutions for businesses of all sizes
          </p>
        </div>
        <div className="it-products-grid">
          <div className="it-product-category" data-aos="fade-up">
            <div className="it-category-icon">
              <i className="fa-solid fa-computer"></i>
            </div>
            <h3>Hardware Solutions</h3>
            <p>
              Premium IT hardware including servers, workstations, networking equipment, 
              storage systems, and peripherals from leading global manufacturers, 
              with full warranty and support.
            </p>
          </div>
          <div className="it-product-category" data-aos="fade-up" data-aos-delay="100">
            <div className="it-category-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3>Software Products</h3>
            <p>
              Licensed software solutions for business operations, productivity, 
              security, and specialized applications, with genuine licenses, 
              updates, and technical support from authorized sources.
            </p>
          </div>
          <div className="it-product-category" data-aos="fade-up" data-aos-delay="200">
            <div className="it-category-icon">
              <i className="fa-solid fa-mobile-screen"></i>
            </div>
            <h3>Mobile Technology</h3>
            <p>
              Latest mobile devices, accessories, and enterprise mobility solutions 
              to support remote work, field operations, and business communications 
              with secure implementation and management options.
            </p>
          </div>
          <div className="it-product-category" data-aos="fade-up" data-aos-delay="300">
            <div className="it-category-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Security Systems</h3>
            <p>
              Comprehensive IT security solutions including hardware, software, 
              and infrastructure components designed to protect business data, 
              networks, and systems from various threats and vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="it-industries-section">
        <div className="it-section-header">
          <h2 className="it-section-title" data-aos="fade-up">Sectors We Serve</h2>
          <p className="it-section-description" data-aos="fade-up" data-aos-delay="100">
            Providing tailored IT solutions across diverse business sectors
          </p>
        </div>
        <div className="it-industries-grid">
          <div className="it-industry-item" data-aos="fade-up">
            <img src={itImage2} alt="Corporate Sector" />
            <div className="it-industry-content">
              <h3>Corporate</h3>
              <p>
                Enterprise-grade IT solutions for large corporations, 
                with scalable infrastructure, integrated systems, and 
                comprehensive support for complex business environments.
              </p>
            </div>
          </div>
          <div className="it-industry-item" data-aos="fade-up" data-aos-delay="100">
            <img src={itImage3} alt="Educational Sector" />
            <div className="it-industry-content">
              <h3>Education</h3>
              <p>
                Specialized IT equipment and software for educational 
                institutions, supporting modern learning environments 
                with interactive technology and administrative systems.
              </p>
            </div>
          </div>
          <div className="it-industry-item" data-aos="fade-up" data-aos-delay="200">
            <img src={itImage1} alt="Healthcare Sector" />
            <div className="it-industry-content">
              <h3>Healthcare</h3>
              <p>
                Advanced IT solutions for healthcare organizations, 
                including specialized hardware, software, and systems 
                that meet strict industry requirements and regulations.
              </p>
            </div>
          </div>
          <div className="it-industry-item" data-aos="fade-up" data-aos-delay="300">
            <img src={itImage2} alt="SME Sector" />
            <div className="it-industry-content">
              <h3>Small & Medium Enterprises</h3>
              <p>
                Cost-effective IT solutions tailored for small and 
                medium businesses, providing essential technology 
                infrastructure with flexibility for growth and adaptation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="it-why-choose-section">
        <div className="it-section-header">
          <h2 className="it-section-title" data-aos="fade-up">Why Choose Our IT Division</h2>
          <p className="it-section-description" data-aos="fade-up" data-aos-delay="100">
            The Kerala Exim advantage in technology trade
          </p>
        </div>
        <div className="it-why-choose-grid">
          <div className="it-advantage-card" data-aos="fade-up">
            <div className="it-advantage-icon">
              <i className="fa-solid fa-certificate"></i>
            </div>
            <h3>Authentic Products</h3>
            <p>
              All IT products are sourced directly from authorized 
              channels and original manufacturers, ensuring authenticity, 
              full warranty coverage, and official support.
            </p>
          </div>
          <div className="it-advantage-card" data-aos="fade-up" data-aos-delay="100">
            <div className="it-advantage-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <h3>Global Partnerships</h3>
            <p>
              Strategic partnerships with leading technology manufacturers 
              and suppliers worldwide, enabling access to the latest products 
              and solutions at competitive prices.
            </p>
          </div>
          <div className="it-advantage-card" data-aos="fade-up" data-aos-delay="200">
            <div className="it-advantage-icon">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <h3>Expert Consultation</h3>
            <p>
              Technology experts provide personalized guidance on 
              product selection, system compatibility, and solution 
              design to meet your specific business requirements.
            </p>
          </div>
          <div className="it-advantage-card" data-aos="fade-up" data-aos-delay="300">
            <div className="it-advantage-icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3>Efficient Logistics</h3>
            <p>
              Specialized handling and transport of sensitive IT equipment, 
              with proper packaging, insurance, and expedited shipping options 
              to ensure safe and timely delivery.
            </p>
          </div>
          <div className="it-advantage-card" data-aos="fade-up" data-aos-delay="400">
            <div className="it-advantage-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>Post-Purchase Support</h3>
            <p>
              Comprehensive after-sales support including warranty 
              facilitation, technical assistance, and product service 
              coordination to ensure optimal performance and satisfaction.
            </p>
          </div>
          <div className="it-advantage-card" data-aos="fade-up" data-aos-delay="500">
            <div className="it-advantage-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>Flexible Solutions</h3>
            <p>
              Tailored IT procurement solutions that adapt to your business 
              model, with flexible ordering, customization options, and 
              scalable packages for growing organizations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="it-cta-section">
        <div className="it-cta-content" data-aos="fade-up">
          <h2>Ready to Transform Your Business with Technology?</h2>
          <p>Contact us today to discuss how Kerala Exim's IT Division can provide the right technology solutions to enhance your business operations and drive growth.</p>
          <Link to="/contact" className="btn btn-light">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default ITDivision;