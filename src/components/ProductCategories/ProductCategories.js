import { useQuery } from '@tanstack/react-query';
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductCard from '../../SharedComponents/ProductCard/ProductCard';
const ProductCategories = () => {
const {data=[]} = useQuery({
  queryKey: ['ProductCategories'],
  queryFn: ()=>  fetch('https://buy-sell-server-eosin.vercel.app/ProductCategories')
  .then((res) => res.json())
})
  return (
    <div className="container">
      <h2 className="text-center">
      <span className='text-info fw-bold'>Product Categories</span>
       </h2>
      <div className="row mt-3 mb-3 row-cols-1 row-cols-sm-3">
        <div className="redmi">
          <h2 className='text-center'>Redmi</h2>
          {data?.map((item) => {
            return (
              <>
                {item.ProductCategory === "Redmi" ? (
                <ProductCard item={item}/>
                ) : undefined}
              </>
            );
          })}
        </div>

        <div className="realme">
          <h2 className='text-center'>Realme</h2>
          {data?.map((item) => {
            return (
              <>
                {item.ProductCategory === "Realme" ? (
                 <ProductCard item={item}/>
                ) : undefined}
              </>
            );
          })}
        </div>

        <div className="Oppo">
          <h2 className='text-center'>Oppo</h2>
          {data?.map((item) => {
            return (
              <>
                {item.ProductCategory === "Oppo" ? (
                  <ProductCard item={item}/>
                ) : undefined}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
