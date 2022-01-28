import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Delivered() {


    return (
        <div style={{ position:'relative' }}>
            <div style={{ margin: '300px 20px 0 20px' }}>
                <h2 className='section-title'>DELIVERED TO YOUR DOOR.</h2>
                <h3 className='section-sub'>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your door.</h3>

            </div>
            <img style={{ position: 'absolute', top:'240px', margin:0 }} src='/Images/delivered-map.png' />
        </div>
    )
}