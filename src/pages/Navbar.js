import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';
import NavLogo from '../images/logo.png';

// Helper function for smooth scrolling to sections on the current page
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function Navbar() {
  const location = useLocation();

  // Handler for navigation links
  const handleNavigation = (path, sectionId) => (e) => {
    if (location.pathname === '/' && sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
    } 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">

        <img src={NavLogo} alt="SkinSight AI Logo" className="navbar-logo"/>
      </div>
      <ul className="navbar-links">
        {/* Home Link */}
        <li>
          <Link to="/" onClick={handleNavigation('/', 'home')} className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        
        {/* About the App Link */}
        <li>
          <Link 
            to="/#about" 
            onClick={handleNavigation('/', 'about-section')} 
            className={location.hash === '#about' || location.pathname === '/' ? 'active-section' : ''}
          >
            About
          </Link>
        </li>
        
        {/* How to Use Link */}
        <li>
          <Link 
            to="/#guide" 
            onClick={handleNavigation('/', 'guide-section')} 
            className={location.hash === '#guide' || location.pathname === '/' ? 'active-section' : ''}
          >
            How to Use
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;