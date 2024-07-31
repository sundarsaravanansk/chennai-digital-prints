"use client"
import Link from 'next/link';
import React from 'react';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from 'react';

const Page = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: {
                type: "classic",
            },
            Toolbar: {
                display: {
                    right: ["close"],
                },
            },

        });
    }, []);

    const imgloop = [
        {
            img: "/products/invitation 1.jpg",
        },
        {
            img: "/products/sticker 1.jpg"
        },
        {
            img: "/products/flyers 2.jpg"
        },
        {
            img: "/products/visiting.jpg"
        },
        {
            img: "/products/Flyers.jpg"
        },
        {
            img: "/products/Broucher.png"
        },

    ]
    return (
        <>
            <div className='container mx-auto'>

                <div className='flex justify-center items-center uppercase'>
                    <h1 className='text-[55px] font-extrabold'>Products</h1>
                </div>
                <div className='uppercase'>
                    <Link href={'/'} >Back-to-Home</Link>
                </div>
                <div className="containers">
                    <div className='flex flex-wrap justify-between'>
                        {imgloop.map((val) => {
                            return (<>
                                <div className="card py-14">
                                    <div className="card-wrapper">
                                        <div className="card-item">
                                        <a data-fancybox="gallery" href={val.img}>
                                            <figure className="card-image">
                                           
                                                <img src={val.img} alt="..." />
                                               
                                            </figure>
                                         
                                                <span className="card-tags">View More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
