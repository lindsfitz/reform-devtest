import { React, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline()
            // background & logo come in from left
            .from(q('.first'), { duration: 0.5, x: -500, opacity:0 })
            // cars fade in from left
            .from(q('.car'), { duration: 0.5, x: -1500, opacity:0 })
            // text content & phone image fade in from top
            .from(q('.third'), { duration: 0.5, y:-50, color: 'transparent', opacity:0 })
    }, [])


    return (
        <div ref={el}>
            <div id='header-bg-div' className='first'>
                <img className='first' id='top-logo' src='/Images/logo-white.png' alt='eleanor-logo' />
                <div id='header-content' >
                    {/* div for the tagline and the link to the app store */}
                    <h1 className='third' id='main-heading'>DRIVE A NEW {<br />} CAR EVERY MONTH.</h1>
                    <div className='app-link third' id='header-applink'>
                        Available On the App
                        <button><img src='/Images/arrow-right.png' alt='right-arrow' /></button>
                    </div>
                    <img className='car' id='header-A7' src='/Images/A7-MY18.png' alt='white-sedan' />
                    {/* left back car image */}
                    <img className='car' id='header-car1' src='/Images/car1.png' alt='white-sedan' />
                    {/* third car img */}
                    <img className='car' id='header-porsche' src='/Images/porsche-model.png' alt='silver-porsche' />
                    {/* front porsche image */}
                </div>
                <img id='header-phone' className='third' src='/Images/header-phone.png' alt='phone-snapshot' />
            </div>
        </div>
    )
}