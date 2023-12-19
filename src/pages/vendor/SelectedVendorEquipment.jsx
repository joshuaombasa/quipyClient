import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import { getMachine } from "../../utils/api";

// export async function loader({ request, params }) {
//     console.log('Wow')
//     return defer({machine: getMachine(params.id)})
// }

export async function loader({ request, params }) {
    return defer({ machine: getMachine(params.id) })
}

export default function SelectedVendorEquipment() {

    const dataPromise = useLoaderData()

    const activeStyle = {
        border: '2px solid #4D4D4D'
    }

    function renderSelectedVendorEquipment(machine) {
        return (
            <>
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
                        style={({ isActive }) => isActive ? activeStyle : null}
                        end
                    >Details</NavLink>
                    <NavLink
                        to='price'
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >Price</NavLink>
                    <NavLink
                        to='photos'
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >Images</NavLink>
                </div>
                <Outlet context={{ machine }} />
            </>
        )
    }

    return (
        <div className="selectedVendorEquipment--page">
            <div className="selectedVendorEquipment--page--container">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Await resolve={dataPromise.machine}>
                        {renderSelectedVendorEquipment}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}