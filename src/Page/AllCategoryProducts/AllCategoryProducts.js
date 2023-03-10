import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../../components/Modal/Modal";

const AllCategoryProducts = () => {
  const notify = () => toast("Report successfuly!");
  const location = useLocation();
  const [item, setItem] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://buy-sell-server-eosin.vercel.app/category/${
        location.pathname.split("/")[2]
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleReport = (productInfo) => {
    fetch("https://buy-sell-server-eosin.vercel.app/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">{location.pathname.split("/")[2]}</h2>
      {data ? (
        <div className="row mt-3 mb-3">
          <div className="row-cols-2 row-cols-sm-3 d-flex justify-content-evenly">
            {data?.map((item) => {
              return (
                <>
                  <div class="card">
                    <div className="img col-4 mx-auto m-2 p-2">
                      <img
                        src={item.ProductPhotoUrl}
                        class="card-img-top"
                        alt={item.ProductName}
                      />
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">
                        <span className="text-info fw-bold">Model:</span>
                        {item.ProductName}
                      </h5>
                      <h5 class="card-title">
                        <span className="text-info fw-bold">Location:</span>
                        {item.SellerLocation}
                      </h5>
                      <h5 class="card-title">
                        <span className="text-info fw-bold">
                          Original Price:
                        </span>
                        {item.ProductOriginalPrice}
                      </h5>
                      <h5 class="card-title">
                        <span className="text-info fw-bold">Reseal price:</span>
                        {item.ProductResalePrice}
                      </h5>
                      <h5 class="card-title">
                        <span className="text-info fw-bold">
                          Year Of Purchase:
                        </span>
                        {item.YearOfPurchase}
                      </h5>
                      <h5 class="card-title">
                        {" "}
                        <span className="text-info fw-bold">Seller name:</span>
                        {item.SellerName}
                      </h5>
                      <h5 class="card-title">
                        {" "}
                        <span className="text-info fw-bold">Post Time:</span>
                        {item.PostTime}
                      </h5>
                    </div>
                    <div className="col-4 mx-auto mb-4">
                      <button
                        type="submit"
                        className="w-100 btn btn-outline-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setItem(item)}
                      >
                        Book now
                      </button>
                    </div>

                    <div className="col-6 mx-auto mb-4">
                      <button
                        type="submit"
                        className="w-100 btn btn-outline-info mt-2"
                        onClick={() => handleReport(item)}
                      >
                        Report to Admin
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div class="spinner-border" role="status"></div>
        </div>
      )}

      <Modal item={item}></Modal>
    </div>
  );
};

export default AllCategoryProducts;
