import React from "react";
import SingleMachineItem from "../components/SingleMachineItem";

export default function Machinery() {
    return (
        <div className="machinery--page">
            <div className="machinery--page--container">
                <h1>Explore Our Diverse Range of Equipment</h1>
                <div className="filter--nav">
                    <button>Diagnostic</button>
                    <button>Treatment</button>
                    <button>Surgical</button>
                    <button>Laboratory</button>
                    <button>Monitoring</button>
                    <button className="clear--filters--btn">Clear filters</button>
                </div>
                <div className="machinery--list--parent">
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                    <SingleMachineItem/>
                </div>
            </div>
        </div>
    )
}