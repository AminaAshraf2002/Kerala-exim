// ChemicalDivision.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ChemicalDivision.css'

// Import Assets
import chemicalImage1 from '../assets/chemical.jpeg';
import chemical1 from '../assets/chemical1.jpeg';
import chemical2 from '../assets/chemical2.jpeg';
import chemical3 from '../assets/chemical3.jpeg';
import chemical4 from '../assets/chemical4.jpeg';

const ChemicalDivision = () => {
  return (
    <div className="chemical-division-page">
      {/* Page Header */}
      <section className="chemical-page-header">
        <div className="chemical-page-overlay"></div>
        <div className="chemical-page-container">
          <h1 data-aos="fade-up">Chemical Division</h1>
          <div className="chemical-breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/business">Business</Link> <span>/</span> <span>Chemical Division</span>
          </div>
        </div>
      </section>

      {/* Division Overview */}
      <section className="chemical-division-overview">
        <div className="chemical-page-container">
          <div className="chemical-overview-grid">
            <div className="chemical-overview-content" data-aos="fade-right">
              <span className="chemical-section-subtitle">Chemical Division</span>
              <h2 className="chemical-division-title">Global Chemical Solutions for Modern Industries</h2>
              <p>
                Discover top-quality chemicals sourced globally for your business needs.
                From pharmaceuticals to manufacturing, trust us to deliver reliable supply
                chain solutions tailored to your requirements. Let Kerala Exim be your
                partner in chemical trade excellence.
              </p>
              <div className="chemical-division-features">
                <div className="chemical-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Premium quality chemicals from trusted global sources</span>
                </div>
                <div className="chemical-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Comprehensive regulatory compliance and documentation</span>
                </div>
                <div className="chemical-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Customized supply chain solutions for your specific needs</span>
                </div>
                <div className="chemical-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Efficient logistics and timely deliveries worldwide</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
            </div>
            <div className="chemical-overview-image" data-aos="fade-left">
              <img src={chemicalImage1} alt="Chemical Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="chemical-products-section">
        <div className="chemical-page-containers">
          <div className="chemical-section-header text-center">
            <h2 className="chemical-section-title" data-aos="fade-up">Our Chemical Products</h2>
            <p className="chemical-section-description" data-aos="fade-up" data-aos-delay="100">
              Explore our diverse range of high-quality chemical products for various industries
            </p>
          </div>
          <div className="chemical-products-grid">
            <div className="chemical-product-category" data-aos="fade-up">
              <div className="chemical-category-icon">
                <i className="fa-solid fa-pills"></i>
              </div>
              <h3>Pharmaceutical Chemicals</h3>
              <p>
                High-purity chemicals and ingredients for pharmaceutical manufacturing,
                including APIs, excipients, and specialty chemicals that meet stringent
                quality standards.
              </p>
            </div>
            <div className="chemical-product-category" data-aos="fade-up" data-aos-delay="100">
              <div className="chemical-category-icon">
                <i className="fa-solid fa-industry"></i>
              </div>
              <h3>Industrial Chemicals</h3>
              <p>
                Comprehensive range of industrial chemicals for manufacturing processes,
                including solvents, acids, bases, catalysts, and specialty chemicals for
                various applications.
              </p>
            </div>
            <div className="chemical-product-category" data-aos="fade-up" data-aos-delay="200">
              <div className="chemical-category-icon">
                <i className="fa-solid fa-flask"></i>
              </div>
              <h3>Laboratory Reagents</h3>
              <p>
                High-quality laboratory chemicals and reagents for research, analysis,
                and quality control applications, with precise specifications and
                detailed documentation.
              </p>
            </div>
            <div className="chemical-product-category" data-aos="fade-up" data-aos-delay="300">
              <div className="chemical-category-icon">
                <i className="fa-solid fa-spray-can"></i>
              </div>
              <h3>Specialty Chemicals</h3>
              <p>
                Specialty and fine chemicals for niche applications across industries,
                including customized formulations and innovative chemical solutions for
                specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="chemical-industries-section">
        <div className="chemical-page-container">
          <div className="chemical-section-header text-center">
            <h2 className="chemical-section-title" data-aos="fade-up">Industries We Serve</h2>
            <p className="chemical-section-description" data-aos="fade-up" data-aos-delay="100">
              Providing chemical solutions across diverse industrial sectors
            </p>
          </div>
          <div className="chemical-industries-grid">
            <div className="chemical-industry-item" data-aos="fade-up">
              <img src={chemical1} alt="Pharmaceutical Industry" />
              <div className="chemical-industry-content">
                <h3>Pharmaceutical</h3>
                <p>
                  Supporting pharmaceutical manufacturers with high-quality chemicals,
                  APIs, and intermediates that meet international quality standards.
                </p>
              </div>
            </div>
            <div className="chemical-industry-item" data-aos="fade-up" data-aos-delay="100">
              <img src={chemical2} alt="Manufacturing Industry" />
              <div className="chemical-industry-content">
                <h3>Manufacturing</h3>
                <p>
                  Providing essential chemical inputs for various manufacturing processes,
                  enhancing product quality and production efficiency.
                </p>
              </div>
            </div>
            <div className="chemical-industry-item" data-aos="fade-up" data-aos-delay="200">
              <img src={chemical3} alt="Research Industry" />
              <div className="chemical-industry-content">
                <h3>Research & Development</h3>
                <p>
                  Supplying precise and pure chemicals for research institutions and
                  laboratories, supporting scientific innovation and development.
                </p>
              </div>
            </div>
            <div className="chemical-industry-item" data-aos="fade-up" data-aos-delay="300">
              <img src={chemical4} alt="Agricultural Industry" />
              <div className="chemical-industry-content">
                <h3>Agriculture</h3>
                <p>
                  Offering specialized agricultural chemicals that improve crop yield,
                  quality, and resistance, supporting sustainable farming practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="chemical-why-choose-section">
        <div className="chemical-page-containers">
          <div className="chemical-section-header text-center">
            <h2 className="chemical-section-title" data-aos="fade-up">Why Choose Our Chemical Division</h2>
            <p className="chemical-section-description" data-aos="fade-up" data-aos-delay="100">
              The Kerala Exim advantage in chemical trade
            </p>
          </div>
          <div className="chemical-why-choose-grid">
            <div className="chemical-advantage-card" data-aos="fade-up">
              <div className="chemical-advantage-icon">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Rigorous quality control processes and comprehensive documentation ensure
                that all chemical products meet international standards and specifications.
              </p>
            </div>
            <div className="chemical-advantage-card" data-aos="fade-up" data-aos-delay="100">
              <div className="chemical-advantage-icon">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <h3>Reliable Logistics</h3>
              <p>
                Efficient storage, handling, and transportation of chemicals with full
                compliance to safety regulations and international shipping standards.
              </p>
            </div>
            <div className="chemical-advantage-card" data-aos="fade-up" data-aos-delay="200">
              <div className="chemical-advantage-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3>Global Partnerships</h3>
              <p>
                Established relationships with leading manufacturers and suppliers worldwide,
                ensuring access to the best chemical products at competitive prices.
              </p>
            </div>
            <div className="chemical-advantage-card" data-aos="fade-up" data-aos-delay="300">
              <div className="chemical-advantage-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3>Sustainable Practices</h3>
              <p>
                Commitment to environmental responsibility through sustainable sourcing,
                packaging, and transportation solutions for chemical products.
              </p>
            </div>
            <div className="chemical-advantage-card" data-aos="fade-up" data-aos-delay="400">
              <div className="chemical-advantage-icon">
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <h3>Regulatory Expertise</h3>
              <p>
                In-depth knowledge of chemical import-export regulations and documentation
                requirements, ensuring smooth customs clearance and compliance.
              </p>
            </div>
            <div className="chemical-advantage-card" data-aos="fade-up" data-aos-delay="500">
              <div className="chemical-advantage-icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>Dedicated Support</h3>
              <p>
                Personalized customer service and technical support from chemical industry
                experts who understand your business needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="chemical-cta-section">
        <div className="chemical-page-container">
          <div className="chemical-cta-content" data-aos="fade-up">
            <h2>Ready to Source Premium Chemicals for Your Business?</h2>
            <p>Contact us today to discuss how Kerala Exim's Chemical Division can provide tailored solutions for your specific requirements.</p>
            <Link to="/contact" className="btn btn-light">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChemicalDivision;