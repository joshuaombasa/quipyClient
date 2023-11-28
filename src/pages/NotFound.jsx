import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not--found--page">
            <div className="not--found--page--container">
                <h1>Page not found</h1>
                <Link to='/'>Go back to homepage</Link>
            </div>
        </div>
    )
}