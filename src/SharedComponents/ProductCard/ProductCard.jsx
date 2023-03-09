import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
    return (
        <div>
        <div class="card">
        <div className='img col-4 mx-auto m-2 p-2'>
        <img
            src={item.ProductPhotoUrl}
            class="card-img-top"
            alt={item.ProductName}
          />
      </div>
          
          <div class="card-body">
            <h5 class="card-title"><span className='text-info fw-bold'>Model:</span>{item.ProductName}</h5>
            <h5 class="card-title">
            <span className='text-info fw-bold'>Location:</span>{item.SellerLocation}
            </h5>
            <h5 class="card-title">
            <span className='text-info fw-bold'>Original Price:</span>{item.ProductOriginalPrice}
            </h5>
            <h5 class="card-title">
            <span className='text-info fw-bold'>Reseal price:</span>{item.ProductResalePrice}
            </h5>
            <h5 class="card-title">
            <span className='text-info fw-bold'>Year Of Purchase:</span>{item.YearOfPurchase}
            </h5>
            <h5 class="card-title">
            <span className='text-info fw-bold'>Seller name:</span>{item.SellerName}{item.SellerVerify ? (
            <AiOutlineCheck className="text-primary"></AiOutlineCheck>
          ) : undefined}
            </h5>
            <h5 class="card-title"> <span className='text-info fw-bold'>Post Time:</span>{item.PostTime}</h5>
          </div>
          <Link to={`/category/${item.ProductCategory}`}>
            <div className="col-4 mx-auto mb-4">
            <button
              className="w-100 btn btn-outline-info fw-bold"
              type="submit"
            >
              See all
            </button>
            </div>
          </Link>
        </div>
      </div>
    );
};

export default ProductCard;