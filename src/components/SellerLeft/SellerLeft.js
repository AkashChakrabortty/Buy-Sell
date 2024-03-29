import React from 'react';
import { Link } from 'react-router-dom';

const SellerLeft = () => {
    return (
        <div className='d-flex flex-column'>
           <Link to='/dashboard/addAProducts' className='text-decoration-none p-2 text-black'>Add A product</Link>
           <Link to='/dashboard/myProducts' className='text-decoration-none p-2 text-black'>My Products</Link>
        </div>
    );
};

export default SellerLeft;