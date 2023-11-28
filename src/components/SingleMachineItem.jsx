import React from "react";
import { Link } from "react-router-dom";

export default function SingleMachineItem({machine,filterType}) {

    
    return (
        <Link  to={`${machine.id}`} className="singleMachineItem" state={{filterType:filterType}}>
            <div className="singleMachineItem--container">
                <img src="https://t3.ftcdn.net/jpg/01/27/96/46/240_F_127964695_WxIo3nLZmbwMLCd8jWQdr7fl1KfH1L6N.jpg" alt="" />
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