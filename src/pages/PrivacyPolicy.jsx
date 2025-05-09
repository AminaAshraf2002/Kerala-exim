// PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      {/* Page Header */}
      <section className="privacy-page-header">
        <div className="privacy-page-overlay"></div>
        <div className="privacy-page-container">
          <h1 data-aos="fade-up">Privacy Policy</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content-section">
        <div className="privacy-content-container">
          <div className="privacy-content" data-aos="fade-up">
            
            <div className="privacy-section">
              <p className="privacy-effective-date">
                Effective Date: May 2025
              </p>
              <p>
                At Kerala Exim, we respect and protect your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services. 
                Please read this Privacy Policy carefully. By accessing or using our website or services, you 
                acknowledge that you have read, understood, and agree to be bound by all the terms of this 
                Privacy Policy.
              </p>
            </div>

            <div className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>
                We may collect personal and non-personal information in the following ways:
              </p>
              
              <h3>Personal Information</h3>
              <p>
                When you fill out forms on our website, communicate with us, or use our services, we may collect:
              </p>
              <ul>
                <li>Contact information (name, email address, phone number, business address)</li>
                <li>Business information (company name, job title, industry)</li>
                <li>Payment information (for services rendered)</li>
                <li>Correspondence sent to us</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3>Non-Personal Information</h3>
              <p>
                When you visit our website, we may automatically collect:
              </p>
              <ul>
                <li>Log information (IP address, browser type, referring/exit pages, date/time stamps)</li>
                <li>Device information (device type, operating system)</li>
                <li>Usage data (how you interact with our website)</li>
                <li>Cookies and similar technologies information</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our website and services</li>
                <li>Process and complete transactions</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize your experience on our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. How We Share Your Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul>
                <li>With service providers and partners who perform services on our behalf</li>
                <li>To comply with law, regulation, legal process, or governmental request</li>
                <li>To enforce our rights, protect our property, or protect the rights, property, or safety of others</li>
                <li>In connection with a business transfer (merger, acquisition, reorganization, etc.)</li>
                <li>With your consent or at your direction</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div className="privacy-section">
              <h2>4. Cookies and Similar Technologies</h2>
              <p>
                Our website uses cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and deliver personalized content. You can control the use of cookies at the individual browser level, 
                but disabling cookies may limit your use of certain features or functions on our website.
              </p>
              <p>
                We use the following types of cookies:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Preference cookies:</strong> Enable the website to remember your preferences</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing cookies:</strong> Used to track visitors across websites to display relevant advertisements</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your 
                personal information. However, please be aware that no security measures are perfect or impenetrable, 
                and we cannot guarantee the absolute security of your data transmitted to our website.
              </p>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            <div className="privacy-section">
              <h2>6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            <div className="privacy-section">
              <h2>7. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the country in which 
                you reside. These countries may have data protection laws that are different from the laws of your country.
              </p>
              <p>
                When we transfer your information to other countries, we will take appropriate measures to protect 
                your information and comply with applicable data protection laws.
              </p>
            </div>

            <div className="privacy-section">
              <h2>8. Children's Privacy</h2>
              <p>
                Our website and services are not directed to individuals under the age of 16. We do not knowingly 
                collect personal information from children under 16. If you become aware that a child has provided 
                us with personal information, please contact us. If we become aware that we have collected personal 
                information from a child under 16, we will take steps to delete that information.
              </p>
            </div>

            <div className="privacy-section">
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites and services. We have no control over and 
                assume no responsibility for the content, privacy policies, or practices of any third-party websites 
                or services. We encourage you to review the privacy policies of any websites you visit.
              </p>
            </div>

            <div className="privacy-section">
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an 
                updated "Effective Date" at the top of this Privacy Policy. We encourage you to review this Privacy 
                Policy frequently to stay informed about how we are protecting your information.
              </p>
            </div>

            <div className="privacy-section">
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please 
                contact us at:
              </p>
              <p>
                Kerala Exim<br />
                [Your Address]<br />
                Email: [Your Email]<br />
                Phone: [Your Phone Number]
              </p>
            </div>

            <div className="privacy-section">
              <p>
                By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;