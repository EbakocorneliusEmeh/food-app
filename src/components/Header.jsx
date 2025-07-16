import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="app-header">
      <div className="logo">🍔 FoodApp</div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/cart" className="nav-link" onClick={closeMenu}>Cart</NavLink>
        <NavLink to="/admin" className="nav-link" onClick={closeMenu}>Admin</NavLink>
        <NavLink to="/checkout-success" className="nav-link" onClick={closeMenu}>Success</NavLink>
      </nav>
    </header>
  );
};

export default Header;
