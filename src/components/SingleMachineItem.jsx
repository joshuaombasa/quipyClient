import React from "react";
import { Link } from "react-router-dom";

export default function SingleMachineItem({machine,filterType}) {

    
    return (
        <Link  to={`${machine.id}`} className="singleMachineItem" state={{filterType:filterType}}>
            <div className="singleMachineItem--container">
                <img src={machine.imageUrl} alt="" />
                <div className="singleMachineItem--info">
                    <h3>{machine.name}</h3>
                    <h3 className="singleMachineItem--price">
                        ${machine.price}/month
                    </h3>
                </div>
                <span className="singleMachineItem--type">{machine.type}</span>
            </div>
        </Link>
    )
}