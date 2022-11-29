import React, { useContext, useEffect } from 'react';
import { userInfo } from '../../context/AuthProvider';
import AdminLeft from '../AdminLeft/AdminLeft';
import BuyerLeft from '../BuyerLeft/BuyerLeft';
import SellerLeft from '../SellerLeft/SellerLeft';

const LeftContainer = () => {
    const {user,role,setRole} = useContext(userInfo);
    const email = user?.email;
   
    useEffect(()=>{
        fetch(`https://server-v-2.vercel.app/${email}`)
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
             {
              role === 'buyer' ? <BuyerLeft></BuyerLeft>: undefined
            }
        </div>
    );
};

export default LeftContainer;