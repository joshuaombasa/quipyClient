import React from "react";
import { Link } from "react-router-dom";


export default function SingleMachine() {
    return (
        <div className="single--machine--page">

            <div className="single--machine--page--container">
                <Link
                    className="back--link"
                    to='..'
                    relative="path"
                >&larr; Back to all equipment</Link>
                <img src="https://t3.ftcdn.net/jpg/01/27/96/46/240_F_127964695_WxIo3nLZmbwMLCd8jWQdr7fl1KfH1L6N.jpg" alt="" />
                <h1>MRI Scanner</h1>
                <span className="singleMachineItem--type">Diagnostic</span>
                <h3>$900/month</h3>
                <p>The Philips Ingenuity CT series is known for its advanced imaging capabilities and user-friendly design. It offers fast and accurate imaging with reduced artifacts, providing detailed and reliable diagnostic information. With features such as metal artifact reduction and spectral imaging, it is suitable for various complex imaging procedures, including trauma assessment and oncology staging.</p>
                <Link className="equipment--lease-link">Lease this equipment</Link>
            </div>
        </div>
    )
}