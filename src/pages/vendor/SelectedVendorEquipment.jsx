import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export default function SelectedVendorEquipment() {

    const params = useParams()

    const [machine, setMachine] = useState(null)

    useEffect(() => {
        async function fetchMachine() {
            const res = await fetch(`http://localhost:4000/api/equipment/${params.id}`)
            const data = await res.json()
            setMachine(data)
        }

        fetchMachine()
    }, [])

    if (!machine) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="selectedVendorEquipment--page">
            <div className="selectedVendorEquipment--page--container">
                <img src="https://t3.ftcdn.net/jpg/01/27/96/46/240_F_127964695_WxIo3nLZmbwMLCd8jWQdr7fl1KfH1L6N.jpg" alt="" />
                <div className="selectedVendorEquipment--top--right">
                    <h2>{machine.name}</h2>
                    <span>{machine.type}</span>
                </div>
            </div>
            <div className="selectedVendorEquipment--page--nav">
                <NavLink to='.'>Details</NavLink>
                <NavLink to='price'>Price</NavLink>
                <NavLink to='photos'>Images</NavLink>
            </div>
            <Outlet context={{machine}}/>
        </div>
    )
}