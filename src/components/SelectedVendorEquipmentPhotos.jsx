import React from "react";
import spacePhoto from '../assets/space.jpg'
import { useOutletContext } from "react-router-dom";


export default function SelectedVendorEquipmentPhotos() {

    const { machine } = useOutletContext()

    return (
        <div className="selectedVendorEquipment--photos">
            <img src={machine.imageUrl} alt="" />
        </div>
    )
}