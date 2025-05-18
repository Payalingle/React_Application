import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Powerful Features for Modern Teams</h2>
          <p className="section-subtitle">
            Everything you need to build, collaborate, and scale your business
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Lightning Fast</h3>
            <p>Experience blazing fast performance with our optimized infrastructure and advanced caching system.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Enterprise Security</h3>
            <p>Bank-grade security with end-to-end encryption and advanced threat protection.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h3>Real-time Sync</h3>
            <p>Stay in sync with your team with instant updates and seamless collaboration.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Advanced Analytics</h3>
            <p>Get deep insights with powerful analytics and customizable reports.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile First</h3>
            <p>Access your work anywhere with our fully responsive mobile applications.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Easy Integration</h3>
            <p>Connect with your favorite tools through our extensive API and integrations.</p>
          </div>
        </div>

        <div className="features-cta">
          <h3>Ready to Get Started?</h3>
          <p>Join thousands of teams already using our platform</p>
          <button className="cta-button">Start Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default Features; 