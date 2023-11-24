import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function VendorLayout() {
    return (
        <div className="vendor--layout--parent">
            <div className="vendor--layout--container">
                <div className="vendor--layout--nav">
                    <NavLink>Dashboard</NavLink>
                    <NavLink to='income'>Income</NavLink>
                    <NavLink to='equipment'>Equipment</NavLink>
                    <NavLink to='reviews'>Reviews</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}