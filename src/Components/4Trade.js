import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Trade() {


    return (
        <div id='section-four'>
            <div id='trade-text'>
                <h2 className='section-title'>TRADE IN YOUR CAR EVERY MONTH.</h2>
                <h3 className='section-sub'>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!</h3>
            </div>
            <div id='trade-bg-div'>
                <img id='trade-porsche' src='/Images/trade-porche.png' />
                <img id='trade-phone' src='/Images/trade-phone.png' />
            </div>

        </div>
    )
}