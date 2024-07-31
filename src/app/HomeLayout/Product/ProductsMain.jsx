import Link from 'next/link';
import React from 'react';

const ProductsMain = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='uppercase text-center pb-10'>
                    <h2 className='text-[55px] font-extrabold'>Products</h2>
                </div>
                <div className="containers">
                    <div className='flex flex-wrap justify-between'>
                        <div className="card py-14">
                            <div className="card-wrapper">
                                <div className="card-item">
                                    <figure className="card-image">
                                        <img src="/products/invitation 1.jpg" alt="..." />
                                    </figure>
                                    <Link className="card-content"  href="/products">
                                        <span className="card-tags">View More</span>


                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card py-14">
                            <div className="card-wrapper">
                                <div className="card-item">
                                    <figure className="card-image">
                                        <img src="/products/sticker 1.jpg" alt="..." />
                                    </figure>
                                    <Link className="card-content"  href="/products">
                                        <span className="card-tags">View More</span>


                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card py-14">
                            <div className="card-wrapper">
                                <div className="card-item">
                                    <figure className="card-image">
                                        <img src="/products/flyers 2.jpg" alt="..." />
                                    </figure>
                                    <Link className="card-content"  href="/products">
                                        <span className="card-tags">View More</span>


                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card py-14">
                            <div className="card-wrapper">
                                <div className="card-item">
                                    <figure className="card-image">
                                        <img src="/products/visiting.jpg" alt="..." />
                                    </figure>
                                    <Link className="card-content"  href="/products">
                                        <span className="card-tags">View More</span>


                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card py-14">
                            <div className="card-wrapper">
                                <div className="card-item">
                                    <figure className="card-image">
                                        <img src="/products/Flyers.jpg" alt="..." />
                                    </figure>
                                    <Link className="card-content"  href="/products">
                                        <span className="card-tags">View More</span>


                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card py-14">
                            <div className="card-wrapper">
                                <div className="card-item">
                                    <figure className="card-image">
                                        <img src="/products/Broucher.png" alt="..." />
                                    </figure>
                                    <Link className="card-content"  href="/products">
                                        <span className="card-tags">View More</span>


                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
}

export default ProductsMain;
