
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Stay Connected</h3>
        <div className="social-media">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;