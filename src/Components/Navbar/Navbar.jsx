import React, { useState } from "react";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import "../styles/NavbarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          AS ESTIMATION &<br />
          CONSULTANTS LLC
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/about">ABOUT US</a>
          <div className="dropdown">
            <a href="#">
              OUR SERVICES <HiChevronDown />
            </a>
            <div className="dropdown-content">
              <Link to="/residential-estimating">RESIDENTIAL ESTIMATING</Link>
              <a href="#">Service 2</a>
              <a href="#">Service 3</a>
            </div>
          </div>
          <a href="/blog">BLOGS</a>
          <a href="/contactus">CONTACT US</a>

          <button className="login-btn mobile-only">LOGIN / SIGNUP</button>
        </nav>

        <button className="login-btn desktop-only">LOGIN / SIGNUP</button>
      </header>
    </>
  );
};

export default Navbar;
