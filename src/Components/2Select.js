import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Select() {

    const vehicles = {
        first: {
            name: 'LAND ROVER',
            subtitle: '2019 - RANGE ROVER VELAR',
            mpg: '25/29',
            HPstat: '247',
            acceleration: '6.4',
            image:''
        },
    }


    return (
        <div>
            <h1>Select a vehicle from your phone.</h1>
            <h3>Select from</h3>
            <div>
                <div>
                    {/* empty for yellow bg */}
                </div>
                <div>
                    {/* div for stats section on diff cars -- same format but different content. OnClick, show content of next index in vehicle object */}
                </div>

            </div>

        </div>
    )
}