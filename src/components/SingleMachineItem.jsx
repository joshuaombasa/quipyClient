import React from "react";

export default function SingleMachineItem() {
    return (
        <div className="singleMachineItem">
            <div className="singleMachineItem--container">
                <img src="https://t3.ftcdn.net/jpg/01/27/96/46/240_F_127964695_WxIo3nLZmbwMLCd8jWQdr7fl1KfH1L6N.jpg" alt="" />
                <div className="singleMachineItem--info">
                    <h3>CT Scanner</h3>
                    <h3 className="singleMachineItem--price">
                        $900/month
                    </h3>
                </div>
                <span className="singleMachineItem--type">Laboratory</span>
            </div>
        </div>
    )
}