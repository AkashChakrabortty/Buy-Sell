import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AllCategoryProducts = () => {
    const location = useLocation();
    // console.log(location.pathname.split('/')[2])

    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/category/${location.pathname.split('/')[2]}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);
    // console.log(data);
    return (
        <div className="container">
             <h2 className='text-center'>{location.pathname.split('/')[2]}</h2>
        <div className="row mt-3 mb-3">
          <div className="row-cols-2 row-cols-sm-3 d-flex justify-content-evenly">
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
                        </div>
                        <Link>
                          <button
                            className="w-100 btn btn-outline-primary"
                            type="submit"
                          >
                           Book now 
                          </button>
                        </Link>
                      </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default AllCategoryProducts;