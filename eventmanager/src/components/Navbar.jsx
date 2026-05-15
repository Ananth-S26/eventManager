import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Event<span>Hub</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Events</li>
        <li>Dashboard</li>
        <li>Contact</li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;