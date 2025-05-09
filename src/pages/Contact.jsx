// Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission with an API call
    console.log(formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-page-header">
        <div className="contact-page-overlay"></div>
        <div className="contact-page-container">
          <h1 data-aos="fade-up">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-content-container">
          <div className="contact-info-header" data-aos="fade-up">
            <h2>Get In Touch With Us</h2>
            <p>We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
          </div>
          
          <div className="contact-info-grid">
            <div className="contact-info-card" data-aos="fade-up">
              <div className="contact-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3>Our Location</h3>
              <a href="https://maps.google.com/?q=10th+floor,+28/609,+HEAVENLY+PLAZA,+CIVIL+LINE+RD,+CHEMBUMUKKU,+VAZHAKKALA,+KAKKANAD,+Ernakulam,+Kerala" target="_blank" rel="noopener noreferrer" className="contact-link">
                <p>10th floor, 28/609, HEAVENLY PLAZA, CIVIL LINE RD, CHEMBUMUKKU,, VAZHAKKALA, KAKKANAD, Ernakulam, Kerala</p>
              </a>
            </div>
            
            <div className="contact-info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3>Phone Numbers</h3>
              <a href="tel:+91 95441 54494" className="contact-link">
                <p>+91 95441 54494</p>
              </a>
              <a href="tel:+1 904-877-6532" className="contact-link">
                <p>+1 904-877-6532</p>
              </a>
              <a href="tel:+91 9995543735" className="contact-link">
                <p>+91 9995543735</p>
              </a>
            </div>
            
            <div className="contact-info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3>Email Address</h3>
              <a href="mailto:keralaeximindia@gmail.com" className="contact-link" id="contact-email">
                <p>keralaeximindia@gmail.com</p>
              </a>
            </div>
            
            <div className="contact-info-card" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-info-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3>Working Hours</h3>
              <div className="contact-link">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="contact-social-section">
        <div className="contact-content-container">
          <div className="contact-social-content" data-aos="fade-up">
            <h2>Connect With Us</h2>
            <p>Follow us on social media to stay updated with the latest news, products, and offers.</p>
            <div className="contact-social-icons">
              <a href="https://www.facebook.com/profile.php?id=61559373902738" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/KeralaE31741" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/102677411/admin/notifications/all/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCjY4KtAX7kXz_M8cIx_DZFg-" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-cta-content" data-aos="fade-up">
          <h2>Ready to Start Trading Globally?</h2>
          <p>Partner with Kerala Exim today and expand your business horizons through our extensive network and expertise.</p>
          <Link to="/enquiry" className="contact-cta-btn">Make an Enquiry</Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;