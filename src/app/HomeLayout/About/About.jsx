"use client";
import Image from 'next/image';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import "./About.css";

// https://live.templately.com/printify-home/
gsap.registerPlugin(ScrollTrigger);
const About = () => {
    useGSAP(() => {
        if (window.innerWidth >= 1024) {
            let ctx = gsap.context(() => {
                // Create a timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#Choose',
                        start: 'top top',
                        end: '+=400%',
                        scrub: true,
                        pin: true,
                    }
                });

                tl.fromTo(
                    "#card1",
                    { opacity: 1, y: "0rem" },  
                    { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                )
                    .fromTo(
                        "#card2",
                        { opacity: 1, y: "0rem" }, 
                        { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                    )
                    .fromTo(
                        "#card3",
                        { opacity: 1, y: "0rem" },  
                        { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                    )
                    .fromTo(
                        "#card4",
                        { opacity: 1, y: "0rem" }, 
                        { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                    );


                // Add animations to the timeline
                // tl.to('#card1', { y: '-5rem', duration: 1 })
                //     .to('#card2', { y: '-5rem', duration: 1 })
                //     .to('#card3', { y: '-5rem', duration: 1 })
                //     .to('#card4', { y: '-5rem', duration: 1 });
            });

            return () => {
                ctx.revert();
            };
        }
    }, []);

    return (
        <>
            <div id='Choose' className='relative h-[100vh] overflow-hidden py-10 block '>
                <div className='h-full    w-full absolute top-0 left-0 -z-10 brightness-50 '>
                    <Image src={"/About/print_mech.jpg"} height={2000} width={2000} className='w-full h-screen object-cover rounded-sm  ' />
                </div>
                <div className='text-white'>
                    <div className='text-[55px] p-5 uppercase text-center font-extrabold  '>
                        <h2>Why Choose Us</h2>
                    </div>
                    <div id='cards' className='w-full grid grid-cols-2 pt-10  '>

                        <div id='card1' className='Card    w-[500px] flex justify-center items-center h-[200px] p-10 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon w-[40%]'>
                                <Image src={"https://img.icons8.com/fluency/48/group.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text '>
                                <h2 className='text-2xl py-5'>Wide Range Of Services</h2>
                                <p>We deliver a variety of printing services for you to choose what you need the most.</p>
                            </div>
                        </div>

                        <div id='card2' className='Card      w-[500px] flex justify-center items-center h-[200px] p-10 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon w-[40%]'>
                                <Image src={"https://img.icons8.com/plasticine/100/rocket.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text '>
                                <h2 className='text-2xl py-5'>Speed</h2>
                                <p>Our team works fast to bring you the best posters, brochures, and other products.</p>
                            </div>
                        </div>

                        <div id='card3' className='Card      w-[500px] flex justify-center items-center h-[200px] p-10 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon w-[40%]'>
                                <Image src={"https://img.icons8.com/dusk/64/low-price.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text '>
                                <h2 className='text-2xl py-5'>Low Prices</h2>
                                <p>Our affordable pricing policy allows you to save a lot on our premium printing services.</p>
                            </div>
                        </div>

                        <div id='card4' className='Card     w-[500px] flex justify-center items-center h-[200px] p-10 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon w-[40%]'>
                                <Image src={"https://img.icons8.com/color/48/guarantee.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text '>
                                <h2 className='text-2xl py-5'>High Quality</h2>
                                <p>We provide high-quality printing solutions, products, and services to all our clients.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default About;
