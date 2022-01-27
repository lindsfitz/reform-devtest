import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Trade() {


    return (
        <div>
            <h2 class='section-title'>TRADE IN YOUR CAR EVERY MONTH.</h2>
            <h3 class='section-sub'>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!</h3>
            <div>
                <div>
                    <div>
                        {/* empty div for the yellow background -- absolute positioning left: -6; 307px width */}
                    </div>
                    {/* Porche image -- absolute positioning in the middle of the yellow div */}
                </div>
                {/* Phone image -- positioned on top. Centered on the right edge of the yellow div, vertically centered. Greater z-index than div above */}
            </div>

        </div>
    )
}