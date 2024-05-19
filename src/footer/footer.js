// src/Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="subscribe-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-section">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <img src="United States of America (US).png" alt="Currency Icon" className="currency-icon" />*USD
          <p className='ging'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <div className="middle-divider"></div>
      <div className="bottom-section">
        <div className="metta-muse-section">
          <h3>mettä muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="links-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="follow-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <img src="/Insta.png" alt="Instagram" />
            <img src="/a.png" alt="LinkedIn" />
          </div>
          <h3>mettä muse ACCEPTS</h3>
          <div className="payment-icons">
            <img src="/Group 136188.jpg" alt="Google Pay" />
            <img src="/Group 136190.png" alt="PayPal" />
            <img src="/Group 136192.png" alt="MasterCard" />
            <img src="/Group 136193.png" alt="American Express" />
            <img src="/Group 136194.png" alt="Apple Pay" />
            <img src="/Group 136194.png" alt="Apple Pay" />
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
