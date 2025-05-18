import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="section-subtitle">Choose the perfect plan for your needs</p>
        </div>

        <div className="pricing-toggle">
          <span className="toggle-label">Monthly</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span className="toggle-label">Yearly <span className="discount">Save 20%</span></span>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
              <p>Perfect for small teams and startups</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> Up to 5 team members</li>
              <li><i className="fas fa-check"></i> 10GB storage</li>
              <li><i className="fas fa-check"></i> Basic analytics</li>
              <li><i className="fas fa-check"></i> Email support</li>
              <li><i className="fas fa-check"></i> API access</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">79</span>
                <span className="period">/month</span>
              </div>
              <p>Ideal for growing businesses</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> Up to 20 team members</li>
              <li><i className="fas fa-check"></i> 50GB storage</li>
              <li><i className="fas fa-check"></i> Advanced analytics</li>
              <li><i className="fas fa-check"></i> Priority support</li>
              <li><i className="fas fa-check"></i> API access</li>
              <li><i className="fas fa-check"></i> Custom integrations</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">199</span>
                <span className="period">/month</span>
              </div>
              <p>For large organizations</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> Unlimited team members</li>
              <li><i className="fas fa-check"></i> Unlimited storage</li>
              <li><i className="fas fa-check"></i> Custom analytics</li>
              <li><i className="fas fa-check"></i> 24/7 support</li>
              <li><i className="fas fa-check"></i> API access</li>
              <li><i className="fas fa-check"></i> Custom integrations</li>
              <li><i className="fas fa-check"></i> Dedicated account manager</li>
            </ul>
            <button className="pricing-btn">Contact Sales</button>
          </div>
        </div>

        <div className="pricing-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I change plans later?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a free trial?</h4>
              <p>Yes, we offer a 14-day free trial on all plans. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer refunds?</h4>
              <p>Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 