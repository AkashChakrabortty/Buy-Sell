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
      <div className="container p-2">
        {
          data?.length>0 ?  <h2 className="text-center fw-bold text-info"> Advertisement </h2> : undefined
        }
        <div className="row row-cols-1 row-cols-sm-3 pt-2">
          {data?.map((item) => {
            return (
              <>
                <div class="card">
                  <div className='img col-4 mx-auto m-2 p-2'>
                  <img
                    src={item.ProductPhotoUrl}
                    class="card-img-top"
                    alt={item.ProductName}
                    style={{height:'25vh'}}
                  />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title"> <span className='text-info fw-bold'>Model:</span>  {item.ProductName}</h5>
                    <h5 class="card-title">
                    <span className='text-info fw-bold'>Location:</span>
                     {item.SellerLocation}</h5>
                    <h5 class="card-title">
                    <span className='text-info fw-bold'>Original Price:</span>
                      {item.ProductOriginalPrice}
                    </h5>
                    <h5 class="card-title">
                    <span className='text-info fw-bold'>Reseal price:</span>
                      {item.ProductResalePrice}
                    </h5>
                    <h5 class="card-title">
                    <span className='text-info fw-bold'>Year Of Purchase:</span>
                     {item.YearOfPurchase}
                    </h5>
                    <h5 class="card-title">
                    <span className='text-info fw-bold'>Seller name:</span>
                     {item.SellerName}
                      {item.SellerVerify ? (
                        <AiOutlineCheck className="text-primary"></AiOutlineCheck>
                      ) : undefined}
                    </h5>
                    <h5 class="card-title">
                    <span className='text-info fw-bold'>Post Time:</span>
                      {item.PostTime}</h5>
                    <h5 class="card-title">
                    <span className='text-info fw-bold'>Sales status:</span>
                     {item.SalesStatus}</h5>
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