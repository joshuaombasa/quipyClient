import React from "react";
import spaceImg from '../assets/space.jpg'


export default function Equipment() {
    return (
        <div className="equipment-page">
            <div className="equipment-page--container">
                <h1>Explore Our Diverse Range of Equipment</h1>
                <div className="equipment--types--parent">
                    <div className="treatment--devices">
                        <h2>Diagnostic Imaging</h2>
                        <div className="sample--equipment">
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                        </div>
                    </div>
                    <div className="diagnostic--devices">
                        <h2>Treatment Devices</h2>
                        <div className="sample--equipment">
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                        </div>
                    </div>
                    <div className="monitoring--devices">
                        <h2>Monitoring and Measurement Tools</h2>
                        <div className="sample--equipment">
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                        </div>
                    </div>
                    <div className="surgical--devices">
                        <h2>Surgical Instruments</h2>
                        <div className="sample--equipment">
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                        </div>
                    </div>
                    <div className="laboratory--devices">
                        <h2>Laboratory Equipment</h2>
                        <div className="sample--equipment">
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                            <img src={spaceImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}