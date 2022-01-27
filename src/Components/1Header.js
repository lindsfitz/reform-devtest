import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Header() {


    return (
        <div>
            <div>
                {/* This div is to create space for the yellow background */}
                {/* position absolutely in the background - rough estimate on design for size:
                width 414px; height 340px; left/top: 0 */}
            </div>
            <div>
                {/* div for the company logo -- not sure if this is a font style or an image yet so for the meantime will just be a header */}
                <h1>Eleanor</h1>
            </div>
            <div>
                {/* div for the tagline and the link to the app store */}
                {/* HEADER: 53px size; absolutely positioned; white font color; BebasNeue font */}
                <h1>DRIVE A NEW CAR EVERY MONTH.</h1>
                <h3>Available On the App</h3>
                {/* LINK: 16px; 54px line height; dark grey font color; absolute positioning */}
            </div>
            <div>
                <div>
                    {/* left back car image: background url of image link; absolutely positioned; z-index of -1 using transform property
                    rough estimate from design: width 225px; height 97px */}
                </div>
                <div>
                    {/* front porsche image: bg url; absolute position; width 285px */}
                </div>
                <div>
                    {/* third car img: bg url; absolute position; width 238.91; z index of -1 */}
                </div>
            </div>

        </div>
    )
}