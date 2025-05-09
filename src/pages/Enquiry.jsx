import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Enquiry.css';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: 'Chemical Division',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS IDs
    const serviceId = 'service_8d1fge4';
    const templateId = 'template_xszsrow';
    const publicKey = 'ih6seffDX1_fFhjSV';
    
    // Updated template parameters to match the template variable names
    const templateParams = {
      name: formData.name,           // Changed from from_name to name
      email: formData.email,         // Changed from from_email to email
      phone: formData.phone,
      business: formData.business,
      message: formData.message
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after submission
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            business: 'Chemical Division',
            message: ''
          });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="enquiry-page">
      {/* Page Header */}
      <section className="enquiry-page-header">
        <div className="enquiry-page-overlay"></div>
        <div className="enquiry-page-container">
          <h1 data-aos="fade-up">Business Enquiry</h1>
        </div>
      </section>

      {/* Enquiry Content */}
      <section className="enquiry-content-section">
        <div className="enquiry-content-container">
          <div className="enquiry-flex-container">
            <div className="enquiry-info-column" data-aos="fade-right">
              <div className="enquiry-info-content">
                <h2>Get in Touch With Us</h2>
                <p>
                  We're here to assist you with any inquiries about our services and products. 
                  Fill out the form, and our team will get back to you promptly with the information 
                  you need to make informed decisions for your business.
                </p>
                <div className="enquiry-highlights">
                  <div className="enquiry-highlight-item">
                    <div className="enquiry-highlight-icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="enquiry-highlight-text">
                      <h4>Quick Response</h4>
                      <p>We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="enquiry-highlight-item">
                    <div className="enquiry-highlight-icon">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <div className="enquiry-highlight-text">
                      <h4>Personalized Service</h4>
                      <p>Tailored solutions to meet your specific requirements</p>
                    </div>
                  </div>
                  <div className="enquiry-highlight-item">
                    <div className="enquiry-highlight-icon">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    <div className="enquiry-highlight-text">
                      <h4>Global Expertise</h4>
                      <p>International trade solutions across borders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="enquiry-form-column" data-aos="fade-left">
              <div className="enquiry-form-container">
                <h3>Business Enquiry Form</h3>
                {formSubmitted ? (
                  <div className="form-success-message">
                    <i className="fa-solid fa-check-circle"></i>
                    <h4>Thank You!</h4>
                    <p>Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="enquiry-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter your full name"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email address"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="Enter your phone number"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="business">Business Division</label>
                      <select 
                        id="business" 
                        name="business" 
                        value={formData.business} 
                        onChange={handleChange}
                      >
                        <option value="Chemical Division">Chemical Division</option>
                        <option value="Industrial Division">Industrial Division</option>
                        <option value="Food & Beverage Division">Food & Beverage Division</option>
                        <option value="IT Division">IT Division</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell us about your requirements"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="enquiry-submit-btn" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Enquiry'} <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="enquiry-faq-section">
        <div className="enquiry-content-container">
          <h2 className="enquiry-section-title" data-aos="fade-up">Frequently Asked Questions</h2>
          <div className="enquiry-faq-grid">
            <div className="enquiry-faq-item" data-aos="fade-up">
              <h3><i className="fa-solid fa-circle-question"></i> What products do you export?</h3>
              <p>We export a wide range of products across our four divisions: chemicals, industrial goods, food & beverages, and IT products. Each division specializes in high-quality products sourced from verified manufacturers.</p>
            </div>
            <div className="enquiry-faq-item" data-aos="fade-up" data-aos-delay="100">
              <h3><i className="fa-solid fa-circle-question"></i> How long does the import/export process take?</h3>
              <p>The timeline varies depending on product type, quantity, destination, and regulatory requirements. Typically, our process takes 2-4 weeks, but we provide estimated timelines for each order based on your specific requirements.</p>
            </div>
            <div className="enquiry-faq-item" data-aos="fade-up" data-aos-delay="200">
              <h3><i className="fa-solid fa-circle-question"></i> Do you handle customs clearance?</h3>
              <p>Yes, we provide comprehensive support for customs clearance and documentation. Our experienced team ensures all regulatory requirements are met to facilitate smooth transactions across borders.</p>
            </div>
            <div className="enquiry-faq-item" data-aos="fade-up" data-aos-delay="300">
              <h3><i className="fa-solid fa-circle-question"></i> What payment methods do you accept?</h3>
              <p>We accept various payment methods including bank transfers, letters of credit, and other secure international payment options. We can discuss the most suitable method based on your requirements and location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="enquiry-cta-section">
        <div className="enquiry-cta-content" data-aos="fade-up">
          <h2>Ready to Explore Global Trade Opportunities?</h2>
          <p>Contact our team today to discuss how Kerala Exim can help expand your business globally.</p>
          <Link to="/contact" className="enquiry-cta-btn">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;