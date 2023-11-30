import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedVendorEquipmentPrice() {

    const { machine } = useOutletContext()

    return (
        <div className="selectedVendorEquipment--price">
          <p><strong>Price: </strong>${machine.price}/month</p>
        </div>
    )
}