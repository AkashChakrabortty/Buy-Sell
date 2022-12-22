import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
//   console.log(location.pathname.split('/')[3])

  const [data,setDate] = useState([])
  const [item,setItem] = useState([])
  useEffect(()=> {
      fetch(`http://localhost:5000/myOrders/${location.pathname.split('/')[3]}`)
      .then(res => res.json())
      .then(data =>  setItem(data))
  },[])
    return (
        <div className='container'>
           <div className="row row-cols-1 row-cols-sm-2">
           <div class="card">
                   <img
                     src={item.ProductPhoto}
                     class="card-img-top"
                     alt={item.ProductName}
                   />
                   <div class="card-body">
                     <h5 class="card-title">Model:{item.ProductName}</h5>
                     <h5 class="card-title">
                       price:{item.ProductResalePrice}
                     </h5>
                    
                   </div>
                  
                  
                      </div>
           </div>
        </div>
    );
};

export default Payment;