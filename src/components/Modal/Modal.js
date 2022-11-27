import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { userInfo } from '../../context/AuthProvider';

const Modal = ({item}) => {
    const {user} = useContext(userInfo)
    const notify = ()=> toast('Booking done')
    const handleSubmit = (event)=> {
        event.preventDefault();
        // console.log(item)
        const location = event.target.location.value;
        const mobile = event.target.mobile.value;
       
        const bookingInfo = {
            ProductPreviousId: item._id,
            BuyerName: user.displayName,
            BuyerEmail: user.email,
            ProductName: item.ProductName,
            ProductResalePrice: item.ProductResalePrice,
            BuyerMobile: mobile ,
            MeetingLocation: location,
            ProductPhoto: item.ProductPhotoUrl
        }
   
        fetch("https://server12.vercel.app/booking", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(bookingInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              notify();
              event.target.reset()
            })
            .catch((error) => {
              const errorMessage = error.message;
              alert(errorMessage);
            });
       
    }
    return (
        <div>
         
              <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <form onSubmit={handleSubmit}>
                          <div class="modal-body">

                        

                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder={user?.displayName}
                                disabled
                              />
                              <label htmlFor="floatingInput">
                              {user?.displayName}
                              </label>
                            </div>

                            <div className="form-floating my-2">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder={user?.email}
                                disabled
                              />
                              <label htmlFor="floatingInput">
                              {user?.email}
                              </label>
                            </div>

                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder={item.ProductName}
                                disabled
                              />
                              <label htmlFor="floatingInput">
                              {item.ProductName}
                              </label>
                            </div>

                            <div className="form-floating my-2">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder={item.ProductResalePrice}
                                disabled
                              />
                              <label htmlFor="floatingInput">
                              {item.ProductResalePrice}
                              </label>
                            </div>

                            <div className="form-floating">
                              <input
                                type="number"
                                name='mobile'
                                className="form-control"
                                id="floatingInput"
                                placeholder='Phone number:'
                               required
                              />
                              <label htmlFor="floatingInput">
                              Phone number:
                              </label>
                            </div>

                            <div className="form-floating mt-2">
                              <input
                                type="text"
                                name='location'
                                className="form-control"
                                id="floatingInput"
                                placeholder='Meeting location:'
                                required
                              />
                              <label htmlFor="floatingInput">
                              Meeting location:
                              </label>
                            </div>


                          </div>
                         <div className="modal-footer">
                         <button type="submit" class="btn btn-primary">
                              Submit
                            </button>
                         </div>
                          </form>
                        </div>

                      </div>
              </div>
        </div>
    );
};

export default Modal;