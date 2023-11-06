import React from "react";
import Homepage from "./Homepage";
import Products from "./Products";
import Information from "./Information";

const MainPage = () => {
  return (
    <div className="bg-dark text-light">
      <Homepage />
      <Products />
      <Information />


    </div>
  );
};

export default MainPage;
