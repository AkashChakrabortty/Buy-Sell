import {
  createBrowserRouter, Outlet
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Blog from "../Page/Blog/Blog";

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
    errorElement: <></> ,
    children: [
        {
          path: "/blogs",
          element: <Blog></Blog>,
        }
    ]
  }
]);
export default Router;