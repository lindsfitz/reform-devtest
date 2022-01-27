import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Boxes() {

    const boxContent = {
        simple: {
            image: 'simple.png',
            title: 'SIMPLE MONTHLY PRICING',
            content:'Pick your plan, pay the monthly price.  Thats it.  No hidden fees!'
        },
        vehicle: {
            image: 'vehicle.png',
            title: 'VEHICLE INSURANCE INCLUDED',
            content:"That’s right, you’re covered.  All Eleanor plans include insurance coverage."
        },
        maintenance: {
            image: 'maintenance.png',
            title: 'MAINTENANCE IS COVERED',
            content: "Leave it us.  Don’t worry about maintaining your vehicle.  Eleanor covers that as well."
        }
    }


    return (
        <div>
            <div>
                {/* this div is set to flexbox */}
                <div>
                    {/* image/icon */}
                    {/* title */}
                    {/* subtitle */}
                </div>
                {/* ****Will probably create an object that has the content for these boxes as they repeat the same format and therefore can just be reused */}
            </div>

        </div>
    )
}