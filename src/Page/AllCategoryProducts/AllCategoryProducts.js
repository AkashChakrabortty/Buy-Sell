import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../../components/Modal/Modal";

const AllCategoryProducts = () => {
  const notify = () => toast("Report successfuly!");
  const location = useLocation();
  // console.log(location.pathname.split('/')[2])
  const [item,setItem]= useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://server-v-2.vercel.app/category/${location.pathname.split("/")[2]}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(item);

  const handleReport = (productInfo) => {
    fetch("https://server-v-2.vercel.app/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
        console.log(data);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  return (
    <div className="container">
      <h2 className="text-center">{location.pathname.split("/")[2]}</h2>
      {
        data ?   <div className="row mt-3 mb-3">
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
                  </div>
              
                    <button
                      type="submit"
                      className="w-100 btn btn-outline-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                     onClick={()=>setItem(item)}
                    >
                      Book now
                     
                    </button>

                    <button
                      type="submit"
                      className="w-100 btn btn-outline-primary mt-2"                 
                     onClick={()=>handleReport(item)}
                    >
                      Report to Admin
                     
                    </button>
                </div>
              </>
            );
          })}
        </div>
      </div> :  <div className="d-flex justify-content-center">
      <div class="spinner-border" role="status">
       
       </div>
      </div>
      }
    
      <Modal item={item}></Modal>
    </div>
  );
};

export default AllCategoryProducts;
