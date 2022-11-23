import {
  createBrowserRouter, Outlet
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Blog from "../Page/Blog/Blog";
import ErrorPage from "../Page/ErrorPage/ErrorPage";

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
          path: "/blogs",
          element: <Blog></Blog>,
        }
    ]
  }
]);
export default Router;