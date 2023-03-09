import {

  RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Router from './Route/Route';
function App() {

  return (
    <div className="bg-light">
   <RouterProvider router={Router} />
   <ToastContainer />
    </div>
  
  )}

export default App;
