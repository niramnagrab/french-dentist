import Carousel from "react-bootstrap/Carousel";

function CarousalComponent({ orderNumber }) {
  // by using order number, will change the image
  return (
    <div className="carouselSection">
      <Carousel fade={true} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1581584731241-c134a1afe9a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRlbnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1590424693420-634a0b0b782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRlbnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRlbnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarousalComponent;
