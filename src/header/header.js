import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Products from '../functionality/function';
import Footer from '../footer/footer';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="top-section">
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src="Group 48100065.png" alt="Menu" /> 
          </button>
          <div className="logo">
            <img src="/Logo.png" alt="Logo" />
          </div>
          <div className="logopage">
            <h1 className="change">LOGO</h1>
          </div>
          <div className="icons">
            <Link to="/search" className="icon">
              <img src="/search-normal.png" alt="Search" />
            </Link>
            <Link to="/favorites" className="icon">
              <img src="/heart.png" alt="Favorites" />
            </Link>
            <Link to="/cart" className="icon">
              <img src="/shopping-bag.png" alt="Cart" />
            </Link>
            <Link to="/profile" className="icon">
              <img src="/profile.png" alt="Profile" />
            </Link>
            <div className="language-selector">
              <select>
                <option value="eng">ENG</option>
                <option value="eur">EUR</option>
              </select>
            </div>
          </div>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/shop" onClick={toggleMenu}>Shop</Link>
          <Link to="/skills" onClick={toggleMenu}>Skills</Link>
          <Link to="/stories" onClick={toggleMenu}>Stories</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        </nav>
      </header>
      <div className="discover-section">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default Header;
