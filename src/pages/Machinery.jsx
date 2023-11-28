import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SingleMachineItem from "../components/SingleMachineItem";

export default function Machinery() {

    const [machines, setMachines] = useState([])

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

    useEffect(() => {
        async function fetchMachines() {
            const res = await fetch('http://localhost:4000/api/equipment')
            const data = await res.json()
            setMachines(data)
        }

        fetchMachines()
    }, [])



    if (machines.length < 1) {
        return (
            <h1>Loading...</h1>
        )
    }

    const filterType = searchParams.get('type') ? searchParams.get('type') : null

    const filteredMachines = filterType ?
        machines.filter(item => item.type === filterType) :
        machines

    const machineElements = filteredMachines.map(item => (
        <SingleMachineItem key={item.id} machine={item} filterType={filterType}/>
    ))

    return (
        <div className="machinery--page">
            <div className="machinery--page--container">
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
            </div>
        </div>
    )
}