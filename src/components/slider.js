import React from "react"
import { useTranslation } from "react-i18next"

function Slider() {
  const { t } = useTranslation()
  return (
   
      <div className="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <div className="carousel-item active">
                <div className="homescroll">
                  <div>
                    <img
                      className="homeresimg"
                      src="./homepics/Group 6.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-5">
                    <div>
                      {" "}
                      <img
                        className="mb-5"
                        src="./homepics/fa-solid_quote-left.png"
                        alt=""
                      />
                    </div>
                    <div className="text-justify mb-5 text-black-50">
                      {t("part45")}
                    </div>
                    <div className="font-weight-bold">{t("part46")}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="carousel-item active">
                <div className="homescroll">
                  <div>
                    <img
                      className="homeresimg"
                      src="./homepics/Group 6.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-5">
                    <div>
                      {" "}
                      <img
                        className="mb-5"
                        src="./homepics/fa-solid_quote-left.png"
                        alt=""
                      />
                    </div>
                    <div className="text-justify mb-5 text-black-50">
                      {t("part45")}
                    </div>
                    <div className="font-weight-bold">{t("part46")}</div>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="item">
              <div className="carousel-item active">
                <div className="homescroll">
                  <div>
                    <img
                      className="homeresimg"
                      src="./homepics/Group 6.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-5">
                    <div>
                      {" "}
                      <img
                        className="mb-5"
                        src="./homepics/fa-solid_quote-left.png"
                        alt=""
                      />
                    </div>
                    <div className="text-justify mb-5 text-black-50">
                      {t("part45")}
                    </div>
                    <div className="font-weight-bold">{t("part46")}</div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
  )
}

export default Slider
