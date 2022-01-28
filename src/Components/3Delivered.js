import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Delivered() {


    return (
        <div id='section-three'>
            <div id='delivered-text'>
                <h2 className='section-title'>DELIVERED TO YOUR DOOR.</h2>
                <h3 className='section-sub'>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your door.</h3>

            </div>
            <img id='map-image' src='/Images/delivered-map-lg.png' />
            <img id='delivered-porsche' src='/Images/porsche-model.png' />
        </div>
    )
}