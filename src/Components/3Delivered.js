import { React, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Delivered() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: "#map-image",
                start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        }})
        // map from left & header from top -- both fade in
        .from(q('#map-image'), {
            opacity:0,
            x:500,
            duration:0.5
        })
        // title fades in from top
        .from(q('.section-title'), {
            opacity:0,
            y:-50,
            duration:0.2
        })
        // subtitle fades in from top (from a lower starting point)
        .from(q('.section-sub'), {
            opacity:0,
            y:-20,
            duration:0.2
        })
        // car image fades in from left side
        .from(q('#delivered-porsche'), {
            opacity:0,
            x:-500,
            duration:0.5
        })
        // subhead fade in from top & porsche image fades in from right (DOES NOT HAVE ANIMATION ON MOBILE)
    }, [])


    return (
        <div id='section-three' ref={el}>
            <div id='delivered-text'>
                <h2 className='section-title'>DELIVERED TO YOUR DOOR.</h2>
                <h3 className='section-sub'>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your door.</h3>

            </div>
            <img id='map-image' src='/Images/delivered-map-lg.png' alt='car-delivery-map' />
            <img id='delivered-porsche' src='/Images/porsche-model.png' alt='sideview-porsche' />
        </div>
    )
}