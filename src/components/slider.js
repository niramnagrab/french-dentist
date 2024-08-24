import React from "react";
import { useTranslation } from "react-i18next";

function Slider() {
  const { t } = useTranslation();
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-wrap={true}
      data-ride={false}
      data-interval={false}

    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div class="testcontainer">
            <div class="testimonial mr-1">
             


                <div class="testimonial-content">
                  {t("review.p1")}
                </div>
                <div class="stars">
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                </div>
              
              <div class="testimonial-author">
                <img src="./photos/review/1.png" alt="Maria" />
                <div>
                  <span style={{ fontWeight: 'bold', color: 'white' }}> {t("review.a1")}</span>
                  <br />
                  <span style={{ color: 'lightgrey' }}>29 July 2024</span>
                </div>
              </div>
            </div>
            <div class="testimonial mr-1">
           
              <div class="testimonial-content">
                {t("review.p2")}
              </div>
              <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              
              <div class="testimonial-author">
                <img src="./photos/review/2.png" alt="Amy" />
                <div>
                  <span style={{ fontWeight: 'bold', color: 'white' }}> {t("review.a2")}</span>
                  <br />
                  <span style={{ color: 'lightgrey' }}>29 July 2024</span>
                </div>
              </div>
            </div>
            <div class="testimonial mr-1">
              <div class="testimonial-content">
                {t("review.p3")}
              </div>
              <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <div class="testimonial-author">
                <img src="./photos/review/3.png" alt="Maria" />
                <div>
                  <span style={{ fontWeight: 'bold', color: 'white' }}> {t("review.a3")}</span>
                  <br />
                  <span style={{ color: 'lightgrey' }}>29 July 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Slider;
