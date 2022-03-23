import React from 'react'
import { useTranslation } from "react-i18next";
import Slider from "../slider";

function ComprehensiveCare() {
    const { t } = useTranslation();
    return (
        <div className="ml-5 mr-5 blogpage">
            <div className="care-hero">
                <img className="w-100" src="./homepics/blog.png" alt="" />
                <div className="herotext">
                    <h2>{t("comprehensive_care")}</h2>
                    <div>{t("part951")}</div>
                    <div className="webbtn mt-5">{t("part93")}</div>
                </div>
            </div>

            <div>
                <h2 className="cardheading">{t("part961")}</h2>
                <div className="blogsect">
                    <div className="treatment-image"><img src="./homepics/whitening.jpg" alt="" /></div>
                    <div className="p-2 ml-4 treatment-text">
                        <div className="mt-3">
                            <h5>{t("part971")}</h5>
                            <p>{t("part972")}</p>
                        </div>
                        <div className="mt-3">
                            <h5>{t("part974")}</h5>
                            <p>{t("part975")}</p>
                        </div>
                        <div className="mt-3">
                            <h5>{t("part976")}</h5>
                            <p>{t("part977")}</p>
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

export default ComprehensiveCare