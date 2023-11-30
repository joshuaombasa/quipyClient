import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function VendorLayout() {

    const activeStyle = {
        border: '2px solid #4D4D4D'
    }

    return (
        <div className="vendor--layout--parent">
            <div className="vendor--layout--container">
                <div className="vendor--layout--nav">
                    <NavLink
                       to='.'
                       style={({isActive}) => isActive ? activeStyle : null }
                       end
                    >Dashboard</NavLink>
                    <NavLink
                       style={({isActive}) => isActive ? activeStyle : null } 
                       to='income'
                    >Income</NavLink>
                    <NavLink
                       style={({isActive}) => isActive ? activeStyle : null } 
                       to='equipment'
                    >Equipment</NavLink>
                    <NavLink
                       style={({isActive}) => isActive ? activeStyle : null } 
                       to='reviews'
                    >Reviews</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}