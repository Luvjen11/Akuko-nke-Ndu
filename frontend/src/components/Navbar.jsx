import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="logo-text">Asusu Nke Ndu</Link>
      <div className="nav-links-container">
        <Link to="/all-quotes" className="nav-link">View All</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
