import React from 'react';
import { Link } from 'react-router-dom';

const BuyerLeft = () => {
    return (
        <div>
              <Link to='/dashboard/myOrders' className='text-decoration-none'>My orders</Link>
        </div>
    );
};

export default BuyerLeft;