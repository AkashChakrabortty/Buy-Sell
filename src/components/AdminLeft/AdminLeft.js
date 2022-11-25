import React from 'react';
import { Link } from 'react-router-dom';

const AdminLeft = () => {
    return (
        <div className='d-flex flex-column'>
         <Link to='/dashboard/allSellers' className='text-decoration-none'>All Sellers</Link>
         <Link to='/dashboard/allBuyers' className='text-decoration-none'> All Buyers</Link>
         <Link to='/dashboard/reportedItems' className='text-decoration-none'>Reported Items</Link>
        </div>
    );
};

export default AdminLeft;