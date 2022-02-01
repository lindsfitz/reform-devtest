import { React, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Customers() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: "#customer-bg-div",
                start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        }})
        // yellow bg from right bottom corner
        .from(q('#customer-bg-div'), {
            duration:0.5,
            delay:0.2,
            x:-200,
            y:200,
            delay:0.5,
            opacity:0
        })
        // customer image fades in from left
        .from(q('#customer-image'), {
            opacity:0,
            duration:0.3,
            x:-300
        })
        // car image fades in from left
        .from(q('#customer-car'), {
            opacity:0,
            duration:0.5,
            x:-300
        })
        // text content fades in from top
        .from(q('#customer-text'), {
            opacity:0,
            duration:0.5,
            y:-50
        })

    }, [])


    return (
        <div id='section-six' ref={el}>
            <div id='customer-text'>
                <h2 className='section-title'>CUSTOMERS WITH THAT NEW CAR SMELL</h2>
                <h3 className='section-sub'>{`“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”`}</h3>
                <p id='cust-font'>Alex Bateman, Interface Designer</p>
                <div id='divider'>
                    {/* empty div for lil page divider here -- height of 4px and color is #F4F4F5 */}
                </div>
                <div className='app-link'>
                    Available On the App
                    <button><img src='/Images/arrow-right.png' alt='right-arrow'/></button>
                </div>
            </div>
            <div id='customer-bg-div'>
                <img id='customer-image' src='/Images/customer-alex.png' alt='customer-headshot' />
                <img id='customer-car' src='/Images/car1.png' alt='sedan-sideview' />
            </div>

        </div>
    )
}