import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""></img>
            <nav>
                <a href="/shop">Home</a>
                <a href="/review">Profile</a>
                <a href="/manage">Log out</a>
            </nav>
        </div>
    );
};

export default Header;