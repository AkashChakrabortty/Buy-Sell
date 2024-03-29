import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";

const Login = () => {
    const { googleSignIn , login } = useContext(userInfo);
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false)
    const handleGoogle = () => {
      setLoader(true)
    googleSignIn()
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      const userdb = {
        email: user.email,
        name: user.displayName,
        photoUrl: user.photoURL,
        role: `buyer`,
        verify: false
      }

      fetch('https://buy-sell-server-eosin.vercel.app/storeUser', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userdb),
      })
      .then((res) => res.json())
      .then((data) => {
        navigate('/')
       });
     
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true)
    const email = event.target.email.value;
    const password = event.target.password.value;

    login(email, password)
    .then( ()=> {
      navigate('/')
    } )
  };
  return (
    <div>
      <div className="form-signin col-6 m-auto text-center mt-4 bg-white shadow-sm p-3">
        {loader ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal">Please Log in</h1>
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
                  type="password"
                  name="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button className="w-100 btn btn-outline-info" type="submit">
                Log in
              </button>
            </form>
            <div className="google-create d-flex justify-content-between mt-2">
              <div className="google">
                <Link onClick={handleGoogle}>
                  <FcGoogle className="fs-1"></FcGoogle>
                </Link>
              </div>
              <div className="create">
                <Link to="/register">
                  <button className="btn btn-info">Register</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;