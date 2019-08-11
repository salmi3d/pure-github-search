import React from 'react'
import { Link, Route } from 'react-router-dom'

export const Navbar = () => (
  <nav className="nav-wrapper teal" style={{ marginBottom: '1rem', padding: '0 2rem' }}>
    <Link to="/" className="brand-logo">Pure Github Search</Link>
    <ul id="nav-mobile" className="right">
      <Route path="/about">{({ match }) => <li className={match ? 'active' : undefined}><Link to="/info">Info</Link></li>}</Route>
    </ul>
  </nav >
)
