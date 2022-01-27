import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {

    const boxRef = useRef();
    const carRef = useRef();

    useEffect(()=> {
        gsap.from(boxRef.current, { duration: 0.5, x: -400 })

        gsap.from(carRef.current, { duration: 1, x: -400 })
    }, [])


    return (
        <div>
            <div id='header-bg-div' ref={boxRef}>
                {/* This div is to create space for the yellow background */}
            </div>
            <img style={{ position: 'absolute', top: '50px', left: '19px' }} src='/Images/logo-white.png' />
            <div style={{ position: 'absolute', top: '90px', left: '19px' }}>
                {/* div for the tagline and the link to the app store */}
                <h1 id='main-heading'>DRIVE A NEW {<br />} CAR EVERY MONTH.</h1>
                <div className='app-link' id='header-applink'>
                    Available On the App
                    <img src='/Images/arrow-right.png' />
                </div>
            <img ref={carRef} id='header-A7' src='/Images/A7-MY18.png' />
            {/* left back car image */}
            <img ref={carRef} id='header-car1' src='/Images/car1.png' />
            {/* third car img */}
            <img ref={carRef} id='header-porsche' src='/Images/porsche-model.png' />
            {/* front porsche image */}
            </div>
        </div>
    )
}