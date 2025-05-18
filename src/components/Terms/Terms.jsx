import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <main className="terms-page">
      <div className="container">
        <div className="terms-content">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: March 15, 2024</p>

          <section className="terms-section">
            <h2>1. Introduction</h2>
            <p>Welcome to our platform. By accessing and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.</p>
          </section>

          <section className="terms-section">
            <h2>2. Definitions</h2>
            <ul>
              <li>"Platform" refers to our website and services</li>
              <li>"User" refers to any individual accessing or using our platform</li>
              <li>"Content" refers to any materials, including mods, available on our platform</li>
              <li>"Services" refers to all features and functionalities provided by our platform</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>3. User Accounts</h2>
            <p>To access certain features of our platform, you must create an account. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information during registration</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Mod Usage and Licensing</h2>
            <p>Our platform provides access to various mods. By using our services, you agree to:</p>
            <ul>
              <li>Use mods in accordance with their respective licenses</li>
              <li>Not redistribute or resell mods without proper authorization</li>
              <li>Respect intellectual property rights of mod creators</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>5. Payment Terms</h2>
            <p>For premium mods and services, the following terms apply:</p>
            <ul>
              <li>All prices are listed in USD unless otherwise specified</li>
              <li>Payments are processed securely through our payment providers</li>
              <li>Refunds are subject to our refund policy</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>6. User Conduct</h2>
            <p>Users must not:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Engage in fraudulent activities</li>
              <li>Attempt to disrupt or compromise platform security</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>7. Limitation of Liability</h2>
            <p>Our platform is provided "as is" without any warranties. We are not liable for:</p>
            <ul>
              <li>Any damages arising from the use of our services</li>
              <li>Loss of data or content</li>
              <li>Service interruptions or technical issues</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Users will be notified of significant changes. Continued use of the platform constitutes acceptance of modified terms.</p>
          </section>

          <section className="terms-section">
            <h2>9. Contact Information</h2>
            <p>For questions about these Terms and Conditions, please contact us at:</p>
            <ul>
              <li>Email: support@example.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street, Digital City, DC 12345</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms; 