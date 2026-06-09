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