import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import LeftContainer from '../../components/LeftContainer/LeftContainer';
import Nav from "../../components/Nav/Nav";
const DashboardLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container d-flex gap-5 mt-2">
        <div className="left col-2">
        <LeftContainer></LeftContainer>
        </div>
        <div className="right col-8">
        <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
