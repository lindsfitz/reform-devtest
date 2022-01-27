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
            image:'range-rover'
        },
        second: {
            name: 'PORSCHE',
            subtitle:'2019 - 911 CARRERA S',
            mpg:'19/24',
            HPstat:'443',
            acceleration:'3.2',
            image:'porsche-model'
        }
    }


    return (
        <div>
            <h2 class='section-title'>SELECT A VEHICLE FROM YOUR PHONE.</h2>
            <h3 class='section-sub'>Select from a wide range of luxury vehicles in our inventory.  Drive it for a month, trade it the next for something else you have always wanted to own.</h3>
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