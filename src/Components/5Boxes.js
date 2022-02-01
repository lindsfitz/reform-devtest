import { React, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Boxes() {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();

    useEffect(() => {
        // fade in and bounce down from top slightly -- staggered from left to right 
        gsap.from('.box-wrapper', {
            scrollTrigger: {
                trigger: '.boxes-container',
                start:'bottom bottom'
            },
            duration:2,
            opacity:0,
            delay:0.5,
            stagger:0.2,
            y:-50,
            ease:'elastic'
        })
    }, [])

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



    return (
        <div style={{marginTop:'400px'}} ref={el}>
            <div className='boxes-container'>
               { boxContent.map((item) => (
                <div className='box-wrapper' key={item.key}>
                    <img className='box-image' src={`/Images/${item.image}`} alt='box-icon' />
                    <h2 className='box-title'>{item.title}</h2>
                    <h3 className='box-content'>{item.content}</h3>
                </div>
                ))}
                
            </div>

        </div>
    )
}