import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Boxes() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    const boxContent = [
        {
            image: 'simple.png',
            title: 'SIMPLE MONTHLY PRICING',
            content:'Pick your plan, pay the monthly price.  Thats it.  No hidden fees!',
            key:1
        },
        {
            image: 'vehicle.png',
            title: 'VEHICLE INSURANCE INCLUDED',
            content:"That’s right, you’re covered.  All Eleanor plans include insurance coverage.",
            key:2
        },
        {
            image: 'maintenance.png',
            title: 'MAINTENANCE IS COVERED',
            content: "Leave it us.  Don’t worry about maintaining your vehicle.  Eleanor covers that as well.",
            key:3
        }
    ]


    // for the GSAP animation here -- using FROM boxes slide down along y axis (approx 30px ish I would guess)
    // opacity - 0; stagger: 0.2. Apply one animation for all three boxes using the class name 

    // EXAMPLE :

    // gsap.from(".box", {
    //     duration: 2,
    //     scale: 0.5, 
    //     opacity: 0, 
    //     delay: 0.5, 
    //     stagger: 0.2,
    //     ease: "elastic", 
    //     force3D: true
    //   });


    return (
        <div style={{marginTop:'700px'}}>
            <div className='boxes-container'>
                
               { boxContent.map((item) => (
                <div className='box-wrapper' key={item.key}>
                    <img className='box-image' src={`/Images/${item.image}`} />
                    <h2 className='box-title'>{item.title}</h2>
                    <h3 className='box-content'>{item.content}</h3>
                </div>
                ))}
                
            </div>

        </div>
    )
}