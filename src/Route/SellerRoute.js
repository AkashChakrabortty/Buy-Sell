import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userInfo } from '../context/AuthProvider';

const SellerRoute = ({children}) => {
    const {role} = useContext(userInfo);
    if(role === 'seller'){
      return children;
    }
    else{
      return <Navigate to='/' ></Navigate>
    }
};

export default SellerRoute;