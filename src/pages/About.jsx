// About.jsx - Updated with class names matching Home page
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Import Assets
import aboutMainImage from '../assets/export.jpeg';
import teamMember1 from '../assets/logo.jpeg';
import teamMember2 from '../assets/logo.jpeg';
import teamMember3 from '../assets/logo.jpeg';
import teamMember4 from '../assets/logo.jpeg';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header - Similar structure to Hero section in Home */}
      <section className="page-header">
        <div className="overlay"></div>
        <div className="container">
          <h1 data-aos="fade-up">ABOUT US</h1>
          {/* <div className="breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link> <span>/</span> <span>About Us</span>
          </div> */}
        </div>
      </section>

      {/* Main About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image" data-aos="fade-right">
              <img src={aboutMainImage} alt="About Kerala Exim" />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
            <div className="about-content" data-aos="fade-left">
              <span className="section-subtitle">About Kerala Exim</span>
              <h2 className="about-title">Your Trusted Partner in Global Trade Solutions</h2>
              <p>
                Welcome to Kerala Exim, your trusted partner in international trade solutions. 
                With a relentless commitment to excellence and a passion for fostering global 
                connections, we are a leading import-export company based in the vibrant state 
                of Kerala, India.
              </p>
              <p>
                At Kerala Exim, we specialize in facilitating seamless trade operations across borders, 
                connecting businesses worldwide and enabling them to thrive in the dynamic global marketplace. 
                Driven by a deep understanding of the intricacies of international trade, our team of 
                experienced professionals is dedicated to providing tailored solutions that meet the 
                unique needs and goals of each client.
              </p>
              <div className="about-features">
                <div className="feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Expert professionals with industry experience</span>
                </div>
                <div className="feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Global network of trusted suppliers</span>
                </div>
                <div className="feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Customized solutions for your business needs</span>
                </div>
                <div className="feature">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Seamless logistics and documentation services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section - Using containers class from Home */}
      <section className="section mission-vision-section">
        <div className="containers">
          <div className="mission-vision-grid">
            <div className="mission-box" data-aos="fade-up">
              <div className="icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To facilitate global trade by providing efficient, reliable, and innovative import-export
                solutions that empower businesses to expand their reach and maximize their potential in the
                international market.
              </p>
            </div>
            <div className="vision-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be recognized as a leading force in international trade, known for our integrity,
                expertise, and commitment to building sustainable global partnerships that drive economic growth
                and prosperity.
              </p>
            </div>
            <div className="values-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, transparency, and reliability are at the core of everything we do. We believe in building
                long-term partnerships based on trust and mutual success, striving to exceed expectations and deliver 
                exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section story-section">
        <div className="containers">
          <div className="section-header text-center">
            <h2 className="section-title" data-aos="fade-up">Our Story</h2>
            <p className="section-description" data-aos="fade-up" data-aos-delay="200">
              The journey that made us a trusted name in global trade
            </p>
          </div>
          <div className="timeline" data-aos="fade-up" data-aos-delay="300">
            <div className="timeline-item">
              <div className="year">2012</div>
              <div className="content">
                <h3>Our Beginning</h3>
                <p>
                  Kerala Exim was founded with a vision to connect Indian businesses 
                  to global markets, starting with a small office in Kochi and a team of 
                  passionate professionals.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2015</div>
              <div className="content">
                <h3>Expanding Horizons</h3>
                <p>
                  We expanded our operations to include multiple product categories and 
                  established partnerships in over 10 countries across Asia and Europe.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2018</div>
              <div className="content">
                <h3>New Ventures</h3>
                <p>
                  Launched our IT division to embrace digital transformation and provide 
                  technology-driven solutions to our clients, enhancing our service offerings.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2022</div>
              <div className="content">
                <h3>Global Recognition</h3>
                <p>
                  Received industry recognition for excellence in import-export services, 
                  and expanded our reach to over 25 countries worldwide.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">Today</div>
              <div className="content">
                <h3>Continuing Excellence</h3>
                <p>
                  With a diverse team of experts and a global network of partners, 
                  we continue to provide exceptional trade solutions and explore new 
                  opportunities for growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section team-section">
        <div className="containers">
          <div className="section-header text-center">
            <h2 className="section-title" data-aos="fade-up">Meet Our Team</h2>
            <p className="section-description" data-aos="fade-up" data-aos-delay="200">
              Dedicated professionals working together to deliver exceptional results
            </p>
          </div>
          <div className="team-grid">
            <div className="team-member" data-aos="fade-up">
              <div className="member-image">
                <img src={teamMember1} alt="Team Member" />
                <div className="social-links">
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-solid fa-envelope"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>John Doe</h3>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            <div className="team-member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-image">
                <img src={teamMember2} alt="Team Member" />
                <div className="social-links">
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-solid fa-envelope"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>Jane Smith</h3>
                <p>Operations Director</p>
              </div>
            </div>
            <div className="team-member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-image">
                <img src={teamMember3} alt="Team Member" />
                <div className="social-links">
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-solid fa-envelope"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>David Wilson</h3>
                <p>International Relations Manager</p>
              </div>
            </div>
            <div className="team-member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-image">
                <img src={teamMember4} alt="Team Member" />
                <div className="social-links">
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-solid fa-envelope"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>Sarah Johnson</h3>
                <p>Business Development Head</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" data-aos="zoom-in">
              <div className="stat-icon">
                <i className="fa-solid fa-ship"></i>
              </div>
              <div className="stat-value">500+</div>
              <div className="stat-title">Successful Exports</div>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
              <div className="stat-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="stat-value">100+</div>
              <div className="stat-title">Happy Clients</div>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
              <div className="stat-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className="stat-value">25+</div>
              <div className="stat-title">Countries Served</div>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
              <div className="stat-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <div className="stat-value">50+</div>
              <div className="stat-title">Global Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Expand Your Global Reach?</h2>
            <p>Contact us today to discuss how Kerala Exim can help your business succeed in the international marketplace.</p>
            <Link to="/contact" className="btn btn-light">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;