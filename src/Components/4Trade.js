import { React, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Trade() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-four",
                start: "top top", // when the top of the trigger hits the top of the viewport
        }})
        // yellow bg & porsche img slide in from right together
        .from(q('#trade-bg-div'), {
            opacity:0,
            x:-600,
            duration:0.8
        })
        // phone image fades in from current position
        .from(q('#trade-phone'), {
            opacity:0,
            duration:0.5
        })
        // header & subhead fade in from top
        .from(q('#trade-text'), {
            opacity:0,
            y:-50,
            duration:0.5
        })

    }, [])


    return (
        <div id='section-four' ref={el}>
            <div id='trade-text'>
                <h2 className='section-title'>TRADE IN YOUR CAR EVERY MONTH.</h2>
                <h3 className='section-sub'>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!</h3>
            </div>
            <div id='trade-bg-div' className='first'>
                <img id='trade-porsche' className='first' src='/Images/trade-porche.png' alt='headon-view-porsche' />
                <img id='trade-phone' src='/Images/trade-phone.png' alt='vehicle-swap-phone-snapshot' />
            </div>

        </div>
    )
}