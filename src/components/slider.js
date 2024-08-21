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
            <div class="testimonial">
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
                <img src="./photos/review/1.png" alt="Maria"/>
                <div>
                  <span style={{ fontWeight: 'bold', color: 'white' }}> {t("review.a1")}</span>
                  <br />
                  <span style={{ color: 'lightgrey' }}>29 July 2024</span>
                </div>

              </div>

            </div>


            <div class="testimonial">

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


            <div class="testimonial">

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
        <div className="carousel-item">
          <div class="testcontainer">
            <div class="testimonial">
              <div class="testimonial-content">
                {t("review.p4")}
              </div>
              <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
              <div class="testimonial-author">
                <img src="./photos/review/4.png" alt="Maria" />
                <div>
                  <span style={{ fontWeight: 'bold', color: 'white' }}> {t("review.a4")}</span>
                  <br />
                  <span style={{ color: 'lightgrey' }}>29 July 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">{t("previous")}</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon prebtn"
          aria-hidden="true"
        ></span>
        <span className="sr-only">{t("next")}</span>
      </a>
    </div>
  );
}

export default Slider;
