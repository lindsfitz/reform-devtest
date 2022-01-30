import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer () {

    gsap.registerPlugin(ScrollTrigger);

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    return(
        <div id='footer'>
            <div id='foot-divider'></div>
            <img src='/Images/logo-black.png' alt='eleanor-logo' />
        </div>
    )
}