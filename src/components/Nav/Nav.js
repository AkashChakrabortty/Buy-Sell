import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
          <Link to="/blogs" className="text-decoration-none fs-5">
          Blogs
        </Link>
        </div>
    );
};

export default Nav;