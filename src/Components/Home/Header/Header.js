import React from 'react';
import logo from '../../../images/ielts.jpg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="" />
        </div>
    );
};

export default Header;