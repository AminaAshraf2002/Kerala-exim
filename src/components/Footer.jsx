// components/Footer.js - Footer Component
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Function to handle email click
    const handleEmailClick = (e) => {
        window.location.href = "mailto:keralaeximindia@gmail.com";
    };

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section" data-aos="fade-up">
                    <h3>Kerala Exim</h3>
                    <p>
                        Your trusted partner in international trade solutions. With a relentless
                        commitment to excellence and a passion for fostering global connections.
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61559373902738"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://twitter.com/KeralaE31741"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/102677411/admin/notifications/all/"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/channel/UCjY4KtAX7kXz_M8cIx_DZFg-"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/business">Our Business</Link></li>
                        <li><Link to="/enquiry">Enquiry</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
                    <h3>Business</h3>
                    <ul>
                        <li><Link to="/business/chemical">Chemical Division</Link></li>
                        <li><Link to="/business/industrial">Industrial Division</Link></li>
                        <li><Link to="/business/food-beverage">Food & Beverages</Link></li>
                        <li><Link to="/business/it">IT Division</Link></li>
                    </ul>
                </div>

                <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
                    <h3>Contact</h3>
                    <ul className="contact-info">
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <a href="https://maps.google.com/?q=HEAVENLY+PLAZA,+CIVIL+LINE+RD,+CHEMBUMUKKU,+VAZHAKKALA,+KAKKANAD,+Ernakulam,+Kerala" target="_blank" rel="noopener noreferrer">
                                10th floor, 28/609, HEAVENLY PLAZA, CIVIL LINE RD, CHEMBUMUKKU, VAZHAKKALA, KAKKANAD, Ernakulam, Kerala
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <a href="tel:+919995543735">9995543735</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            {/* Using onClick handler for more reliable email handling */}
                            <span className="email-link" onClick={handleEmailClick}>keralaeximindia@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <p>
                            &copy; {new Date().getFullYear()} Kerala Exim. All Rights Reserved |
                            <a href="https://www.inspitetech.com/" target="_blank" rel="noopener noreferrer"> Powered by Inspite Technologies</a>
                        </p>
                    </div>
                    <div className="footer-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;