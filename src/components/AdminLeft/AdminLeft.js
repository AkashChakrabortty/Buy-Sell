import React from 'react';
import { Link } from 'react-router-dom';

const AdminLeft = () => {
    return (
        <div className='d-flex flex-column'>
         <Link to='/allSellers' className='text-decoration-none'>All Sellers</Link>
         <Link to='/allBuyers' className='text-decoration-none'> All Buyers</Link>
         <Link to='/reportedItems' className='text-decoration-none'>Reported Items</Link>
        </div>
    );
};

export default AdminLeft;