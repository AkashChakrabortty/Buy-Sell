import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { userInfo } from "../../context/AuthProvider";

const MyProducts = () => {
  const [data, setData] = useState();
  const { user } = useContext(userInfo);
  const [reFetch,setReFetch] = useState(false)
  const notify = (p) => toast(p);
  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/myProducts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [user,reFetch]);

  const handleAdvertise = (item) => {
    console.log(item);
    fetch("http://localhost:5000/dashboard/advertise/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        notify("One product's advertisement successfuly!");
      });
  };

  const handleDelete = (item) => {
    fetch(`http://localhost:5000/dashboard/advertise/${item._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReFetch(!reFetch)
        notify("Delete successfuly!");
      });
  };

  return (
    <div className="container">
      {
        data ?    <div className="mt-3 mb-3">
        <div className="row row-cols-2 row-cols-md-3">
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
                    <h5 class="card-title">Seller name:{item.SellerName}</h5>
                    <h5 class="card-title">Post Time:{item.PostTime}</h5>
                    <h5 class="card-title">Sales status:{item.SalesStatus}</h5>
                  </div>
                  <button
                    className="w-100 btn btn-outline-primary my-2"
                    type="submit"
                    onClick={() => handleAdvertise(item)}
                  >
                    Advertise
                  </button>
                  <button
                    className="w-100 btn btn-outline-primary"
                    type="submit"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div> :   <div className="d-flex justify-content-center">
      <div class="spinner-border" role="status">
       
       </div>
      </div>
      }
   
     
   

      
    </div>
  );
};

export default MyProducts;
