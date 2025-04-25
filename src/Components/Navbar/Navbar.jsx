import React, { useEffect, useState } from "react";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import "../styles/NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo">
        AS ESTIMATION &<br />
        CONSULTANTS LLC
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">ABOUT US</a>
        <div className="dropdown">
          <a href="#">
            OUR SERVICES <HiChevronDown />
          </a>
          <div className="dropdown-content">
            <Link to="/residential-estimating">Residential Estimating</Link>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
          </div>
        </div>
        <a href="#">BLOGS</a>
        <a href="/contactus">CONTACT US</a>

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

      {/* Mobile view */}
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
