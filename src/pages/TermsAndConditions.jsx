// TermsAndConditions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      {/* Page Header */}
      <section className="terms-page-header">
        <div className="terms-page-overlay"></div>
        <div className="terms-page-container">
          <h1 data-aos="fade-up">Terms and Conditions</h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content-section">
        <div className="terms-content-container">
          <div className="terms-content" data-aos="fade-up">
            
            <div className="terms-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Kerala Exim. These Terms and Conditions govern your use of our website and 
                services. By accessing or using our website, you agree to these terms in full. If you 
                disagree with any part of these terms, please do not use our website or services.
              </p>
            </div>

            <div className="terms-section">
              <h2>2. Definitions</h2>
              <p>
                In these Terms and Conditions:
              </p>
              <ul>
                <li>"We", "Our", "Us", or "Company" refers to Kerala Exim.</li>
                <li>"Website" refers to our website located at [your-website-url].</li>
                <li>"Services" refers to the import-export facilitation, consulting, and related services provided by Kerala Exim.</li>
                <li>"You" or "User" refers to the individual or entity accessing or using our website or services.</li>
                <li>"Content" refers to all information, text, images, data, links, or other material displayed on our website.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Services</h2>
              <p>
                Kerala Exim provides import-export services across various divisions including Chemical, 
                Industrial, Food & Beverage, and IT. Our services include but are not limited to:
              </p>
              <ul>
                <li>Product sourcing from global markets</li>
                <li>Export facilitation for businesses</li>
                <li>Documentation and compliance assistance</li>
                <li>Logistics and supply chain solutions</li>
                <li>Trade consulting services</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                without prior notice.
              </p>
            </div>

            <div className="terms-section">
              <h2>4. Website Use</h2>
              <p>
                You agree to use our website only for lawful purposes and in a manner that does not infringe the 
                rights of any third party. You are prohibited from:
              </p>
              <ul>
                <li>Using our website in any way that could damage, disable, overburden, or impair our servers or networks</li>
                <li>Attempting to gain unauthorized access to any part of our website or services</li>
                <li>Using automated means to access or collect data from our website</li>
                <li>Introducing viruses, trojans, worms, or other malicious code to our website</li>
                <li>Using our website to transmit unsolicited communications</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>5. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, and 
                software, is the property of Kerala Exim or its content suppliers and is protected by 
                international copyright laws. The compilation of all content on this website is the exclusive 
                property of Kerala Exim and is protected by international copyright laws.
              </p>
              <p>
                You may not reproduce, modify, create derivative works from, display, perform, publish, 
                distribute, disseminate, transmit, or circulate any content to any third party without our 
                express prior written consent.
              </p>
            </div>

            <div className="terms-section">
              <h2>6. Privacy Policy</h2>
              <p>
                Our Privacy Policy governs the collection, use, and disclosure of your personal information 
                when you use our website and services. By using our website, you consent to our Privacy Policy.
                Please refer to our <Link to="/privacy-policy">Privacy Policy</Link> for more information.
              </p>
            </div>

            <div className="terms-section">
              <h2>7. Disclaimer of Warranties</h2>
              <p>
                Our website and services are provided on an "as is" and "as available" basis. Kerala Exim makes 
                no representations or warranties of any kind, express or implied, as to the operation of our 
                website or the information, content, materials, or products included on this site.
              </p>
              <p>
                To the full extent permissible by applicable law, Kerala Exim disclaims all warranties, express 
                or implied, including but not limited to, implied warranties of merchantability and fitness for 
                a particular purpose. Kerala Exim will not be liable for any damages of any kind arising from 
                the use of this site, including, but not limited to direct, indirect, incidental, punitive, and 
                consequential damages.
              </p>
            </div>

            <div className="terms-section">
              <h2>8. Limitation of Liability</h2>
              <p>
                Kerala Exim shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages, including but not limited to, damages for loss of profits, goodwill, use, data, or 
                other intangible losses resulting from:
              </p>
              <ul>
                <li>The use or the inability to use our website or services</li>
                <li>The cost of procurement of substitute goods and services</li>
                <li>Unauthorized access to or alteration of your transmissions or data</li>
                <li>Any other matter relating to our website or services</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Kerala Exim, its officers, directors, employees, 
                agents, and affiliates from and against all losses, expenses, damages, and costs, including 
                reasonable attorneys' fees, resulting from any violation of these Terms and Conditions or any 
                activity related to your use of our website or services.
              </p>
            </div>

            <div className="terms-section">
              <h2>10. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of 
                India. Any dispute arising under these Terms and Conditions shall be subject to the exclusive 
                jurisdiction of the courts of Kerala, India.
              </p>
            </div>

            <div className="terms-section">
              <h2>11. Changes to Terms</h2>
              <p>
                Kerala Exim reserves the right to modify these Terms and Conditions at any time without prior 
                notice. Changes will be effective immediately upon posting on our website. Your continued use 
                of our website after any changes to these Terms and Conditions constitutes your acceptance of 
                such changes.
              </p>
            </div>

            <div className="terms-section">
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p>
                Kerala Exim<br />
                [Your Address]<br />
                Email: [Your Email]<br />
                Phone: [Your Phone Number]
              </p>
            </div>

            <div className="terms-section">
              <p className="terms-last-updated">
                Last Updated: May 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;