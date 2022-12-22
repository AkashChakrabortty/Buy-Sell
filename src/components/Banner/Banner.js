import React from 'react';
import img from './77169-buy-and-sell-online.gif';
const Banner = () => {
    return (
        <div className='container'>
            <div className="img text-center">
            <img src={img} alt="404 not found" className='img-fluid'/>
            </div>
            <h2>Welcome! If you are buyer , Here You found second-hand mobile with low cost.If you are seller, here you can sell your second hand mobile. </h2>
        </div>
    );
};

export default Banner;