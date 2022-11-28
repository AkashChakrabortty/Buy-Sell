import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userInfo } from "../../context/AuthProvider";

const AddAProuct = () => {
  const { user } = useContext(userInfo);
  const notify = () => toast("One product add successfuly!");
  const navigate = useNavigate();

  // const [photoURL,setPhotoUrl] =  useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const price1 = event.target.original.value;
    const condition = event.target.condition.value;
    const mobile = event.target.mobile.value;
    const location = event.target.location.value;
    const description = event.target.description.value;
    const year = event.target.year.value;
    const category = event.target.category.value;
    const d = new Date();
    
    const img = event.target.image.files[0];
    const formData = new FormData();
    formData.append('image',img)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_API_KEY}`

    fetch(url,{
      method: 'POST',
      body: formData,
    }).then(res => res.json())
    .then(data => {
      // setPhotoUrl(data.data.display_url)
      // console.log(data.data.display_url)
      // console.log(photoURL)
      const productInfo = {
        ProductName: name,
        ProductResalePrice: price,
        ProductOriginalPrice: price1,
        ProductCondition: condition,
        SellerMobile: mobile,
        SellerLocation: location,
        ProductDescription: description,
        YearOfPurchase: year,
        SellerName: user.displayName,
        SellerEmail: user.email,
        SellerPhoto: user.photoURL,
        ProductCategory: category,
        ProductPhotoUrl: data.data.display_url,
        PostTime: d.toUTCString(),
        SellerVerify: false,
        SalesStatus: 'available'

      };

      // console.log(productInfo)

       fetch("https://server12.vercel.app/addAProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
        navigate("/dashboard/myProducts");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

      
    })

   
  };
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
              required
            />
            <label htmlFor="floatingInput">Product Name:</label>
          </div>
          <div className="form-floating my-2">
            <input
              type="number"
              name="price"
              className="form-control"
              id="floatingPassword"
              placeholder="Resale price"
              required
            />
            <label htmlFor="floatingPassword">Resale Price</label>
          </div>
          <div className="form-floating my-2">
            <input
              type="number"
              name="original"
              className="form-control"
              id="floatingPassword"
              placeholder="Original price"
              required
            />
            <label htmlFor="floatingPassword">Original Price</label>
          </div>
          <div className="input-group mt-2">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              name="condition"
              required
            >
              <option defaultValue>Condition...</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
          <div className="form-floating my-2">
            <input
              type="text"
              name="mobile"
              className="form-control"
              id="floatingInput"
              placeholder="Mobile number:"
              required
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
              required
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
              required
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
              required
            />
            <label htmlFor="floatingInput"> Year of purchase:</label>
          </div>
          <div className="input-group mt-2">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              name="category"
              required
            >
              <option defaultValue>Category...</option>
              <option value="Redmi">Redmi</option>
              <option value="Realme">Realme</option>
              <option value="Oppo">Oppo</option>
            </select>
          </div>
          <div className="my-3">
            <input className="form-control" required name="image" type="file" id="formFile" accept=".jpg"/>
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
