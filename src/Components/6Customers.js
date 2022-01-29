import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";

export default function Customers() {


    return (
        <div id='section-six'>
            <div id='customer-text'>
                <h2 className='section-title'>CUSTOMERS WITH THAT NEW CAR SMELL</h2>
                <h3 className='section-sub'>{`“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”`}</h3>
                <p id='cust-font'>Alex Bateman, Interface Designer</p>
                <div id='divider'>
                    {/* empty div for lil page divider here -- height of 4px and color is #F4F4F5 */}
                </div>
                <div className='app-link'>
                    Available On the App
                    <button><img src='/Images/arrow-right.png' /></button>
                </div>
            </div>
            <div id='customer-bg-div'>
                <img id='customer-image' src='/Images/customer-alex.png' />
                <img id='customer-car' src='/Images/car1.png' />
            </div>

        </div>
    )
}