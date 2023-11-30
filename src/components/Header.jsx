import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    const activeStyle = {
        border: '2px solid #fff'
    }

    return (
        <div className="header--container--parent">
            <div className="header--container">
                <Link to='/' className="logo">quipy</Link>
                <div className="header--nav">
                    <NavLink 
                       style={({isActive}) => isActive ? activeStyle : null}
                       to='/about'
                    >About</NavLink>
                    <NavLink 
                       style={({isActive}) => isActive ? activeStyle : null}
                       to='/vendor'
                    >Vendor</NavLink>
                    <NavLink 
                       style={({isActive}) => isActive ? activeStyle : null}
                       to='/equipment'
                    >Equipment</NavLink>
                    <NavLink
                       to='/logout'
                       style={({isActive}) => isActive ? activeStyle : null}
                    >Logout</NavLink>
                </div>
            </div>
        </div>
    )
}