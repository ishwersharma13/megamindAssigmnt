import React from "react";
import IMAGES from "../images/image";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footerSection">
        <footer className="footer mt-auto py-3 bg-dark text-light">
          <div className="row text-center mt-4">
            <div className="col">
              <b>
                <h6> CUSTOMER SERVICE</h6>
              </b>

              <ul className="list-unstyled">
                <li>Help & FAQs</li>
                <li>Order Tracking</li>
                <li>Shipping & Delivery</li>
                <li>Order History</li>
                <li>Advanced Search</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="col">
              {" "}
              <b>
                <h6> ABOUT US</h6>
              </b>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Career</li>
                <li>Our Stores</li>
                <li>Coporate Sales</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col">
              {" "}
              <b>
                <h6> MORE INFORMATION</h6>
              </b>
              <ul className="list-unstyled">
                <li>Affiliates</li>
                <li>Refer a Friend</li>
                <li>Student Beans Offers</li>
                <li>Git Vouchers</li>
              </ul>
            </div>
            <div className="col">
              <h6>Social media</h6>
              <BsFacebook className="me-4" />
              <BsTwitter className="me-4" />
              <BsInstagram className="me-4" />
              <BsYoutube className="me-4" />
              <BsLinkedin className="me-4" />
            </div>
          </div> 
          <div className="mt-auto text-center">         
            <p>© Copyright 2022. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
