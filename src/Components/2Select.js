import { React, useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Select() {

    gsap.registerPlugin(ScrollTrigger);



    const vehicles = {
        first: {
            name: 'LAND ROVER',
            subtitle: '2019 - RANGE ROVER VELAR',
            mpg: '25/29',
            HPstat: '247',
            acceleration: '6.4',
            image: 'range-rover'
        },
        second: {
            name: 'PORSCHE',
            subtitle: '2019 - 911 CARRERA S',
            mpg: '19/24',
            HPstat: '443',
            acceleration: '3.2',
            image: 'porsche-model'
        }
    }

    const [currentCar, setCurrentCar] = useState(vehicles.first)

    const toggleCar = () => {
        setCurrentCar(vehicles.second)

    }

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline()
            .from(q('.first'), {
                duration: 0.5,
                width: 0,
                scrollTrigger: {
                    trigger: q('#section-two'),
                    start: 'top center'
                }

            })



    }, [])


    return (
        <div className='first' id='section-two' ref={el} style={{ marginTop: '300px', marginLeft: '20px' }}>
            <h2 className='section-title'>SELECT A VEHICLE FROM YOUR PHONE.</h2>
            <h3 className='section-sub'>Select from a wide range of luxury vehicles in our inventory.  Drive it for a month, trade it the next for something else you have always wanted to own.</h3>
            <div style={{position:'relative'}}>
                <div id='section-bg-div'>
                    <div id='arrows'>

                        <button>
                            <img src='/Images/arrow-left.png' />
                        </button>
                        <button>
                            <img src='/Images/arrow-right.png' />
                        </button>
                    </div>
                    <div id='vehicle-content'>
                        <div id='car-title'>{currentCar.name}</div>
                        <div id='car-sub'>{currentCar.subtitle}</div>
                        <div className='stat-boxes'>
                            <img src='/Images/mpg.png' />
                            <div>{currentCar.mpg}</div>
                        </div>
                        <div className='stat-boxes'>
                            <img src='/Images/hpstat.png' />
                            <div>{currentCar.HPstat}</div>
                        </div>
                        <div className='stat-boxes'>
                            <img src='/Images/accelerate.png' />
                            <div>{currentCar.acceleration}</div>
                        </div>
                        {/* div for stats section on diff cars -- same format but different content. OnClick, show content of next index in vehicle object */}
                    </div>
                </div>
                <img id='car-image' src={`/Images/${currentCar.image}.png`} />
            </div>
        </div>


    )
}