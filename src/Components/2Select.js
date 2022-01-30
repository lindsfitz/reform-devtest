import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Select() {

    gsap.registerPlugin(ScrollTrigger);



    const vehicles = [
        {
            name: 'LAND ROVER',
            subtitle: '2019 - RANGE ROVER VELAR',
            mpg: '25/29',
            HPstat: '247',
            acceleration: '6.4',
            image: 'range-rover'
        },
        {
            name: 'PORSCHE',
            subtitle: '2019 - 911 CARRERA S',
            mpg: '19/24',
            HPstat: '443',
            acceleration: '3.2',
            image: 'porsche-model'
        }
    ]

    const [vIndex, setvIndex] = useState(0)

    // const toggleCar = () => {
    //     if (vIndex = 0) { setvIndex(1) }
    //     else {setvIndex(0)}
    // }


    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline()
            // yellow bg box slides in from left
            .from(q('.first'), {
                duration: 0.5,
                x: -500,
                delay:1,
                opacity:0,
                scrollTrigger: {
                    trigger: '#vehicle-content',
                    start: 'top center'
                }
            })
            // text content fades in from top
            .from(q('#select-textcontent'), {
                duration: 0.5,
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: '#vehicle-content',
                    start: 'top center'
                },
            })
            // car image fades in from left side
            .from(q('#car-image'), {
                duration:0.4,
                x:-300,
                opacity:0,
                scrollTrigger: {
                    trigger: '#vehicle-content',
                    start: 'top center'
                },
            })
            // vehicle text content fades in -- no position change
            .from(q('#vehicle-content'), {
                duration:0.4,
                opacity:0,
                scrollTrigger: {
                    trigger: '#vehicle-content',
                    start: 'top center'
                }
            })
    }, [])

    useEffect(() => {

        gsap.from(q('#vehicle-content'), {
            duration:1,
            opacity:0
        })
        gsap.from(q('#car-image'), {
            duration:0.5,
            opacity:0,
            x: -100
        })
    }, [vIndex])


    return (
        <div id='section-two' ref={el}>
            <div id='select-textcontent'>
                <h2 className='section-title'>SELECT A VEHICLE FROM YOUR PHONE.</h2>
                <h3 className='section-sub'>Select from a wide range of luxury vehicles in our inventory.  Drive it for a month, trade it the next for something else you have always wanted to own.</h3>
            </div>
            <div style={{ position: 'relative' }}>
                <div id='section-bg-div' className='first'>
                    <div id='arrows'>

                        <button onClick={()=>setvIndex(0)}>
                            <img src='/Images/arrow-left.png' alt='left-arrow' />
                        </button>
                        <button onClick={()=> setvIndex(1)}>
                            <img src='/Images/arrow-right.png' alt='right-arrow' />
                        </button>
                    </div>
                    <div id='vehicle-content'>
                        <div id='car-title'>{vehicles[vIndex].name}</div>
                        <div id='car-sub'>{vehicles[vIndex].subtitle}</div>
                        <div className='stat-boxes'>
                            <img src='/Images/mpg.png' alt='mpg-icon' />
                            <div>{vehicles[vIndex].mpg}</div>
                        </div>
                        <div className='stat-boxes'>
                            <img src='/Images/hpstat.png' alt='graph-icon' />
                            <div>{vehicles[vIndex].HPstat}</div>
                        </div>
                        <div className='stat-boxes'>
                            <img src='/Images/accelerate.png' alt='speedometer-icon' />
                            <div>{vehicles[vIndex].acceleration}</div>
                        </div>
                        {/* div for stats section on diff cars -- same format but different content. OnClick, show content of next index in vehicle object */}
                    </div>
                </div>
                <img id='car-image' src={`/Images/${vehicles[vIndex].image}.png`} alt='example-car' />
            </div>
        </div>


    )
}