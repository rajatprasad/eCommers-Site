import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./ProductCarousel.css";

function ProductCarousel() {
  return (
    <div>
      <Carousel className="carousel__size">
        <Carousel.Item interval={1000} className="carousel__item">
          <img
            className="carousel__img"
            src="/images/first.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000} className="carousel__item">
          <img
            className="carousel__img"
            src="/images/second.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000} className="carousel__item">
          <img
            className="carousel__img"
            src="/images/third.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* <h1>TOP RATED</h1>
      <Toprated /> */}
    </div>
  );
}

export default ProductCarousel;
