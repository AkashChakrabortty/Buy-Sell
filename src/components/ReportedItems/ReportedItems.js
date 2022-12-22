import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ReportedItems = () => {
    const [data, setData] = useState([]);
    const [reFetch, setReFetch] = useState(false);
    const notify = () => toast("Deleted");
    useEffect(() => {
      fetch(`https://buy-sell-server-eosin.vercel.app/report`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, [reFetch]);
    console.log(data);

    const handleDelete = (item)=> {
     console.log(item._id)
     fetch(`https://buy-sell-server-eosin.vercel.app/deleteProduct/${item._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          notify();
          setReFetch(!reFetch);
        });
    }
    return (
        <div className='row row-cols-1 row-cols-sm-2'>
            {
                data?.map(item => {
                    return <>
                  <div class="card">
                   <img
                     src={item.ProductPhotoUrl}
                     class="card-img-top"
                     alt={item.ProductName}
                   />
                   <div class="card-body">
                     <h5 class="card-title">Model:{item.ProductName}</h5>
                     <h5 class="card-title">
                       Location:{item.SellerLocation}
                     </h5>
                     <h5 class="card-title">
                       Original Price:{item.ProductOriginalPrice}
                     </h5>
                     <h5 class="card-title">
                       Reseal price:{item.ProductResalePrice}
                     </h5>
                     <h5 class="card-title">
                       Year Of Purchase:{item.YearOfPurchase}
                     </h5>
                     <h5 class="card-title">
                       Seller name:{item.SellerName}
                     </h5>
                     <h5 class="card-title">Post Time:{item.PostTime}</h5>
                     <h5 class="card-title">Sales status:{item.SalesStatus}</h5>
                   </div>
                   <button
                       className="w-100 btn btn-outline-primary"
                       type="submit" onClick={ ()=> handleDelete(item)}
                     >
                    Delete
                     </button>
                 </div>
                
                </>
                }
                   
                )
            }
        </div>
    );
};

export default ReportedItems;