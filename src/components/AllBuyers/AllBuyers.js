import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllBuyers = () => {
  const [users, setUsers] = useState([]);
  const notify = () => toast("Delete successfuly!");
  useEffect(() => {
    fetch("https://buy-sell-server-eosin.vercel.app/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (user) => {
    fetch(`https://buy-sell-server-eosin.vercel.app/deleteUser/${user.email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
      });
  };
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2">
        {users?.map((user) => {
          return (
            <>
              {user.role === "buyer" ? (
                <div class="card">
                  <div className="img col-4 mx-auto m-2 p-2">
                    <img
                      src={user.photoUrl}
                      class="card-img-top"
                      alt={user.name}
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Name:{user.name}</h5>
                    <h5 class="card-title">Email:{user.email}</h5>
                  </div>

                  <div className="col-4 mx-auto mb-4">
                    <button
                      className="w-100 btn btn-outline-info"
                      type="submit"
                      onClick={() => handleDelete(user)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : undefined}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllBuyers;
