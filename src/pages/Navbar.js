import React, { useState } from 'react'; // <-- Import useState
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';
import NavLogo from '../images/logo.png';
// Import icons for the hamburger menu
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// Helper function for smooth scrolling to sections on the current page
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function Navbar() {
  const location = useLocation();
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- New State

  const toggleMenu = () => { // <-- New Handler
    setIsMenuOpen(!isMenuOpen);
  };

  // Handler for navigation links (now closes the menu after click)
  const handleNavigation = (path, sectionId) => (e) => {
    if (location.pathname === '/' && sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
      // Close the menu after navigation on mobile
      setIsMenuOpen(false); // <-- Close Menu
    } 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={NavLogo} alt="SkinSight AI Logo" className="navbar-logo"/>
      </div>
      
      {/* HAMBURGER BUTTON (VISIBLE ON MOBILE ONLY) */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
      </button>

      {/* NAVIGATION LINKS (Desktop/Mobile) */}
      {/* The 'mobile-open' class is conditionally applied */}
      <ul className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
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