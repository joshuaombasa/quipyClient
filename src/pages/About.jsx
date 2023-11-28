import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="">
            <div className="about--page--container">
                <h1>About Quipy: Elevating Healthcare Through Innovation</h1>
                <p>Welcome to Quipy, where our commitment to advancing healthcare is at the heart of everything we do. As a leading provider of medical equipment leasing, we pride ourselves on revolutionizing the accessibility of cutting-edge technology for healthcare professionals and institutions.</p>
                <div className="">
                    <h2>Our Mission</h2>
                    <p>At Quipy, our mission is clear: to empower healthcare providers with state-of-the-art medical equipment, fostering a new era of patient care and diagnostic precision. We believe that by making advanced technology more accessible, we contribute to the overall improvement of healthcare outcomes and experiences.</p>
                </div>
                <div className="quipy--difference">
                    <h2>The Quipy Difference</h2>
                    <div className="">
                        <div className="">
                            <span>Innovation in Every Lease</span>
                            <p>We stand at the forefront of innovation, constantly updating our equipment catalog to reflect the latest advancements in the medical field. From diagnostic imaging to therapeutic devices, we ensure that our clients have access to the tools that define modern healthcare.</p>
                        </div>
                        <div className="">
                            <span>Client-Centric Approach</span>
                            <p>Quipy is more than a leasing platform; we are your strategic partner. Our client-centric approach involves understanding your unique needs and providing flexible leasing solutions that align with your goals. Your success is our success.</p>
                        </div>
                        <div className="">
                            <span>Quality Assurance</span>
                            <p>The trust you place in us is reciprocated through our unwavering commitment to quality. Every piece of equipment in our inventory undergoes stringent quality checks to guarantee reliability and performance. When you choose Quipy, you choose excellence.</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h2>Our Vision</h2>
                    <p>As we look ahead, Quipy envisions a healthcare landscape where access to state-of-the-art medical equipment is seamless and universal. We aspire to be the catalyst that propels healthcare providers into the future, equipped with the tools needed to make groundbreaking advancements in patient care.</p>
                </div>
                <div className="about--page--cta">
                    <h2 className="header--text">Join the Quipy Community</h2>
                    <p>Whether you are a healthcare professional, a clinic, or an institution, Quipy invites you to be part of our community dedicated to transforming healthcare through innovation. Explore our leasing solutions, discover the latest advancements in medical technology, and experience a new era in healthcare equipment accessibility.</p>
                    <Link to='/equipment'>Explore our equipment</Link>
                </div>
            </div>
        </div>
    )
}