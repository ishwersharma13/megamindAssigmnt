import React from "react";
import IMAGES from "../images/image";

const ValuePropos = () => {
  return (
    <div className="bg-dark p-3">
      <div className="d-flex flex-row justify-content-around align-items-center bd-highlight mb-0">
        <div className="p-1 bd-highlight">
          <div className="text-light">
            <div className="d-flex align-items-center">
              <img
                src={IMAGES.truck}
                alt="icon"
                style={{ height: "50px", width: "50px" }}
                className=" me-3"
              />
              <div>
                <h5>Free Shipping (Above INR 2000) </h5>
               
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 bd-highlight">
          <div className="text-light">
            <div className="d-flex align-items-center">
              <img
                src={IMAGES.money}
                alt="icon"
                style={{ height: "50px", width: "50px" }}
                className=" me-3"
              />
              <div>
                <h5>Money Back Guarantee 100%</h5>
            
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 bd-highlight">
          <div className="text-light">
            <div className="d-flex align-items-center">
              <img
                src={IMAGES.support}
                alt="icon"
                style={{ height: "50px", width: "50px" }}
                className=" me-3"
              />
              <div>
                <h5>Online Support 24/7</h5>
                
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 bd-highlight">
          <div className="text-light">
            <div className="d-flex align-items-center">
              <img
                src={IMAGES.payment}
                alt="icon"
                style={{ height: "50px", width: "50px" }}
                className=" me-3"
              />
              <div>
                <h5>Secure Payment</h5>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropos;
