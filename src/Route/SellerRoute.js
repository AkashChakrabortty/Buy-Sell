import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { userInfo } from '../context/AuthProvider';

const SellerRoute = ({children}) => {
    const {user} = useContext(userInfo);
    useEffect(() => {
        fetch(`https://server12.vercel.app/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.role === 'buyer'){
                return children;
            }
            return  <Navigate to="/"></Navigate>;
          });
      }, []);
};

export default SellerRoute;