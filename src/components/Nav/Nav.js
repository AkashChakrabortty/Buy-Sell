import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";
const Nav = () => {
  const { user, logout } = useContext(userInfo);

  const handleLogout = () => {
    logout();
  };
  return (
    <nav class="navbar bg-white col-12 col-sm-10 mx-auto shadow p-sm-3 ">
      <div class="container-fluid">
        <div className="left col-md-10 col-6">
        <Link to="/" className="text-decoration-none fs-5 text-info fw-bold">
          Buy-Sell
        </Link>
        </div>

        <div class="d-flex justify-content-between right col-md-2 col-6">
        <Link to="/" className="text-decoration-none fs-5 text-black">
          Home
        </Link>
          <Link to="/blogs" className="text-decoration-none fs-5 text-black">
            Blogs
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-decoration-none fs-5 text-black">
                Dashboard
              </Link>
              <Link
                onClick={handleLogout}
                className="text-decoration-none fs-5 text-black"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="text-decoration-none fs-5 text-black">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
