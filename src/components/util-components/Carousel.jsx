import Carousel from "react-bootstrap/Carousel";
import "../../styles/style.css";

function CarousalComponent({ orderNumber }) {
  // by using order number, will change the image
  return (
    <div className="carouselSection">
      <Carousel fade={true} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="./homepics/multiple-dentist.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="./homepics/teeth.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="./homepics/dentist-treating.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarousalComponent;
