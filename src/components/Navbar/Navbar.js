import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "../NavItems/NavItems";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    return (
    <>
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
        Adolfina Decoracion
        </Link>
        <ul className="nav-items">
        {navItems.map((item) => {
            if (item.title === "Productos") {
            return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <Dropdown />}
                </li>
            );
            }
            return (
            <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
            </li>
            );
        })}
        </ul>
    </nav>
    </>
    );
}

export default Navbar;