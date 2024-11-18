import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>My E-commerce Site</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
}

export default Header;
