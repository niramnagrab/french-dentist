import React from 'react'
import { useTranslation } from "react-i18next";
import Slider from "../slider";

function TeethWhitening() {
    const { t } = useTranslation();
    return (
        <div className="ml-5 mr-5 blogpage">
            <div className="care-whitening">
                <img className="w-100" src="./homepics/blog.png" alt="" />
                <div className="herotext">
                    <h2>{t("part20")}</h2>
                    <div>{t("part95")}</div>
                    <div className="webbtn mt-5">{t("part93")}</div>
                </div>
            </div>

            <div>
                <h2 className="mt-5 mb-5 cardheading">{t("part96")}</h2>
                <div className="blogsect">
                    <img src="./homepics/whitening.jpg" alt="" />
                    <div className="p-2 ml-4">
                        <div className="mt-5">
                            <h5>{t("part127")}</h5>
                            <p>{t("part128")}</p>
                        </div>
                        <div className="mt-5">
                            <h5>{t("part129")}</h5>
                            <p>{t("part130")}</p>
                        </div>
                        <div className="mt-5">
                            <h5>{t("part131")}</h5>
                            <p>{t("part132")}</p>
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
            <Slider />

        </div>
    )
}

export default TeethWhitening