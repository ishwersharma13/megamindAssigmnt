import React from "react";
import ProductCardCarousel from "./ProductCardCarousel";

const Products = () => {
  return (
    <div className="h-120">

      <div className="mt-5">
        <p className="display-6 text-center fw-bold  text-light bg-dark">New Arrivals</p>
        <ProductCardCarousel />
      </div>
   
      <div className="mt-5">
        <p className="display-6 text-center fw-bold  text-light bg-dark">Special Offers</p>
        <ProductCardCarousel />
      </div>
    </div>
  );
};

export default Products;
