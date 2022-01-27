import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Customers() {


    return (
        <div>
            <h1>CUSTOMERS WITH THAT NEW CAR SMELL</h1>
            <h3>${`"With Eleanor"`}</h3>
            <p>Alex Bateman, Interface Designer</p>
            <div>
                {/* empty div for lil page divider here -- height of 4px and color is #F4F4F5 */}
            </div>
            <div>
                <h3>Available On the App</h3>
                {/* image of the customer goes here */}
            </div>

        </div>
    )
}