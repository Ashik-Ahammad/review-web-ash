import React from 'react';
import logo from '../../../images/ielts.jpg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <h2 className="border border-info text-primary p-3 mb-5 service"> OUR MAIN SERVICE </h2>
        </div>
    );
};

export default Header;