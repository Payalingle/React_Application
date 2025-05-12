import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About <span className="gradient-text">Us</span></h1>
            <p className="hero-subtitle">
              We're on a mission to transform how teams collaborate and build amazing products together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                We believe in empowering teams with the tools they need to create exceptional products. 
                Our platform combines powerful features with intuitive design to help teams work smarter, 
                not harder.
              </p>
              <div className="mission-stats">
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="stat">
                  <h3>50K+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Team Collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide everything we do
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Customer First</h3>
              <p>We put our customers at the heart of every decision we make.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries to create better solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We believe in the power of working together.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Trust & Security</h3>
              <p>We maintain the highest standards of security and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate people behind our success
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member" />
              </div>
              <h3>John Smith</h3>
              <p className="position">CEO & Founder</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Team Member" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="position">CTO</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member" />
              </div>
              <h3>Michael Chen</h3>
              <p className="position">Head of Product</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>Be part of our mission to transform how teams work together</p>
            <button className="cta-button">Get Started Free</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About; 