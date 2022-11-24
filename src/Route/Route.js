import {
  createBrowserRouter, Outlet
} from "react-router-dom";
import AllBuyers from '../components/AllBuyers/AllBuyers';
import AllSellers from '../components/AllSellers/AllSellers';
import Footer from "../components/Footer/Footer";
import MyProducts from '../components/MyProducts/MyProducts';
import Nav from "../components/Nav/Nav";
import ReportedItems from '../components/ReportedItems/ReportedItems';
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Blog from "../Page/Blog/Blog";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from '../Page/Login/Login';
import Register from "../Page/Register/Register";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
    {
      path: "/dashboard",
      element: <AllSellers></AllSellers>,
    },
    {
      path: "/dashboard/allBuyers",
      element: <AllBuyers></AllBuyers>
    },
    {
      path: "/dashboard/reportedItems",
      element: <ReportedItems></ReportedItems>
    },
    {
      path: "/dashboard/myProducts",
      element: <MyProducts></MyProducts>
    }
    ]
  },
]);
export default Router;