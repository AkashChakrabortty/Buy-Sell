import React, { useContext, useEffect } from 'react';
import { userInfo } from '../../context/AuthProvider';
import AdminLeft from '../AdminLeft/AdminLeft';
import SellerLeft from '../SellerLeft/SellerLeft';

const LeftContainer = () => {
    const {user,role,setRole} = useContext(userInfo);
    const email = user?.email;
   
    useEffect(()=>{
        fetch(`http://localhost:5000/${email}`)
        .then((res) => res.json())
        .then((data) => {
            setRole(data.role)
      });
    },[user])
    return (
        <div className=''>
            {
              role === 'seller' ? <SellerLeft></SellerLeft> : undefined
            }
            {
              role === 'admin' ? <AdminLeft></AdminLeft> : undefined
            }
        </div>
    );
};

export default LeftContainer;