import React from 'react'
import { useTranslation } from "react-i18next";
import Slider from "../slider";

function TeethWhitening() {
    const { t } = useTranslation();
    return (
        <div className="ml-5 mr-5 blogpage">
            <div className="care-hero">
                <img className="w-100" src="./homepics/blog.png" alt="" />
                <div className="herotext">
                    <h2>{t("part21")}</h2>
                    <div>{t("part987")}</div>
                    <div className="webbtn mt-5">{t("part93")}</div>
                </div>
            </div>

            <div>
                <h2 className="mt-5 mb-5 cardheading">{t("part986")}</h2>
                <div className="blogsect">
                    <div className="treatment-image">
                    <img src="./homepics/whitening3.jpg" alt="" /></div>
                    <div className="p-2 ml-4">
                        <div className="mt-3">
                            <h5>{t("part988")}</h5>
                            <p>{t("part989")}</p>
                        </div>
                        <div className="mt-3">
                            <h5>{t("part990")}</h5>
                            <p>{t("part991")}</p>
                        </div>
                        <div className="mt-3">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <h2 className="mt-5">{t("part103")} </h2>
                <div className="blogbtn">
                    <a  className="webbtn mr-5" >{t("part104")}</a>
                    <a  className="webbtn mr-5" >{t("part105")}</a>
                    <a  className="webbtn mr-5" >{t("part106")}</a>
                    <a  className="webbtn mr-5" >{t("part107")}</a>
                </div>
            </div>
            {/* carousal efect */}
            <Slider />

        </div>
    )
}

export default TeethWhitening