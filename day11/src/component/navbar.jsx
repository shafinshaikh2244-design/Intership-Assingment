import React from 'react'

const Navbar = ({ total, onSearch }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, background: '#282c34', color: 'white' }}>
      <div style={{ fontSize: 20 }}>Student Manager</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <input
          placeholder="Search by name"
          onChange={(e) => onSearch(e.target.value)}
          style={{ padding: 6, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <div>Total Students: {total}</div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const navbar = () => {
  return (
    <nav className="navbar">
      <h4 style={{ backgroundColor: 'lightpink', padding: '10px', margin: 0 }}>Navigation</h4>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}

export default navbar