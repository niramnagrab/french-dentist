import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <img className="abouthero" src="./homepics/abouthero.png" alt="" />
            </div>

            <div className="about-text">
                <h1 className="font-weight-bold mt-5 ml-4">{t("part51")}</h1>
                <div className="aboutsect text-justify font-weight-bolder">
                    <div className="col-6">{t("part52")}
                    </div>
                    <div className="col-6">{t("part53")}
                    </div>
                </div>
            </div>

            <div className="aboutsect1">
                <div>{t("part54")}
                </div>
                <div className='hrr'><span class='line'></span></div>
                <div>
                {t("part55")}
                </div>
            </div>

            <div>
                <img className="imgwidabout" src="./homepics/aboutimg.png" alt="" />
            </div>

            <div className="aboutsect1">
                <div>
                    {t("part56")}
                </div>
                <div className='hrr'><span className='line'></span></div>
                <div>{t("part57")}</div>
            </div>

            <div className="aboutsect2">
                <img className="imgwid" src="./homepics/aboutimg1.png" alt="" />
                <img className="ml-2 imgwid" src="./homepics/aboutimg2.png" alt="" />
            </div>

            <div className="mb-5">
                <div className="caretext text-center font-weight-bolder mt-5 ">{t("part58")}</div>
                <div><span class='line'></span></div>
                <div className="sect4">
                    <div className="aboutsect3 mr-5">
                        <img className="mr-4" src="./homepics/jimao.png" alt="" />
                        <div>
                            <h3>{t("part59")}</h3>
                            <p>{t("part60")}</p>
                        </div>
                    </div>
                    <div className="aboutsect3">
                        <img className="mr-4" src="./homepics/shanghaimart.png" alt="" />
                        <div>
                            <h3>{t("part59")}</h3>
                            <p>{t("part60")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
