import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function Blog() {
    const { t } = useTranslation();
    return (
        <div className="ml-5 mr-5 blogpage">
            <div>
                <img className="w-100" src="./homepics/blog.png" alt="" />
                <div className="herotext">
                    <h2>{t("part94")}</h2>
                    <div>{t("part95")}</div>
                    <div className="webbtn mt-5">{t("part93")}</div>
                </div>
            </div>

            <div>
                <h2 className="mt-5 mb-5 cardheading">{t("part96")}</h2>
                <div className="blogsect">
                    <img src="./homepics/blogimg.png" alt="" />
                    <div className="p-2 ml-4">
                        <div className="mt-5">
                            <h5>{t("part97")}</h5>
                            <p>{t("part98")}</p>
                        </div>
                        <div className="mt-5">
                            <h5>{t("part99")}</h5>
                            <p>{t("part100")}</p>
                        </div>
                        <div className="mt-5">
                            <h5>{t("part101")}</h5>
                            <p>{t("part102")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="mt-5">{t("part103")} </h2>
                <div className="blogbtn">
                    <a  className="blogbtnsty mr-5" >{t("part104")}</a>
                    <a  className="blogbtnsty mr-5" >{t("part105")}</a>
                    <a  className="blogbtnsty mr-5" >{t("part106")}</a>
                    <a  className="blogbtnsty mr-5" >{t("part107")}</a>
                </div>
            </div>
            {/* carousal efect */}
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

        </div>
    )
}

export default Blog