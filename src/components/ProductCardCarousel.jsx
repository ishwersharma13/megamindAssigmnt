import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaRegStar, FaCartPlus } from 'react-icons/fa';
import { productsDetails } from '../data';

const ProductCardCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='bg-dark'>
    <div className='product-carousel '>
    <Carousel responsive={responsive}>
      {productsDetails.map((product) => (
        <div key={product.prodIndex} className="card bg-dark text-light " style={{ width: '13rem' }}>
          <img style={{height:'160px' ,width:'160px',margin:'auto'}} className="card-img-top" src={product.prodImage} alt="product" />
          <div className="card-body">
            <p className="card-subtitle text-light">
              <small>{product.category}</small>
            </p>
            <p className="card-title mb-1">{product.prodName}</p>
            <p className="card-text">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />{' '}
            </p>
            <div className="container">
              <div className="row">
                <p className="card-text col">
                  <s>
                    <small>{product.oldPrice}</small>
                  </s>
                </p>
                <p className="card-text col">
                  <b>{product.newPrice}</b>
                </p>
                <p className="btn btn-outline-light col">
                  <FaCartPlus />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
    </div>
    </div>
  );
};

export default ProductCardCarousel;
