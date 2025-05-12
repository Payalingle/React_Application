import React from 'react';
import './Home.css';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';

const Home = () => {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Transform Your Ideas into <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="hero-subtitle">
              The all-in-one platform for modern teams. Build, collaborate, and scale your business with ease.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Get Started Free</button>
              <button className="secondary-btn">
                <i className="fas fa-play"></i>
                Watch Demo
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>10K+</h3>
                <p>Active Users</p>
              </div>
              <div className="stat">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-cards">
          <div className="floating-card">
            <i className="fas fa-bolt"></i>
            <p>Lightning Fast</p>
          </div>
          <div className="floating-card">
            <i className="fas fa-shield-alt"></i>
            <p>Secure</p>
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default Home; 