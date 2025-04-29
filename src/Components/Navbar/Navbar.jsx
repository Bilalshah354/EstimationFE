import React, { useEffect, useState } from "react";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi"; // Icons for dropdown and menu toggle
import "../styles/NavbarStyles.css"; // Import custom CSS styles
import { Link, useNavigate } from "react-router-dom"; // Navigation components

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Controls mobile menu open/close
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status
  const navigate = useNavigate(); // For programmatic navigation

  // Check login token in local storage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert token to boolean
  }, []);

  // Handles logout: clear token, update login status, redirect to login page
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="navbar">
      {/* Brand logo */}
      <div className="logo">
        AS ESTIMATION &<br />
        CONSULTANTS LLC
      </div>

      {/* Toggle button for mobile menu */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Main navigation links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">ABOUT US</a>

        {/* Dropdown menu for "Our Services" */}
        <div className="dropdown">
          <a href="#">
            OUR SERVICES <HiChevronDown />
          </a>
          <div className="dropdown-content">
            {/* Estimator-specific route */}
            <Link to="/residential-estimating">Residential Estimating</Link>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
          </div>
        </div>

        <a href="#">BLOGS</a>
        <a href="/contactus">CONTACT US</a>

        {/* Desktop view login/logout button */}
        {isLoggedIn ? (
          <button className="login-btn desktop-only" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="login-btn desktop-only">
            <Link to="/login">LOGIN</Link>
          </button>
        )}
      </nav>

      {/* Mobile view login/logout button */}
      {isLoggedIn ? (
        <button className="login-btn mobile-only" onClick={handleLogout}>
          LOGOUT
        </button>
      ) : (
        <button className="login-btn mobile-only">
          <Link to="/login">LOGIN</Link>
        </button>
      )}
    </header>
  );
};

export default Navbar;
