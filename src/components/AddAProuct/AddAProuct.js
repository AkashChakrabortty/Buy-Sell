import React, { useContext } from 'react';

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { userInfo } from '../../context/AuthProvider';

const AddAProuct = () => {
    const {user} = useContext(userInfo);
    const notify = () => toast("One product add successfuly!");
    const navigate = useNavigate();

    const handleSubmit =  (event) => {
        event.preventDefault();
        const name= event.target.name.value;
        const price= event.target.price.value;
        const type= event.target.type.value;
        const mobile= event.target.mobile.value;
        const location= event.target.location.value;
        const description= event.target.description.value;
        const year= event.target.year.value;

        const productInfo = {
            ProductName : name,
            ProductPrice : price,
            ProductType : type,
            SellerMobile : mobile,
            SellerLocation : location,
            ProductDescription : description,
            YearOfPurchase : year, 
            SellerName : user.displayName,
            SellerEmail: user.email,
            SellerPhoto: user.photoURL
        }
        fetch('http://localhost:5000/addAProduct',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo),
        })
        .then((res) => res.json())
        .then((data) => {
          notify();
          navigate('/dashboard/myProducts');
         })
         .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
          });
    }
    return (
        <div>
             <div className="form-signin col-8 m-auto">
          <form onSubmit={handleSubmit}>
            <h1 className="h4 mb-3 fw-normal">Add A Prouct</h1>
            <div className="form-floating">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingInput"
                placeholder="Product Name"
              />
              <label htmlFor="floatingInput">Product Name:</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="number"
                name="price"
                className="form-control"
                id="floatingPassword"
                placeholder="price"
              />
              <label htmlFor="floatingPassword">Price</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="type"
                className="form-control"
                id="floatingInput"
                placeholder="Condition type:"
              />
              <label htmlFor="floatingInput">Condition type:</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="text"
                name="mobile"
                className="form-control"
                id="floatingInput"
                placeholder="Mobile number:"
              />
              <label htmlFor="floatingInput">Mobile number:</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="location"
                className="form-control"
                id="floatingInput"
                placeholder="Location:"
              />
              <label htmlFor="floatingInput">Location :</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="text"
                name="description"
                className="form-control"
                id="floatingInput"
                placeholder="Description:"
              />
              <label htmlFor="floatingInput">Description :</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="year"
                className="form-control"
                id="floatingInput"
                placeholder=" Year of purchase:"
              />
              <label htmlFor="floatingInput"> Year of purchase:</label>
            </div>

            <button className="w-100 btn btn-outline-primary my-2" type="submit">
               Submit
            </button>
          </form>
        </div>
        </div>
    );
};

export default AddAProuct;