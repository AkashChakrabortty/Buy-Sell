import React from 'react';
import img from './77169-buy-and-sell-online.gif';
const Banner = () => {
    return (
        <div className='container bg-white shadow-sm p-3'>
            <div className='text col-10 col-md-8 mx-auto'>
            <h2 className='text-center'>Hello visitors!</h2>
            <h2 className='text-center'>Welcome to the second-hand product <span className='text-info fw-bold'>Buy-Sell</span> market place.</h2>
            </div>
          
            <div className="img text-center col-8 col-md-4 mx-auto">
            <img src={img} alt="404 not found" className='img-fluid'/>
            </div>
        </div>
    );
};

export default Banner;