import React from 'react';
import { Link } from 'react-router-dom';

const AdminLeft = () => {
    return (
        <div className='d-flex flex-column'>
         <Link to='/dashboard/allSellers' className='text-decoration-none text-black p-2'>All Sellers</Link>
         <Link to='/dashboard/allBuyers' className='text-decoration-none text-black p-2'> All Buyers</Link>
         <Link to='/dashboard/reportedItems' className='text-decoration-none text-black p-2'>Reported Items</Link>
        </div>
    );
};

export default AdminLeft;