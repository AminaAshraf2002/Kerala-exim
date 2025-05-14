// FoodBeverageDivision.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FoodBeverageDivision.css';

// Import Assets
import foodImage1 from '../assets/food4.jpeg';
import food1 from '../assets/product1.jpeg';
import food2 from '../assets/product2.jpeg';
import food4 from '../assets/product4.jpeg';


const FoodBeverageDivision = () => {
  return (
    <div className="fb-business-division-page">
      {/* Page Header */}
      <section className="fb-page-header">
        <div className="fb-overlay"></div>
        <div className="fb-container">
          <h1 data-aos="fade-up">Food & Beverage Division</h1>
          <div className="fb-breadcrumb" data-aos="fade-up" data-aos-delay="200">
             <Link to="/business">Business</Link> <span>/</span> <span>Food & Beverage</span>
          </div>
        </div>
      </section>

      {/* Division Overview */}
      <section className="fb-section fb-division-overview">
        <div className="fb-container">
          <div className="fb-overview-grid">
            <div className="fb-overview-content" data-aos="fade-right">
              <span className="fb-section-subtitle">Food & Beverage Division</span>
              <h2 className="fb-division-title">Exquisite Global Flavors for Culinary Excellence</h2>
              <p>
                Indulge in the flavors of the world with Kerala Exim's Food & Beverage Division. 
                We specialize in sourcing and exporting premium food and beverage products, ranging 
                from exotic spices to gourmet delicacies. With a focus on quality and freshness, 
                we ensure that every product meets the highest standards.
              </p>
              <div className="fb-division-features">
                <div className="fb-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Premium quality food products from around the world</span>
                </div>
                <div className="fb-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Stringent quality control and food safety compliance</span>
                </div>
                <div className="fb-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Temperature-controlled logistics for product freshness</span>
                </div>
                <div className="fb-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Authentic regional specialties and gourmet selections</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
            </div>
            <div className="fb-overview-image" data-aos="fade-left">
              <img src={foodImage1} alt="Food & Beverage Products" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="fb-section fb-products-section">
        <div className="fb-containers">
          <div className="fb-section-header text-center">
            <h2 className="fb-section-title" data-aos="fade-up">Our Food & Beverage Products</h2>
            <p className="fb-section-description" data-aos="fade-up" data-aos-delay="100">
              Experience a world of flavors through our premium food and beverage selections
            </p>
          </div>
          <div className="fb-products-grid">
            <div className="fb-product-category" data-aos="fade-up">
              <div className="fb-category-icon">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h3>Spices & Herbs</h3>
              <p>
                Premium quality spices and herbs sourced directly from the world's 
                finest growing regions, including Kerala's renowned spice gardens, 
                offering exceptional flavor, aroma, and freshness.
              </p>
            </div>
            <div className="fb-product-category" data-aos="fade-up" data-aos-delay="100">
              <div className="fb-category-icon">
                <i className="fa-solid fa-mug-hot"></i>
              </div>
              <h3>Beverages & Teas</h3>
              <p>
                Exquisite selection of specialty teas, coffees, and beverages from 
                traditional favorites to unique regional blends, carefully selected 
                for their distinctive character and quality.
              </p>
            </div>
            <div className="fb-product-category" data-aos="fade-up" data-aos-delay="200">
              <div className="fb-category-icon">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <h3>Gourmet Delicacies</h3>
              <p>
                Curated collection of fine gourmet products and delicacies from 
                around the world, including specialty condiments, preserved foods, 
                and culinary ingredients for discerning tastes.
              </p>
            </div>
            <div className="fb-product-category" data-aos="fade-up" data-aos-delay="300">
              <div className="fb-category-icon">
                <i className="fa-solid fa-box"></i>
              </div>
              <h3>Packaged Foods</h3>
              <p>
                High-quality packaged food products that combine convenience with 
                exceptional taste, including ready-to-eat meals, snacks, and 
                specialty foods that meet international quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="fb-section fb-industries-section">
        <div className="fb-container">
          <div className="fb-section-header text-center">
            <h2 className="fb-section-title" data-aos="fade-up">Markets We Serve</h2>
            <p className="fb-section-description" data-aos="fade-up" data-aos-delay="100">
              Delivering premium food and beverage products to diverse market segments
            </p>
          </div>
          <div className="fb-industries-grid">
            <div className="fb-industry-item" data-aos="fade-up">
              <img src={food1} alt="Retail Market" />
              <div className="fb-industry-content">
                <h3>Retail Chains</h3>
                <p>
                  Supplying premium food and beverage products to supermarkets 
                  and specialty retail stores, with attractive packaging and 
                  customized branding options.
                </p>
              </div>
            </div>
            <div className="fb-industry-item" data-aos="fade-up" data-aos-delay="100">
              <img src={food2} alt="Hospitality Industry" />
              <div className="fb-industry-content">
                <h3>Hospitality</h3>
                <p>
                  Providing high-quality ingredients and specialty products to 
                  hotels, restaurants, and catering services that demand the 
                  finest culinary elements for their discerning clientele.
                </p>
              </div>
            </div>
            <div className="fb-industry-item" data-aos="fade-up" data-aos-delay="200">
              <img src={foodImage1} alt="Food Service Industry" />
              <div className="fb-industry-content">
                <h3>Food Service</h3>
                <p>
                  Delivering bulk ingredients and specialized food products to 
                  food service operators, with consistent quality and reliable 
                  supply that meets their operational requirements.
                </p>
              </div>
            </div>
            <div className="fb-industry-item" data-aos="fade-up" data-aos-delay="300">
              <img src={food4} alt="Food Manufacturing" />
              <div className="fb-industry-content">
                <h3>Food Manufacturing</h3>
                <p>
                  Supplying premium ingredients and raw materials to food 
                  manufacturers and processors, ensuring quality inputs for 
                  their production processes and final products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="fb-section fb-why-choose-section">
        <div className="fb-containers">
          <div className="fb-section-header text-center">
            <h2 className="fb-section-title" data-aos="fade-up">Why Choose Our Food & Beverage Division</h2>
            <p className="fb-section-description" data-aos="fade-up" data-aos-delay="100">
              The Kerala Exim difference in food and beverage trade
            </p>
          </div>
          <div className="fb-why-choose-grid">
            <div className="fb-advantage-card" data-aos="fade-up">
              <div className="fb-advantage-icon">
                <i className="fa-solid fa-medal"></i>
              </div>
              <h3>Premium Quality</h3>
              <p>
                Rigorous selection process and quality control measures 
                ensure that only the finest food and beverage products 
                reach our clients, maintaining consistent high standards.
              </p>
            </div>
            <div className="fb-advantage-card" data-aos="fade-up" data-aos-delay="100">
              <div className="fb-advantage-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3>Authenticity</h3>
              <p>
                Direct sourcing from regions known for specific 
                products ensures authenticity and traditional 
                quality, preserving genuine flavors and characteristics.
              </p>
            </div>
            <div className="fb-advantage-card" data-aos="fade-up" data-aos-delay="200">
              <div className="fb-advantage-icon">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h3>Food Safety Compliance</h3>
              <p>
                All products meet international food safety standards 
                and regulations, with proper documentation and 
                certifications to ensure regulatory compliance.
              </p>
            </div>
            <div className="fb-advantage-card" data-aos="fade-up" data-aos-delay="300">
              <div className="fb-advantage-icon">
                <i className="fa-solid fa-temperature-low"></i>
              </div>
              <h3>Specialized Logistics</h3>
              <p>
                Temperature-controlled storage and transportation 
                to maintain product freshness and quality throughout 
                the supply chain, from source to destination.
              </p>
            </div>
            <div className="fb-advantage-card" data-aos="fade-up" data-aos-delay="400">
              <div className="fb-advantage-icon">
                <i className="fa-solid fa-tags"></i>
              </div>
              <h3>Competitive Pricing</h3>
              <p>
                Direct relationships with producers and efficient 
                supply chain management allow us to offer premium 
                products at competitive market prices.
              </p>
            </div>
            <div className="fb-advantage-card" data-aos="fade-up" data-aos-delay="500">
              <div className="fb-advantage-icon">
                <i className="fa-solid fa-boxes-packing"></i>
              </div>
              <h3>Customized Packaging</h3>
              <p>
                Flexible packaging options including private labeling, 
                custom packaging sizes, and branding solutions to meet 
                specific market requirements and client preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fb-section fb-cta-section">
        <div className="fb-container">
          <div className="fb-cta-content" data-aos="fade-up">
            <h2>Ready to Bring Global Flavors to Your Business?</h2>
            <p>Contact us today to explore our premium food and beverage offerings and discover how Kerala Exim can enhance your culinary portfolio.</p>
            <Link to="/contact" className="btn btn-light">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodBeverageDivision;