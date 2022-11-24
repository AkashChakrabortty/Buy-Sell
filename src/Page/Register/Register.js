import React, { useContext } from "react";
import { userInfo } from "../../context/AuthProvider";


const Register = () => {
    const { createUser, updateUser} = useContext(userInfo);
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photoUrl = event.target.photoUrl.value;
    
        createUser(email, password)
          .then((userCredential) => {
            updateUser(name, photoUrl);
          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
          });
      };

  return (
    <div>
   
        <div className="text-center mt-4">
          <form className="col-6 mx-auto"  onSubmit={handleSubmit}>
         
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label htmlFor="floatingInput">Name:</label>
            </div>
            <div className="form-floating">
              <input
                type="url"
                name="photoUrl"
                className="form-control"
                id="floatingInput"
                placeholder="Enter photo url"
              />
              <label htmlFor="floatingInput">Enter photo url:</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check d-flex mt-2">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
               Seller
            </label>
           </div>
            <button className="w-100 btn btn-lg btn-outline-primary" type="submit">
              Register
            </button>
          </form>
        </div>
    </div>
  );
};

export default Register;