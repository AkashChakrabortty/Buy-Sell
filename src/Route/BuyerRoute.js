import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userInfo } from '../context/AuthProvider';

const BuyerRoute = ({children}) => {
  const {role} = useContext(userInfo);
  if(role === 'buyer'){
    return children;
  }
  else{
    return <Navigate to='/' ></Navigate>
  }

   
};

export default BuyerRoute;