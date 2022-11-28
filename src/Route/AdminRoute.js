import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userInfo } from '../context/AuthProvider';
const AdminRoute = ({children}) => {
  const {role} = useContext(userInfo);
  if(role === 'admin'){
    return children;
  }
  else{
    return <Navigate to='/' ></Navigate>
  }
};

export default AdminRoute;