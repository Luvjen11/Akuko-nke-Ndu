import React from 'react'
import {Link}  from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navabr-container">
      <Link to={"/"} className='logo-text'>Akụkọ nke Ndụ</Link>
      <Link to={"/quotes"} className='nav-link'>View All</Link>
    </nav>
  );
}

export default Navbar
