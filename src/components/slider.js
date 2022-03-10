import React from 'react'
import { useTranslation } from "react-i18next";

function Slider() {
    const { t } = useTranslation();
    return (
            <div id="carouselExampleControls" className="carousel slide zindexx" data-ride="carousel"  data-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="homescroll">
                    <div>
                        <img className="homeresimg" src="./homepics/Group 6.png" alt="" />
                    </div>
                    <div className="ml-5">
                        <div> <img className="mb-5" src="./homepics/fa-solid_quote-left.png" alt="" /></div>
                        <div className="text-justify mb-5 text-black-50">
                        {t("part45")}
                        </div>
                        <div className="font-weight-bold">{t("part46")}</div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="homescroll">
                    <div>
                        <img className="homeresimg" src="./homepics/Group 6.png" alt="" />
                    </div>
                    <div className="ml-5">
                        <div> <img className="mb-5" src="./homepics/fa-solid_quote-left.png" alt="" /></div>
                        <div className="text-justify mb-5 text-black-50">
                        {t("part45")}
                        </div>
                        <div className="font-weight-bold">{t("part46")}</div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="homescroll">
                    <div>
                        <img className="homeresimg" src="./homepics/Group 6.png" alt="" />
                    </div>
                    <div className="ml-5">
                        <div> <img className="mb-5" src="./homepics/fa-solid_quote-left.png" alt="" /></div>
                        <div className="text-justify mb-5 text-black-50">
                        {t("part45")}
                        </div>
                        <div className="font-weight-bold">{t("part46")}</div>
                    </div>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon prebtn" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>

    )
}

export default Slider