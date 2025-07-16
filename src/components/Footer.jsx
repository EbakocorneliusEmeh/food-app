import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h3>Foodie</h3>
          <p>Delicious African & Global meals, delivered fast and fresh. Your food adventure starts here!</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/checkout-success">Success</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: corneliusebako@gmail.com</p>
          <p>Phone: +237 650-424-812</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
