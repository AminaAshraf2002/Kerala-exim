// pages/Home.js - Complete Home Page Implementation
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faBolt, faBuilding, faUsersGear, faCompass, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

// Import Assets
import aboutImage from '../assets/export.jpeg';
import client1 from '../assets/logo.jpeg';
import client2 from '../assets/logo.jpeg';
import client3 from '../assets/logo.jpeg';
import client4 from '../assets/logo.jpeg';
import client5 from '../assets/logo.jpeg';
import heroVideo from '../assets/logo.mp4';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src={heroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                </div>

                <div className="hero-content container">
                    <h1 data-aos="fade-up">Welcome to KERALA EXIM</h1>
                    <p data-aos="fade-up" data-aos-delay="200">
                        Elevating Your Import-Export Journey with Kerala Exim.
                        At Kerala Exim, we excel in global trade facilitation. With our vast network
                        and expertise, we simplify international transactions, whether importing
                        goods or exporting products.From navigating regulations to optimizing logistics, <br />
                        we handle it all for you.
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
            {/* Core Values Section */}
            <section className="section core-values-section">
                <div className="containers">
                    <h2 className="section-title" data-aos="fade-up">Our Core Values</h2>
                    <p className="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
                        Our single-minded approach to set benchmark standards for our products through
                        strict quality controls in our production chain to deliver quality products and
                        delivery contract schedules on time helps us to maintain customer satisfaction
                        and continuous sales.
                    </p>

                    <div className="core-values-grid">
                        <div
                            className="core-value"
                            data-aos="fade-up"
                        >
                            <div className="value-icon">
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <h3>Client Satisfaction</h3>
                            <p>The skilled professionals at our unit are dedicated to ensuring complete client satisfaction with every project and transaction.</p>
                        </div>

                        <div
                            className="core-value"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="value-icon">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h3>Our Strength</h3>
                            <p>Qualified and Experienced Professionals Team working together to provide the best solutions for your import-export needs.</p>
                        </div>

                        <div
                            className="core-value"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="value-icon">
                                <i className="fa-solid fa-building"></i>
                            </div>
                            <h3>Infrastructure</h3>
                            <p>State-of-the-art facilities and systems that ensure efficient operations and timely delivery of services.</p>
                        </div>

                        <div
                            className="core-value"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="value-icon">
                                <i className="fa-solid fa-users-gear"></i>
                            </div>
                            <h3>Our Team</h3>
                            <p>Ensuring new technological advancements are integrated into our processes for optimal performance.</p>
                        </div>

                        <div
                            className="core-value"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="value-icon">
                                <i className="fa-solid fa-compass"></i>
                            </div>
                            <h3>Our Mission</h3>
                            <p>We believe in cross-functional teams to enable outstanding results and exceed client expectations.</p>
                        </div>

                        <div
                            className="core-value"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="value-icon">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <h3>Why Us?</h3>
                            <p>Cutting-Edge Latest Infrastructure Facility combined with expertise and commitment to excellence.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Business Divisions Section */}
            <section className="section business-section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">Our Business Divisions</h2>
                    <div className="business-grid">
                        <div
                            className="business-card"
                            data-aos="fade-up"
                        >
                            <div className="business-icon">
                                <i className="fa-solid fa-flask"></i>
                            </div>
                            <h3>Chemical Division</h3>
                            <p>Discover top-quality chemicals sourced globally for your business needs. From pharmaceuticals to manufacturing, trust us to deliver reliable supply chain solutions.</p>
                            <Link to="/business/chemical" className="business-link">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                        <div
                            className="business-card"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="business-icon">
                                <i className="fa-solid fa-industry"></i>
                            </div>
                            <h3>Industrial Division</h3>
                            <p>Unlock global industrial solutions with Kerala Exim. We specialize in importing and exporting a wide range of industrial products, serving diverse sectors.</p>
                            <Link to="/business/industrial" className="business-link">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                        <div
                            className="business-card"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="business-icon">
                                <i className="fa-solid fa-utensils"></i>
                            </div>
                            <h3>Food & Beverage</h3>
                            <p>Indulge in the flavors of the world with Kerala Exim's Food & Beverage Division. We specialize in sourcing and exporting premium food and beverage products.</p>
                            <Link to="/business/food-beverage" className="business-link">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                        <div
                            className="business-card"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="business-icon">
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <h3>IT Division</h3>
                            <p>Empower your business with cutting-edge technology from Kerala Exim's IT Division. We specialize in importing and exporting a wide range of IT products.</p>
                            <Link to="/business/it" className="business-link">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image" data-aos="fade-right">
                            <img src={aboutImage} alt="About Kerala Exim" />
                            <div className="experience-badge">
                                <span className="years">10+</span>
                                <span className="text">Years of Experience</span>
                            </div>
                        </div>
                        <div className="about-content" data-aos="fade-left">
                            <span className="section-subtitle">About Us</span>
                            <h2 className="about-title">Your Trusted Partner in Global Trade Solutions</h2>
                            <p>
                                Welcome to Kerala Exim, your trusted partner in international trade solutions.
                                With a relentless commitment to excellence and a passion for fostering global
                                connections, we are a leading import-export company based in the vibrant state
                                of Kerala, India.
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
                            <Link to="/about" className="btn btn-primary">Discover More</Link>
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

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial" data-aos="fade-up">
                            <div className="testimonial-content">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Kerala Exim has been an invaluable partner in our international expansion. Their expertise in navigating complex regulations and finding reliable suppliers has been crucial to our success.</p>
                                <div className="testimonial-author">
                                    <div className="author-image">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                                    </div>
                                    <div className="author-info">
                                        <h4>John Smith</h4>
                                        <p>CEO, Global Enterprises</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial" data-aos="fade-up" data-aos-delay="100">
                            <div className="testimonial-content">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Working with Kerala Exim has transformed our supply chain. Their attention to detail and commitment to quality have helped us source the best products for our customers.</p>
                                <div className="testimonial-author">
                                    <div className="author-image">
                                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                                    </div>
                                    <div className="author-info">
                                        <h4>Sarah Johnson</h4>
                                        <p>Procurement Manager, Tech Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial" data-aos="fade-up" data-aos-delay="200">
                            <div className="testimonial-content">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>The team at Kerala Exim consistently exceeds our expectations. Their market knowledge and ability to secure competitive pricing have given us a significant edge in our industry.</p>
                                <div className="testimonial-author">
                                    <div className="author-image">
                                        <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Client" />
                                    </div>
                                    <div className="author-info">
                                        <h4>David Chen</h4>
                                        <p>Director, Asian Markets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="section clients-section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">Our Trusted Partners</h2>
                    <div className="clients-grid">
                        <div className="client-logo" data-aos="zoom-in">
                            <img src={client1} alt="Client 1" />
                        </div>
                        <div className="client-logo" data-aos="zoom-in" data-aos-delay="100">
                            <img src={client2} alt="Client 2" />
                        </div>
                        <div className="client-logo" data-aos="zoom-in" data-aos-delay="200">
                            <img src={client3} alt="Client 3" />
                        </div>
                        <div className="client-logo" data-aos="zoom-in" data-aos-delay="300">
                            <img src={client4} alt="Client 4" />
                        </div>
                        <div className="client-logo" data-aos="zoom-in" data-aos-delay="400">
                            <img src={client5} alt="Client 5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2>Ready to Elevate Your Global Trade Experience?</h2>
                        <p>Contact us today to discuss how Kerala Exim can help your business succeed in the international marketplace.</p>
                        <Link to="/contact" className="btn btn-light">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;