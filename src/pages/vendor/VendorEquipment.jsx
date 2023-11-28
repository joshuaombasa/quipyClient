import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import spaceImg from '../../assets/space.jpg'

export default function VendorEquipment() {

    const [vendorEquipment, setVendorEquipment] = useState([])

    useEffect(() => {
        async function fetchVendorEquipment() {
            const res = await fetch('http://localhost:4000/api/vendorEquipment')
            const data = await res.json()
            setVendorEquipment(data)
        }

        fetchVendorEquipment()
    }, [])

    if (vendorEquipment.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

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
        <div className="vendorEquipment--page">
            <div className="vendorEquipment--page--container">
                <h1>This is VendorEquipment</h1>
                {vendorEquipmentElements}
            </div>
        </div>
    )
}