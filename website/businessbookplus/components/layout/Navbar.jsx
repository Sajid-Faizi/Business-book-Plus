import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/businessbookplus-logo.svg";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            {/* Hamburger Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {/* Links */}
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li>
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/features" onClick={() => setMenuOpen(false)}>
                        Features
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
                        Pricing
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/partner" onClick={() => setMenuOpen(false)}>
                        Partner
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/support" onClick={() => setMenuOpen(false)}>
                        Support
                    </NavLink>
                </li>

                <div className="mobile-buttons">
                    <button className="login-btn">Login</button>
                    <button className="start-btn">Get Started</button>
                </div>
            </ul>

            {/* Desktop Buttons */}
            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="start-btn">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;
