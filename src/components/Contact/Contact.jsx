import React from "react";
const Contact = () => {
  return (
    <div className="bg-white shadow-sm p-3 mt-2">
      <h1 className="text-center">
        <span className="text-info fw-bold">Contact with us</span>
      </h1>
      <section>
        <form action="https://formspree.io/f/mbjerkpp" method="POST">
          <div class="container text-center">
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <input
                    id="username"
                    type="text"
                    placeholder="Email"
                    name="Email"
                    className="col-12 form-control"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <input
                    id="username"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    className="col-12 form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a message here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    name="Messages"
                  ></textarea>
                  <label for="floatingTextarea2">Message</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 mx-auto my-4">
            <button
              className="w-100 btn btn-outline-info fw-bold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
