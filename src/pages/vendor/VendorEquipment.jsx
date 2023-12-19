import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getVendorMachines } from "../../utils/api";

export async function loader() {
    return defer({ machines: getVendorMachines() })
}

export default function VendorEquipment() {

    const dataPromise = useLoaderData()

    function renderVendorEquipment(vendorEquipment) {

        const vendorEquipmentElements = vendorEquipment.map(item => (
            <Link to={item.id} key={item.id} className='vendorEquipmentItem'>
                <img src="https://t3.ftcdn.net/jpg/01/27/96/46/240_F_127964695_WxIo3nLZmbwMLCd8jWQdr7fl1KfH1L6N.jpg" alt="" />
                <div className="vendor--equipment--text">
                    <h3>{item.name}</h3>
                    <span className="vendor--equipment--type">{item.type}</span>
                    <span className="vendor--equipment--price">${item.price}/month</span>
                </div>
            </Link>
        ))

        return (
            <>
                <h1>Your listed Equipment:</h1>
                {vendorEquipmentElements}
            </>
        )
    }

    return (
        <div className="vendorEquipment--page">
            <div className="vendorEquipment--page--container">
                <Suspense return={<h1>Loading...</h1>}>
                    <Await resolve={dataPromise.machines}>
                        {renderVendorEquipment}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}