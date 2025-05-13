// Business.jsx - Main Business Page Component
import React from 'react';
import { Link } from 'react-router-dom';
import './Business.css';

// Import Business Division Images
import chemicalImage from '../assets/chemical.jpeg';
import industrialImage from '../assets/equip1.jpeg';
import foodImage from '../assets/food1.jpeg';
import itImage from '../assets/equip.jpeg';

const Business = () => {
  return (
    <div className="business-main-page">
      {/* Page Header */}
      <section className="business-page-header">
        <div className="business-page-overlay"></div>
        <div className="business-page-container">
          <h1 data-aos="fade-up">Our Business Divisions</h1>
        </div>
      </section>

      {/* Business Overview */}
      <section className="business-overview-section">
        <div className="business-page-container">
          <div className="business-section-header text-center">
            <h2 className="business-section-title" data-aos="fade-up">Our Business Expertise</h2>
            <p className="business-section-description" data-aos="fade-up" data-aos-delay="100">
              At Kerala Exim, we offer comprehensive import-export solutions across multiple industries
            </p>
          </div>
          <div className="business-overview-content" data-aos="fade-up" data-aos-delay="200">
            <p>
              Kerala Exim has established itself as a trusted name in global trade with a diverse portfolio
              of business divisions catering to various industries. Our expertise spans across chemicals,
              industrial products, food and beverages, and information technology, enabling us to provide
              comprehensive solutions for all your international trade requirements.
            </p>
            <p>
              With a strong network of global partners, efficient logistics infrastructure, and deep
              understanding of international trade regulations, we ensure seamless transactions and
              timely deliveries for businesses of all sizes. Explore our specialized divisions below
              to discover how we can help your business grow in the global marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="business-divisions-section">
        <div className="business-page-containers">
          <div className="business-divisions-grid">
            {/* Chemical Division */}
            <div className="business-division-card" data-aos="fade-up">
              <div className="business-division-image">
                <img src={chemicalImage} alt="Chemical Division" />
                <div className="business-division-overlay">
                  <Link to="/business/chemical" className="btn btn-light">Explore Division</Link>
                </div>
              </div>
              <div className="business-division-content">
                <h3>Chemical Division</h3>
                <p>
                  Discover top-quality chemicals sourced globally for your business needs.
                  From pharmaceuticals to manufacturing, trust us to deliver reliable supply
                  chain solutions tailored to your requirements.
                </p>
                <Link to="/business/chemical" className="business-division-link">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Industrial Division */}
            <div className="business-division-card" data-aos="fade-up" data-aos-delay="100">
              <div className="business-division-image">
                <img src={industrialImage} alt="Industrial Division" />
                <div className="business-division-overlay">
                  <Link to="/business/industrial" className="btn btn-light">Explore Division</Link>
                </div>
              </div>
              <div className="business-division-content">
                <h3>Industrial Division</h3>
                <p>
                  Unlock global industrial solutions with Kerala Exim. We specialize in importing
                  and exporting a wide range of industrial products, serving diverse sectors including
                  construction, machinery, automotive, and more.
                </p>
                <Link to="/business/industrial" className="business-division-link">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Food & Beverage Division */}
            <div className="business-division-card" data-aos="fade-up" data-aos-delay="200">
              <div className="business-division-image">
                <img src={foodImage} alt="Food & Beverage Division" />
                <div className="business-division-overlay">
                  <Link to="/business/food-beverage" className="btn btn-light">Explore Division</Link>
                </div>
              </div>
              <div className="business-division-content">
                <h3>Food & Beverage Division</h3>
                <p>
                  Indulge in the flavors of the world with Kerala Exim's Food & Beverage Division.
                  We specialize in sourcing and exporting premium food and beverage products, ranging
                  from exotic spices to gourmet delicacies.
                </p>
                <Link to="/business/food-beverage" className="business-division-link">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* IT Division */}
            <div className="business-division-card" data-aos="fade-up" data-aos-delay="300">
              <div className="business-division-image">
                <img src={itImage} alt="IT Division" />
                <div className="business-division-overlay">
                  <Link to="/business/it" className="btn btn-light">Explore Division</Link>
                </div>
              </div>
              <div className="business-division-content">
                <h3>IT Division</h3>
                <p>
                  Empower your business with cutting-edge technology from Kerala Exim's IT Division.
                  We specialize in importing and exporting a wide range of IT products, including
                  hardware, software, and peripherals.
                </p>
                <Link to="/business/it" className="business-division-link">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="business-approach-section">
        <div className="business-page-container">
          <div className="business-section-header text-center">
            <h2 className="business-section-title" data-aos="fade-up">Our Business Approach</h2>
            <p className="business-section-description" data-aos="fade-up" data-aos-delay="100">
              How we ensure excellence across all our business divisions
            </p>
          </div>
          {/* Our Approach section - with fixed icon names */}
          <div className="business-approach-grid">
            <div className="business-approach-item" data-aos="fade-up">
              <div className="business-approach-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <h3>Sourcing Excellence</h3>
              <p>
                We identify and partner with the most reliable manufacturers and suppliers worldwide,
                ensuring access to high-quality products that meet international standards.
              </p>
            </div>
            <div className="business-approach-item" data-aos="fade-up" data-aos-delay="100">
              <div className="business-approach-icon">
                <i className="fa-solid fa-shield-halved"></i> {/* Changed from fa-shield-check */}
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Rigorous quality control processes at every stage ensure that all products meet
                stringent quality standards and regulatory requirements.
              </p>
            </div>
            <div className="business-approach-item" data-aos="fade-up" data-aos-delay="200">
              <div className="business-approach-icon">
                <i className="fa-solid fa-truck"></i> {/* Changed from fa-truck-container */}
              </div>
              <h3>Logistics Expertise</h3>
              <p>
                Our efficient logistics network ensures timely delivery of products across the globe,
                with complete documentation and compliance with international shipping regulations.
              </p>
            </div>
            <div className="business-approach-item" data-aos="fade-up" data-aos-delay="300">
              <div className="business-approach-icon">
                <i className="fa-solid fa-handshake"></i> {/* Changed from fa-handshake-angle */}
              </div>
              <h3>Dedicated Support</h3>
              <p>
                Our experienced team provides personalized support throughout the import-export process,
                addressing your specific requirements and ensuring customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="business-cta-section">
        <div className="business-page-container">
          <div className="business-cta-content" data-aos="fade-up">
            <h2>Ready to Expand Your Global Business?</h2>
            <p>Contact us today to discuss how Kerala Exim can help your business thrive in the international marketplace.</p>
            <Link to="/contact" className="btn btn-light">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;