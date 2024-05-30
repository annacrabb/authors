import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo">
        <div className="container">
            <Link to='/' className="brand-logo">Anna's Favorite Authors</Link>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar