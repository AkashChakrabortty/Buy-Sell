import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../context/AuthProvider';
const Nav = () => {
  const {user,logout} = useContext(userInfo);

  const handleLogout = () => {
    logout()
  };
    return (
        <div className='container d-flex justify-content-evenly'>
         
        <Link to="/" className="text-decoration-none fs-5">
          Home
        </Link>
        <Link to="/blogs" className="text-decoration-none fs-5">
          Blogs
        </Link>
        {
            user? <>
             <Link to="/dashboard" className="text-decoration-none fs-5">
        Dashboard
        </Link>
        <Link onClick={handleLogout} className="text-decoration-none fs-5">
            Logout
          </Link>
            </>  : <Link to="/login" className="text-decoration-none fs-5">
            Login
          </Link>
          }
          
       
        </div>
    );
};

export default Nav;