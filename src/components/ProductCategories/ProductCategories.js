import { useQuery } from '@tanstack/react-query';
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductCategories = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/ProductCategories`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
const {data=[]} = useQuery({
  queryKey: ['ProductCategories'],
  queryFn: ()=>  fetch('http://localhost:5000/ProductCategories')
  .then((res) => res.json())
})
  // console.log(data);
  return (
    <div className="container">
      <h2 className="text-center">Product Categories</h2>
      <div className="row mt-3 mb-3 row-cols-2 row-cols-sm-3">
        <div className="redmi">
          <h2>Redmi</h2>
          {data?.map((item) => {
            return (
              <>
                {item.ProductCategory === "Redmi" ? (
                  <div>
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
                          Seller name:{item.SellerName}{item.SellerVerify ? (
                        <AiOutlineCheck className="text-primary"></AiOutlineCheck>
                      ) : undefined}
                        </h5>
                        <h5 class="card-title">Post Time:{item.PostTime}</h5>
                      </div>
                      <Link to={`/category/${item.ProductCategory}`}>
                        <button
                          className="w-100 btn btn-outline-primary"
                          type="submit"
                        >
                          See all
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : undefined}
              </>
            );
          })}
        </div>

        <div className="realme">
          <h2>Realme</h2>
          {data?.map((item) => {
            return (
              <>
                {item.ProductCategory === "Realme" ? (
                  <div>
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
                          Seller name:{item.SellerName}{item.SellerVerify ? (
                        <AiOutlineCheck className="text-primary"></AiOutlineCheck>
                      ) : undefined}
                        </h5>
                        <h5 class="card-title">Post Time:{item.PostTime}</h5>
                      </div>
                      <Link to={`/category/${item.ProductCategory}`}>
                        <button
                          className="w-100 btn btn-outline-primary"
                          type="submit"
                        >
                          See all
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : undefined}
              </>
            );
          })}
        </div>

        <div className="Oppo">
          <h2>Oppo</h2>
          {data?.map((item) => {
            return (
              <>
                {item.ProductCategory === "Oppo" ? (
                  <div>
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
                          Seller name:{item.SellerName}{item.SellerVerify ? (
                        <AiOutlineCheck className="text-primary"></AiOutlineCheck>
                      ) : undefined}
                        </h5>
                        <h5 class="card-title">Post Time:{item.PostTime}</h5>
                      </div>
                      <Link to={`/category/${item.ProductCategory}`}>
                        <button
                          className="w-100 btn btn-outline-primary"
                          type="submit"
                        >
                          See all
                        </button>
                      </Link>
                    </div>
                  </div>
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
