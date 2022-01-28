import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Boxes() {

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