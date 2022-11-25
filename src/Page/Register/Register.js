import React, { useContext, useState } from "react";
import { userInfo } from "../../context/AuthProvider";


const Register = () => {
    const { createUser, updateUser} = useContext(userInfo);
    const [isSeller,setIsSeller] = useState(false);

    const handleRole = () => {
      setIsSeller(!isSeller)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photoUrl = event.target.photoUrl.value;
        const role = isSeller;
        // console.log(role)
        const userdb = {
          email:email,
          password: password,
          name: name,
          photoUrl: photoUrl,
          role: `${isSeller? 'seller' : 'buyer'}`
        }
        createUser(email, password)
          .then((userCredential) => {
            updateUser(name, photoUrl);

            fetch('http://localhost:5000/storeUser', {
              method: 'POST',
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userdb),
            })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
             });
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
                required
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
                required
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
                required
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
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check d-flex mt-2">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={handleRole}/>
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