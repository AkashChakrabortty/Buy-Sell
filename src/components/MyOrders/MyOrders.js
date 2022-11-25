import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../context/AuthProvider';

const MyOrders = () => {
    const{user} = useContext(userInfo)
    const [data,setDate] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
        .then(res => res.json())
        .then(data => setDate(data))
    },[])

    const handlePay = () => {

    }
    return (
        <div className='container'>
           <div className="row row-cols-1 row-cols-sm-2">
              {
                data?.map(item => {
                    return <>
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
                   <Link to={`pay/${item._id}`}>
                   <button
                       className="w-100 btn btn-outline-primary my-2"
                       type="submit" onClick={ ()=> handlePay(item)}
                     >
                    Pay
                     </button>
                   </Link>
                  
                      </div>
                    </>
                })
              }
           </div>
        </div>
    );
};

export default MyOrders;