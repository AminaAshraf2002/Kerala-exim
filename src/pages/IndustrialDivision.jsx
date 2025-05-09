// IndustrialDivision.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './IndustrialDivision.css';

// Import Assets
import industrialImage1 from '../assets/industrial.jpeg';
import industrialImage2 from '../assets/logo.jpeg';
import industrialImage3 from '../assets/logo.jpeg';

const IndustrialDivision = () => {
  return (
    <div className="industrial-division-page">
      {/* Page Header */}
      <section className="industrial-page-header">
        <div className="industrial-page-overlay"></div>
        <div className="industrial-page-container">
          <h1 data-aos="fade-up">Industrial Division</h1>
          <div className="industrial-breadcrumb" data-aos="fade-up" data-aos-delay="200">
             <Link to="/business">Business</Link> <span>/</span> <span>Industrial Division</span>
          </div>
        </div>
      </section>

      {/* Division Overview */}
      <section className="industrial-division-overview">
        <div className="industrial-overview-grid">
          <div className="industrial-overview-content" data-aos="fade-right">
            <span className="industrial-section-subtitle">Industrial Division</span>
            <h2 className="industrial-division-title">Comprehensive Industrial Solutions on a Global Scale</h2>
            <p>
              Unlock global industrial solutions with Kerala Exim. We specialize in importing 
              and exporting a wide range of industrial products, serving diverse sectors including 
              construction, machinery, automotive, and more. Trust us to deliver efficient, reliable, 
              and tailored solutions for your industrial needs.
            </p>
            <div className="industrial-division-features">
              <div className="industrial-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Extensive selection of high-quality industrial products</span>
              </div>
              <div className="industrial-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Seamless logistics and supply chain management</span>
              </div>
              <div className="industrial-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Technical support and product specification guidance</span>
              </div>
              <div className="industrial-feature">
                <i className="fa-solid fa-check-circle"></i>
                <span>Competitive pricing through global sourcing network</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
          <div className="industrial-overview-image" data-aos="fade-left">
            <img src={industrialImage1} alt="Industrial Solutions" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="industrial-products-section">
        <div className="industrial-section-header">
          <h2 className="industrial-section-title" data-aos="fade-up">Our Industrial Products</h2>
          <p className="industrial-section-description" data-aos="fade-up" data-aos-delay="100">
            Discover our comprehensive range of industrial products for diverse sectors
          </p>
        </div>
        <div className="industrial-products-grid">
          <div className="industrial-product-category" data-aos="fade-up">
            <div className="industrial-category-icon">
              <i className="fa-solid fa-wrench"></i>
            </div>
            <h3>Machinery & Equipment</h3>
            <p>
              High-performance industrial machinery and equipment for manufacturing, 
              construction, and production facilities, designed for efficiency, 
              durability, and optimal performance.
            </p>
          </div>
          <div className="industrial-product-category" data-aos="fade-up" data-aos-delay="100">
            <div className="industrial-category-icon">
              <i className="fa-solid fa-hammer"></i>
            </div>
            <h3>Construction Materials</h3>
            <p>
              Premium construction materials and supplies for commercial and residential 
              projects, including steel, cement products, prefabricated components, and 
              specialized building materials.
            </p>
          </div>
          <div className="industrial-product-category" data-aos="fade-up" data-aos-delay="200">
            <div className="industrial-category-icon">
              <i className="fa-solid fa-car"></i>
            </div>
            <h3>Automotive Components</h3>
            <p>
              Quality automotive parts and components for vehicle manufacturing and 
              aftermarket applications, meeting international quality standards 
              and specifications.
            </p>
          </div>
          <div className="industrial-product-category" data-aos="fade-up" data-aos-delay="300">
            <div className="industrial-category-icon">
              <i className="fa-solid fa-gear"></i>
            </div>
            <h3>Industrial Supplies</h3>
            <p>
              Essential industrial supplies and consumables for day-to-day operations, 
              including hardware, tools, safety equipment, and maintenance products 
              for various industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="industrial-industries-section">
        <div className="industrial-section-header">
          <h2 className="industrial-section-title" data-aos="fade-up">Industries We Serve</h2>
          <p className="industrial-section-description" data-aos="fade-up" data-aos-delay="100">
            Providing industrial solutions across diverse sectors
          </p>
        </div>
        <div className="industrial-industries-grid">
          <div className="industrial-industry-item" data-aos="fade-up">
            <img src={industrialImage2} alt="Construction Industry" />
            <div className="industrial-industry-content">
              <h3>Construction</h3>
              <p>
                Supporting construction projects with high-quality materials, 
                equipment, and supplies that meet international standards and 
                project specifications.
              </p>
            </div>
          </div>
          <div className="industrial-industry-item" data-aos="fade-up" data-aos-delay="100">
            <img src={industrialImage3} alt="Manufacturing Industry" />
            <div className="industrial-industry-content">
              <h3>Manufacturing</h3>
              <p>
                Providing essential machinery, components, and supplies for 
                manufacturing facilities across various industries, enhancing 
                production efficiency and output quality.
              </p>
            </div>
          </div>
          <div className="industrial-industry-item" data-aos="fade-up" data-aos-delay="200">
            <img src={industrialImage1} alt="Automotive Industry" />
            <div className="industrial-industry-content">
              <h3>Automotive</h3>
              <p>
                Supplying critical components and materials for automobile 
                manufacturing and aftermarket applications, meeting precise 
                quality and performance requirements.
              </p>
            </div>
          </div>
          <div className="industrial-industry-item" data-aos="fade-up" data-aos-delay="300">
            <img src={industrialImage2} alt="Infrastructure Industry" />
            <div className="industrial-industry-content">
              <h3>Infrastructure</h3>
              <p>
                Supporting infrastructure development projects with specialized 
                materials and equipment, contributing to the creation of durable 
                and sustainable public works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="industrial-why-choose-section">
        <div className="industrial-section-header">
          <h2 className="industrial-section-title" data-aos="fade-up">Why Choose Our Industrial Division</h2>
          <p className="industrial-section-description" data-aos="fade-up" data-aos-delay="100">
            The Kerala Exim advantage in industrial trade
          </p>
        </div>
        <div className="industrial-why-choose-grid">
          <div className="industrial-advantage-card" data-aos="fade-up">
            <div className="industrial-advantage-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h3>Global Sourcing</h3>
            <p>
              Extensive global network of manufacturers and suppliers, 
              allowing us to source the best industrial products at 
              competitive prices for our clients.
            </p>
          </div>
          <div className="industrial-advantage-card" data-aos="fade-up" data-aos-delay="100">
            <div className="industrial-advantage-icon">
              <i className="fa-solid fa-certificate"></i>
            </div>
            <h3>Quality Assurance</h3>
            <p>
              Stringent quality control processes ensuring that all 
              industrial products meet international standards, specifications, 
              and performance requirements.
            </p>
          </div>
          <div className="industrial-advantage-card" data-aos="fade-up" data-aos-delay="200">
            <div className="industrial-advantage-icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3>Efficient Logistics</h3>
            <p>
              Comprehensive logistics solutions for timely delivery 
              of industrial products, with proper handling, storage, 
              and transportation protocols for all types of cargo.
            </p>
          </div>
          <div className="industrial-advantage-card" data-aos="fade-up" data-aos-delay="300">
            <div className="industrial-advantage-icon">
              <i className="fa-solid fa-file-contract"></i>
            </div>
            <h3>Documentation Expertise</h3>
            <p>
              In-depth knowledge of import-export documentation and 
              regulations for industrial products, ensuring smooth 
              customs clearance and regulatory compliance.
            </p>
          </div>
          <div className="industrial-advantage-card" data-aos="fade-up" data-aos-delay="400">
            <div className="industrial-advantage-icon">
              <i className="fa-solid fa-users-gear"></i>
            </div>
            <h3>Technical Support</h3>
            <p>
              Expert technical support for product selection, 
              specification matching, and issue resolution, 
              provided by professionals with industry experience.
            </p>
          </div>
          <div className="industrial-advantage-card" data-aos="fade-up" data-aos-delay="500">
            <div className="industrial-advantage-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>Customized Solutions</h3>
            <p>
              Tailored solutions to meet specific industrial requirements, 
              with flexible options for product specifications, quantities, 
              and delivery schedules.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industrial-cta-section">
        <div className="industrial-cta-content" data-aos="fade-up">
          <h2>Ready to Elevate Your Business with Global Industrial Solutions?</h2>
          <p>Contact us today to discuss how Kerala Exim's Industrial Division can help optimize your supply chain and enhance your operations.</p>
          <Link to="/contact" className="btn btn-light">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default IndustrialDivision;