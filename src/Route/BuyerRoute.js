import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { userInfo } from '../context/AuthProvider';

const BuyerRoute = ({children}) => {
    const {user} = useContext(userInfo);
    const [role,SetRole] = useState('');
    useEffect(() => {
        fetch(`https://server12.vercel.app/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            SetRole(data.role)
            if (role === 'buyer'){
                return children;
            }
            return  <Navigate to="/"></Navigate>;
          });
      }, [role]);

   
};

export default BuyerRoute;