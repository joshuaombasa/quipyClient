import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";


export default function SingleMachine() {

    const location = useLocation()

    const params = useParams()
    const [machine, setMachine] = useState([])

    useEffect(() => {
        async function fetchMachine() {
            const res = await fetch(`http://localhost:4000/api/equipment/${params.id}`)
            const data = await res.json()
            setMachine(data)
        }

        fetchMachine()
    },[])

    const prevSearchParams = location.state ? location.state.filterType : 'all'

    const backLinkLogic = prevSearchParams !== 'all' ? `?type=${prevSearchParams}`: ``

    return (
        <div className="single--machine--page">
            <div className="single--machine--page--container">
                <Link
                    className="back--link"
                    to={`..${backLinkLogic}`}
                    relative="path"
                >&larr; Back to {prevSearchParams} equipment</Link>
                <img src={machine.imageUrl} alt="" />
                <h1>{machine.name}</h1>
                <span className="singleMachineItem--type">{machine.type}</span>
                <h3>${machine.price}/month</h3>
                <p>{machine.description}</p>
                <Link to='.' className="equipment--lease-link">Lease this equipment</Link>
            </div>
        </div>
    )
}