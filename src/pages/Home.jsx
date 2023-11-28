import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home--page--parent">
            <div className="home--page--container">
                <h1>Welcome to Quipy – Your Trusted Partner in Medical Equipment Leasing!</h1>
                <p>At Quipy, we understand the critical importance of having reliable and state-of-the-art medical equipment to ensure top-notch patient care. As a leading provider of medical equipment leasing solutions, we are dedicated to simplifying the process for healthcare professionals, clinics, and institutions.</p>
                <p>Partner with Quipy today and elevate your healthcare services with the latest medical equipment. Focus on what matters most – providing exceptional patient care – while we take care of your equipment leasing needs.</p>
                <Link to='/equipment'>See our equipment</Link>
            </div>
        </div>
    )
}