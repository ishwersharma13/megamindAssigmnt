import React from "react";
import Blog from "./Blog";
import Newsletter from "./Newsletter";

const Information = () => {
  return (
    <>
      <section className="bg-dark" style={{overflow:"hidden"}}>
        <Blog />
        <Newsletter />
      </section>
    </>
  )
};

export default Information;
