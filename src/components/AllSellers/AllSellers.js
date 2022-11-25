import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { toast } from "react-toastify";

const AllSellers = () => {
  const [users, setUsers] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const notify = (d) => toast(d);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [reFetch]);
  const handleDelete = (user) => {
    console.log(user.email);
    fetch(`http://localhost:5000/deleteUser/${user.email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notify("Delete successfuly!");
      });
  };

  const handlVerify = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/verifyUser/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReFetch(!reFetch)
        notify("Verify successfuly!");
      });
  };
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2">
        {users?.map((user) => {
          return (
            <>
              {user.role === "seller" ? (
                <div class="card">
                  <img
                    src={user.photoUrl}
                    class="card-img-top"
                    alt={user.name}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Name:{user.name}
                      {user.verify ? (
                        <AiOutlineCheck className="text-primary"></AiOutlineCheck>
                      ) : undefined}
                    </h5>
                    <h5 class="card-title">Email:{user.email}</h5>
                  </div>
                  {user.verify ? undefined : (
                    <button
                      className="w-100 btn btn-outline-primary mb-2"
                      type="submit"
                      onClick={() => handlVerify(user)}
                    >
                      Verify
                    </button>
                  )}

                  <button
                    className="w-100 btn btn-outline-primary"
                    type="submit"
                    onClick={() => handleDelete(user)}
                  >
                    Delete
                  </button>
                </div>
              ) : undefined}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllSellers;
