import React from 'react';
import './Resell.css';

const Resell = () => {
  const products = [
    { id: 1, title: "Premium Mod Pack", description: "Complete collection of premium mods for enhanced gameplay", badge: "Bestseller", badgeColor: "#ff4757" },
    { id: 2, title: "Graphics Enhancement", description: "High-quality texture packs and visual improvements", badge: "Trending", badgeColor: "#2ed573" },
    { id: 3, title: "Gameplay Overhaul", description: "Transform your gaming experience with new mechanics", badge: "New", badgeColor: "#1e90ff" },
    { id: 4, title: "Sound Enhancement", description: "Immersive audio experience with custom sound packs", badge: "Popular", badgeColor: "#ffa502" },
    { id: 5, title: "UI Customization", description: "Modern and sleek interface modifications", badge: "Hot", badgeColor: "#ff6b81" },
    { id: 6, title: "Performance Boost", description: "Optimize your game for better performance", badge: "Featured", badgeColor: "#7bed9f" },
    { id: 7, title: "Character Models", description: "High-quality character model replacements", badge: "Limited", badgeColor: "#70a1ff" },
    { id: 8, title: "Environment Mods", description: "Beautiful environment and world modifications", badge: "Premium", badgeColor: "#ff9f43" },
    { id: 9, title: "Combat Enhancement", description: "Improved combat mechanics and animations", badge: "Exclusive", badgeColor: "#ff4757" },
    { id: 10, title: "Quest Expansion", description: "Additional quests and story content", badge: "Special", badgeColor: "#2ed573" },
    { id: 11, title: "Multiplayer Mods", description: "Enhanced multiplayer experience", badge: "Popular", badgeColor: "#1e90ff" },
    { id: 12, title: "Quality of Life", description: "Essential mods for better gameplay", badge: "Must Have", badgeColor: "#ffa502" }
  ];

  return (
    <main className="resell-page">
      {/* Banner Section */}
      <section className="resell-hero">
        <div className="container">
          <div className="resell-hero-content">
            <h1>Premium <span className="gradient-text">Mods</span></h1>
            <p className="hero-subtitle">
              Enhance your gaming experience with our collection of high-quality mods
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-badge" style={{ backgroundColor: product.badgeColor }}>
                  {product.badge}
                </div>
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt={product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resell; 