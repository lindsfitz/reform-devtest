import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline()
            .from(q('.first'), { duration: 0.5, x: -400 })
            .from(q('.car'), { duration: 0.5, x: -420 })
            .from(q('.third'), { duration: 0.5, top: '-10px', color: 'transparent' })
    }, [])


    return (
        <div ref={el}>
            <div id='header-bg-div' className='first'>
                {/* This div is to create space for the yellow background */}
                <img className='first' style={{ position: 'absolute', top: '50px', left: '19px' }} src='/Images/logo-white.png' />
                <div style={{ position: 'absolute', top: '90px', left: '19px' }}>
                    {/* div for the tagline and the link to the app store */}
                    <h1 className='third' id='main-heading'>DRIVE A NEW {<br />} CAR EVERY MONTH.</h1>
                    <div className='app-link third' id='header-applink'>
                        Available On the App
                        <button><img src='/Images/arrow-right.png' /></button>
                    </div>
                    <img className='car' id='header-A7' src='/Images/A7-MY18.png' />
                    {/* left back car image */}
                    <img className='car' id='header-car1' src='/Images/car1.png' />
                    {/* third car img */}
                    <img className='car' id='header-porsche' src='/Images/porsche-model.png' />
                    {/* front porsche image */}
                </div>
                <img id='header-phone' src='/Images/header-phone.png' />
            </div>
        </div>
    )
}