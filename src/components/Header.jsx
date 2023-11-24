import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header--container--parent">
            <div className="header--container">
                <Link to='/' className="logo">quipy</Link>
                <div className="header--nav">
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/vendor'>Vendor</NavLink>
                    <NavLink to='/equipment'>Equipment</NavLink>
                    <NavLink>Logout</NavLink>
                </div>
            </div>
        </div>
    )
}