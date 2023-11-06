import React from "react";
import Carousel from "./Carousel";
import ValuePropos from "./ValuePropos";

const Homepage = () => {
  return (
    <>
      <div className="section bg-dark" style={{overflow:'hidden',height: '100%'}}>
        <Carousel />
        <ValuePropos />
      </div>
    </>
  );
};

export default Homepage;
