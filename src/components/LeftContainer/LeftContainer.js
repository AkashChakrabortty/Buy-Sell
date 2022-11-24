import React from 'react';
import { Link } from 'react-router-dom';

const LeftContainer = () => {
    return (
        <div className='d-flex flex-column'>
         <Link to='/allSellers'>All Sellers</Link>
         <Link to='/allBuyers'> All Buyers</Link>
         <Link to='/reportedItems'>Reported Items</Link>
        </div>
    );
};

export default LeftContainer;