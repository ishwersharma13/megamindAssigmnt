import React from "react";
import { blogDetails } from "../data";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const Blog = () => {
  const chunkSize = 3;
  const chunkedBlogDetails = [];

  for (let i = 0; i < blogDetails.length; i += chunkSize) {
    chunkedBlogDetails.push(blogDetails.slice(i, i + chunkSize));
  }

  return (
    <>
        <div style={{marginTop:'25px', marginBottom:'20px'}} className="blog" >
          <h4 className="text-center fw-bold  display-6 text-light">Latest Blog</h4>
          <div
            id="blogCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {chunkedBlogDetails.map((chunk, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="card-group d-flex justify-content-center">
                    {chunk.map((blog) => (
                      <div
                        key={blog.blogIndex}
                        className="card m-2 bg-dark text-light"
                        style={{ width: "18rem" }}
                      >
                        <img
                          src={blog.img}
                          className="card-img-top"
                          alt="..."
                          style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{blog.title}</h5>
                          <p className="card-subtitle">
                            <small>{blog.description}</small>
                          </p>
                          <p className="card-text">
                            <small className="text-light float-start">
                              <BsFillCalendarCheckFill /> {blog.date}
                            </small>
                            <button className="btn btn-outline-success float-end">
                              Read Post
                            </button>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#blogCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              className="carousel-control-next"
              href="#blogCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    </>
  );
};

export default Blog;
