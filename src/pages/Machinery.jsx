import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import SingleMachineItem from "../components/SingleMachineItem";
import { getMachines } from "../utils/api";

export async function loader() {

    return defer({ machines: getMachines() })
}

export default function Machinery() {

    const dataPromise = useLoaderData()



    const [searchParams, setSearchParams] = useSearchParams()

    function generateSearchParams(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        setSearchParams(sp)
    }

    const filterType = searchParams.get('type') ? searchParams.get('type') : null



    function renderMachinery(machines) {

        const filteredMachines = filterType ?
            machines.filter(item => item.type === filterType) :
            machines

        const machineElements = filteredMachines.map(item => (
            <SingleMachineItem key={item.id} machine={item} filterType={filterType} />
        ))

        return (
            <>
                <h1>Explore Our Diverse Range of Equipment</h1>
                <div className="filter--nav">
                    <button
                        onClick={() => generateSearchParams('type', 'diagnostic')}
                    >Diagnostic</button>
                    <button
                        onClick={() => generateSearchParams('type', 'treatment')}
                    >Treatment</button>
                    <button
                        onClick={() => generateSearchParams('type', 'surgical')}
                    >Surgical</button>
                    <button
                        onClick={() => generateSearchParams('type', 'laboratory')}
                    >Laboratory</button>
                    <button
                        onClick={() => generateSearchParams('type', 'monitoring')}
                    >Monitoring</button>
                    <button
                        onClick={() => generateSearchParams('type', null)} className="clear--filters--btn"
                    >Clear filters</button>
                </div>
                <div className="machinery--list--parent">
                    {machineElements}
                </div>
            </>
        )
    }

    return (
        <div className="machinery--page">
            <div className="machinery--page--container">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Await resolve={dataPromise.machines}>
                        {renderMachinery}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}