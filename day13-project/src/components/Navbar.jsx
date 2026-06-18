import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="portal-brand">Student Portal</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/student-form" className={({ isActive }) => isActive ? 'active' : ''}>
          Student Form
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
