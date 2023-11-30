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

    const activeStyle = {
        border: '2px solid #4D4D4D'
    }

    return (
        <div className="selectedVendorEquipment--page">
            <div className="selectedVendorEquipment--page--container">
                <div className="top--area">
                    <img src={machine.imageUrl} alt="" />
                    <div className="selectedVendorEquipment--top--right">
                        <h2>{machine.name}</h2>
                        <span>{machine.type}</span>
                    </div>
                </div>
                <div className="selectedVendorEquipment--page--nav">
                    <NavLink 
                         to='.'
                         style={({isActive}) => isActive ? activeStyle: null}
                         end
                    >Details</NavLink>
                    <NavLink 
                         to='price'
                         style={({isActive}) => isActive ? activeStyle: null}
                    >Price</NavLink>
                    <NavLink 
                         to='photos'
                         style={({isActive}) => isActive ? activeStyle: null}
                    >Images</NavLink>
                </div>
                <Outlet context={{ machine }} />
            </div>
        </div>
    )
}