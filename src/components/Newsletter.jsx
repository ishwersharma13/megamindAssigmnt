import React from "react";

const Newsletter = () => {
  return (
    <div style={{marginBottom:'20px'}} className="container mt-1">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card bg-dark text-light border-0">
            <div className="card-body text-center">
              <h4 className="card-title text-light display-6 mb-3">Subscribe to Newsletter</h4>
              <form >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <button type="submit" className="btn btn-outline-success">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
