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
            thumb : "/products/invitation 1.jpg",
        },
        {
            
            thumb : "/products/invitation 2.jpg",
        },
        {
           
            thumb : "/products/invitation 3.jpg",
        },
        {
            
            thumb : "/products/invitation 3.jpg",
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
                        {imgloop.slice(0 ,).map((val) => {
                            return (<>
                           
                                <div className="card py-14">
                                    <div className="card-wrapper">
                                        <div className="card-item">
                                        <a data-fancybox="gallery" href={val.thumb}>
                                            <figure className="card-image">
                                               
                                            <img src={val.img && val.thumb} alt="..." />
                                               
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
