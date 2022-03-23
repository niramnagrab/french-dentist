import React from 'react'
import { useTranslation } from "react-i18next";
import Slider from "../slider";

function Invisalign() {
    const { t } = useTranslation();
    return (
        <div className="ml-5 mr-5 blogpage">
            <div className="care-hero">
                <img className="w-100" src="./homepics/blog.png" alt="" />
                <div className="herotext">
                    <h2>{t("porcelain_veneers")}</h2>
                    <div>{t("part934")}</div>
                    <div className="webbtn mt-5">{t("part93")}</div>
                </div>
            </div>

            <div>
                <h2 className="mt-5 mb-5 cardheading">{t("part963")}</h2>
                <div className="blogsect">
                    <img src="./homepics/veneers2.jpg" alt="" />
                    <div className="p-2 ml-4">
                        <div className="mt-3">
                            <h5>{t("part935")}</h5>
                            <p>{t("part936")}</p>
                        </div>
                        <div className="mt-3">
                            <h5>{t("part937")}</h5>
                            <p>{t("part938")}</p>
                        </div>
                        <div className="mt-3">
                            <h5>{t("part939")}</h5>
                            <p>{t("part940")}</p>
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

export default Invisalign