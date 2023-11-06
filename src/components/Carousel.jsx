import React from 'react';
import IMAGES from '../images/image';

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ height: '600px' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button    type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{ height: '100%' }}>
          <div className="carousel-item active" data-bs-interval="10000" style={{ height: '100%' }}>
            <img src={IMAGES.carousel1} className="d-block w-60 mx-auto h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-white">
              <h5>Natural Ashwagandha</h5>
              <p>Fresh and 100 % pure Ashwagandha Powder which is produced with no added preservatives.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000" style={{ height: '100%' }}>
            <img src={IMAGES.carousel2} className="d-block w-60 mx-auto h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-white">
              <h5>Ashwagandha Root</h5>
              <p>How to Take Ashwagandha, Taking Ashwagandha Correctly Bodywsie</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '100%' }}>
            <img src={IMAGES.carousel3} className="d-block w-60 mx-auto h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-white">
              <h5>Ashwaganda (Saatgut)</h5>
              <p>Belongs to the most commonly used Ayurvedic medicinal plants.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
          <span className="carousel-control-prev-icon text-white" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button style={{marginRight:'-50px'}}className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
