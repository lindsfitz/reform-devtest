import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Customers() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline()

        // yellow bg from right bottom corner
        // customer image and car img (EXCEPT ON MOBILE) from left and fade in
        // text fades in from top

    }, [])


    return (
        <div id='section-six'>
            <div id='customer-text'>
                <h2 className='section-title'>CUSTOMERS WITH THAT NEW CAR SMELL</h2>
                <h3 className='section-sub'>{`“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”`}</h3>
                <p id='cust-font'>Alex Bateman, Interface Designer</p>
                <div id='divider'>
                    {/* empty div for lil page divider here -- height of 4px and color is #F4F4F5 */}
                </div>
                <div className='app-link'>
                    Available On the App
                    <button><img src='/Images/arrow-right.png' /></button>
                </div>
            </div>
            <div id='customer-bg-div'>
                <img id='customer-image' src='/Images/customer-alex.png' alt='customer-headshot' />
                <img id='customer-car' src='/Images/car1.png' alt='sedan-sideview' />
            </div>

        </div>
    )
}