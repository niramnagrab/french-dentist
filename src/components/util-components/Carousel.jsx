import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/style.css";

function CarousalComponent({ orderNumber }) {
  // by using order number, will change the image
  return (
    <div className="carouselSection">
      <Carousel fade={true} controls={false}>
        <Carousel.Item>
          <div className="d-Carousel">
            <img
                className="d-block"
                src="./photos/slide/6.jpg"
                alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
          <img
            className="d-block"
            src="./photos/slide/7.jpg"
            alt="Second slide"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
          <img
            className="d-block "
            src="./photos/slide/8.jpg"
            alt="Third slide"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
          <img
              className="d-block "
              src="./photos/slide/9.jpg"
              alt="Third slide"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
          <img
              className="d-block "
              src="./photos/slide/10.jpg"
              alt="Third slide"
          />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarousalComponent;
