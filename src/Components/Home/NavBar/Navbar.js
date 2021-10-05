import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className="nav-bar">
            <NavLink className="nav-style" activeStyle={activeStyle} to="/home">HOME</NavLink>
            <NavLink className="nav-style" activeStyle={activeStyle} to="/ourcourses">OUR COURSES</NavLink>
            <NavLink className="nav-style" activeStyle={activeStyle} to="/testinfo">TEST INFO</NavLink>
            <NavLink className="nav-style" activeStyle={activeStyle} to="/aboutus">ABOUT US</NavLink>
        </div>
    );
};

export default Navbar;