import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(userInfo);
  const [data, setDate] = useState();
  useEffect(() => {
    fetch(
      `https://buy-sell-server-eosin.vercel.app/dashboard/myOrders/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setDate(data));
  }, [user]);

  return (
    <div className="container">
      {data ? (
        <div className="row row-cols-1 row-cols-sm-2 my-2">
          {data?.map((item) => {
            return (
              <>
                <div class="card">
                  <div className="img col-4 mx-auto m-2 p-2">
                    <img
                      src={item.ProductPhoto}
                      class="card-img-top"
                      alt={item.ProductName}
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title"><span className='text-info fw-bold'>Model:</span>{item.ProductName}</h5>
                    <h5 class="card-title"><span className='text-info fw-bold'>Location:</span>{item.ProductResalePrice}</h5>
                  </div>
                  <Link to={`pay/${item._id}`}>
                    <div className="col-4 mx-auto mb-4">
                      <button
                        className="w-100 btn btn-outline-info my-2"
                        type="submit"
                      >
                        Pay
                      </button>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
