import { Link } from "react-router-dom"
import "./index.css"

import React from 'react'

const Header = () =>  (
    <nav className="header-nav-container">
        <Link to="/">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1733728350/logo-shubhchintak_nqlsbu.png" alt="logo" className="company-logo"/>
        </Link>
        <ul className="un-order-header-items">
            <Link to="/" className="link-item">
                <li>Home</li>
            </Link>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )

export default Header