import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
const AdvertisedItems = () => {
    const [data,setData] = useState([]);
    useEffect( ()=>{
        axios.get('https://buy-sell-server-eosin.vercel.app/advertiseItems')
        .then(data => setData(data.data)) 
    } ,[])
    return (
      <div className="container">
        {
          data?.length>0 ?  <h2 className="text-center"> Advertisement </h2> : undefined
        }
        <div className="row row-cols-1 row-cols-sm-2">
          {data?.map((item) => {
            return (
              <>
                <div class="card">
                  <img
                    src={item.ProductPhotoUrl}
                    class="card-img-top"
                    alt={item.ProductName}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Model:{item.ProductName}</h5>
                    <h5 class="card-title">Location:{item.SellerLocation}</h5>
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
                      {item.SellerVerify ? (
                        <AiOutlineCheck className="text-primary"></AiOutlineCheck>
                      ) : undefined}
                    </h5>
                    <h5 class="card-title">Post Time:{item.PostTime}</h5>
                    <h5 class="card-title">Sales status:{item.SalesStatus}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        
      </div>
    );
};

export default AdvertisedItems;