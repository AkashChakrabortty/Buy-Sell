import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
  const [data,setDate] = useState([])
  const [item,setItem] = useState([])
  useEffect(()=> {
      fetch(`https://buy-sell-server-eosin.vercel.app/myOrders/${location.pathname.split('/')[3]}`)
      .then(res => res.json())
      .then(data =>  setItem(data))
  },[])
    return (
        <div className='container'>
           <div className="row row-cols-1 row-cols-sm-2">
           <div class="card">
           <div className='img col-4 mx-auto m-2 p-2'>
           <img
                     src={item.ProductPhoto}
                     class="card-img-top"
                     alt={item.ProductName}
                   />
                  </div>

                 
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