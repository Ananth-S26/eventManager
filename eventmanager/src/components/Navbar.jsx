import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        Event<span>Hub</span>
      </div>

      {/* DESKTOP LINKS */}
      <ul className="desktop-links">
        <li>Home</li>
        <li>Events</li>
        <li>Dashboard</li>
        <li>Contact</li>
      </ul>

      {/* DESKTOP BUTTONS */}
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <ul className="mobile-links">
          <li>Home</li>
          <li>Events</li>
          <li>Dashboard</li>
          <li>Contact</li>
        </ul>

        <div className="mobile-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;