import React from "react";
import ProductCardCarousel from './ProductCardCarousel';
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";


const Store = () => {
  //   const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected category
  // const [products, setProducts] = useState(productsDetails); // Assuming productsDetails is the provided product data

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category); // Set the selected category
  // };

  return (
    <>
      <div className="Sections bg-dark text-light">
        <div className="row">
          <div className="col-2">
            <div className="border" style={{marginTop:"60px"}}>
              <label for="PriceRange" className="h6">
                Price Range
              </label>
              <input
                type="range" 
                className="form-range"
                id="PriceRange"
                min="20"
                max="5000"
              />
              <div className="border-top" />
              <label className="h6"> Categories</label>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    category 1 (10)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    category 2 (21)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    category 3 (35)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    category 4 (8)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    category 5 (26)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    category 6 (12)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    category 7 (8)
                  </a>
                </li>
              </ul>
              <div className="border-top" />
              <label className="h6"> Categories</label>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    Brand 1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    Brand 2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    Brand 3
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    Brand 4
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    Brand 5
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    Brand 6
                  </a>
                </li>
              </ul>
              <div className="border-top" />
              <label className="h6"> Customer Review</label>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-light">
                    <AiFillStar /> <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                  <AiFillStar /> <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                  <AiFillStar /> <AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                  <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-light">
                  <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="col-10">
            <p className="h3 text-center"> Latest Products</p>
            <ProductCardCarousel />
            <ProductCardCarousel />
            <ProductCardCarousel />
            <ProductCardCarousel />
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Store;
