import React, { Suspense, useEffect, useState } from "react";
import { Link, useParams, useLocation, defer, useLoaderData , Await} from "react-router-dom";
import { getMachine } from "../utils/api";

export async function loader({ request, params }) {
    return defer({ machine: getMachine(params.id) })
}


export default function SingleMachine() {

    const dataPromise = useLoaderData()

    const location = useLocation()

    const prevSearchParams = location.state.filterType ? location.state.filterType : 'all'

    const backLinkLogic = prevSearchParams !== 'all' ? `?type=${prevSearchParams}` : ``

    function renderMachine(machine) {
        return (
            <>
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
            </>
        )
    }

    return (
        <div className="single--machine--page">
            <div className="single--machine--page--container">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Await resolve={dataPromise.machine}>
                        {renderMachine}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}