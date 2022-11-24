import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import LeftContainer from '../../components/LeftContainer/LeftContainer';
import Nav from "../../components/Nav/Nav";
const DashboardLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container d-flex">
        <div className="left">
        <LeftContainer></LeftContainer>
        </div>
        <div className="right">
        <Outlet></Outlet>
        </div>
      </div>
      {/* <div
        class="offcanvas-lg offcanvas-start"
        tabindex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body ">
            <div className="side-nav">
                <Link to='/dashboard'>All Sellers</Link>
                <Link to='/dashboard/allBuyers'>All Buyers</Link>
            </div>
            <div className="outlet"> <Outlet></Outlet></div>
        </div>
      </div> */}
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
