import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedVendorEquipmentDetails() {

    const { machine } = useOutletContext()

    return (
        <div className="selectedVendorEquipment--details">
           <p><strong>Name: </strong>{machine.name}</p>
           <p><strong>Type: </strong>{machine.type}</p>
           <p><strong>Description: </strong>{machine.description}</p>
        </div>
    )
}