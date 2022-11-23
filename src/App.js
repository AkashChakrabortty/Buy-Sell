import {

  RouterProvider
} from "react-router-dom";
import './App.css';
import Router from './Route/Route';

function App() {

  return (
    <div>
   <RouterProvider router={Router} />
    </div>
  
  )}

export default App;
