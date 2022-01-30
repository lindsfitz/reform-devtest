import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Trade() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline()

        // yellow bg & porsche img slide in from right together
        // phone image fades in from current position
        // header & subhead fade in from top

    }, [])


    return (
        <div id='section-four'>
            <div id='trade-text'>
                <h2 className='section-title'>TRADE IN YOUR CAR EVERY MONTH.</h2>
                <h3 className='section-sub'>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!</h3>
            </div>
            <div id='trade-bg-div'>
                <img id='trade-porsche' src='/Images/trade-porche.png' alt='headon-view-porsche' />
                <img id='trade-phone' src='/Images/trade-phone.png' alt='vehicle-swap-phone-snapshot' />
            </div>

        </div>
    )
}