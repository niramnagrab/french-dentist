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
          <div className="homescroll">
            <div className="testimonials-slider">
              <img
                className="homeresimg"
                src="./photos/review/1.png"
                alt=""
              />
            </div>
            <div className="ml-0 ml-md-5 slider-text">
              <div className="qouteImage">
                {" "}
                <img className="mb-5" src="./homepics/quote.png" alt="" />
              </div>
              <div className="normal-p-text mb-5 mb-md-0 quotation-text">
                {t("review.p1")}
              </div>
              <div className="p-text-bold font-weight-bold">{t("review.a1")}</div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="homescroll">
            <div className="testimonials-slider">
              <img
                className="homeresimg"
                src="./photos/review/2.png"
                alt=""
              />
            </div>
            <div className="ml-5 slider-text">
              <div>
                {" "}
                <img className="mb-5" src="./homepics/quote.png" alt="" />
              </div>
              <div className="p-text text-justify mb-5 quotation-text">
                {t("review.p2")}
              </div>
              <div className="p-text-bold font-weight-bold">{t("review.a2")}</div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="homescroll">
            <div className="testimonials-slider">
              <img
                className="homeresimg"
                src="./photos/review/3.png"
                alt=""
              />
            </div>
            <div className="ml-5 slider-text">
              <div>
                {" "}
                <img className="mb-5" src="./homepics/quote.png" alt="" />
              </div>
              <div className="p-text text-justify mb-5 quotation-text">
                {t("review.p3")}
              </div>
              <div className="p-text-bold font-weight-bold">{t("review.a3")}</div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="homescroll">
            <div className="testimonials-slider">
              <img
                  className="homeresimg"
                  src="./photos/review/4.png"
                  alt=""
              />
            </div>
            <div className="ml-5 slider-text">
              <div>
                {" "}
                <img className="mb-5" src="./homepics/quote.png" alt="" />
              </div>
              <div className="p-text text-justify mb-5 quotation-text">
                {t("review.p4")}
              </div>
              <div className="p-text-bold font-weight-bold">{t("review.a4")}</div>
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
