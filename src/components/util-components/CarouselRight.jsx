import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/style.css";

function CarousalRightComponent({ orderNumber }) {
  // by using order number, will change the image
  return (
    <div className="carouselSection">
      <Carousel fade={true} controls={false}>
        <Carousel.Item>
          <div className="d-Carousel">
            <img
                className="d-block"
                src="./photos/slide/1.jpg"
                alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
            <img
                className="d-block"
                src="./photos/slide/2.jpg"
                alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
            <img
                className="d-block "
                src="./photos/slide/3.jpg"
                alt="Third slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
            <img
                className="d-block "
                src="./photos/slide/4.jpg"
                alt="Third slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-Carousel">
            <img
                className="d-block "
                src="./photos/slide/5.jpg"
                alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarousalRightComponent;
