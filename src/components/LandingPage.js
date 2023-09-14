import React from 'react';
import './styles.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Produkte</a></li>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="home" className="hero">
        <h1>Willkommen bei Boutique Chantal</h1>
        <p>Entdecken Sie unsere exklusive Kollektion.</p>
        <a href="#products" className="btn">Unsere Produkte</a>
      </section>

      <section id="products" className="products">
        <h2>Unsere Top-Produkte</h2>
        <div className="product">
          <img src="product1.jpg" alt="Produkt 1" />
          <h3>Modisches Kleid</h3>
          <p>Ein elegantes Kleid für besondere Anlässe.</p>
        </div>
        <div className="product">
          <img src="product2.jpg" alt="Produkt 2" />
          <h3>Bequeme Schuhe</h3>
          <p>Stilvolle und bequeme Schuhe für jeden Tag.</p>
        </div>
        <div className="product">
          <img src="product3.jpg" alt="Produkt 3" />
          <h3>Trendige Accessoires</h3>
          <p>Die perfekte Ergänzung für Ihr Outfit.</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Über uns</h2>
        <p>Eine kurze Beschreibung Ihres Unternehmens hier einfügen.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Kontaktieren Sie uns</h2>
        <p>Kontaktinformationen hier einfügen.</p>
      </section>

      <footer>
        <p>&copy; 2023 Boutique Chantal. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
