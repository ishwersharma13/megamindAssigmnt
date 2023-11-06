import React from "react";
import { Link, Outlet } from "react-router-dom";
import IMAGES from "../images/image";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{height:"90px"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo ms-3" style={{width:"100px", height:"60px"}} src={IMAGES.logo} alt="Logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-1 fs-5 mt-4" >
              <li className="nav-item active me-5">
              <Link to="/" className="nav-item  homenav text-muted text-decoration-none">
              <p className="text-light fw-bold ">Home</p>
                </Link>
              </li>
              <li className="nav-item me-5">
              <Link to="about" className="nav-item me-1 text-muted text-decoration-none">
              <p className="text-light fw-bold ">About</p>
                </Link>
              </li>
              <li className="nav-item me-5">
              <Link to="store" className="nav-item me-1 text-muted text-decoration-none">
              <p className="text-light fw-bold ">Store</p>
                </Link>
              </li>
              <li className="nav-item me-5">
              <Link to="blog" className="nav-item me-1 text-muted text-decoration-none">
              <p className="text-light fw-bold ">Blog </p>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="login" className="nav-item me-1 text-muted text-decoration-none">
                  <p className="text-light fw-bold "><BsFillPersonFill /> Login </p>
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link to="register" className="nav-item me-1 text-muted text-decoration-none">
                   <p className="text-light fw-bold "> <BsPersonPlusFill /> Register </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
