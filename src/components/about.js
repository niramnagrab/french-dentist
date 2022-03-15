import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="heroabout">
                <img className="abouthero" src="./homepics/reception.jpg" alt="" />
            </div>

            <div className="about-text">
                <h1 className="font-weight-bold ps-3 mt-5 ml-4">{t("part51")}</h1>
                <span class="line"></span>

                <div className="aboutsect text-justify d-flex flex-md-row flex-column font-weight-bolder">
                    <div className="col-md-6 col-12">{t("part52")}
                    </div>
                    <div className="col-md-6 col-12">{t("part53")}
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

            <div className="aboutclinicimage">
                <img className="imgwidabout" src="./homepics/medicalchair.jpg" alt="" />
            </div>

            <div className="aboutsect1">
                <div>
                    {t("part56")}
                </div>
                <div className='hrr'><span className='line'></span></div>
                <div>{t("part57")}</div>
            </div>

            <div className="aboutsect2">
                <img className="imgwid" src="./homepics/reception1.jpg" alt="" />
                <img className="ml-2 imgwid" src="./homepics/reception2.jpg" alt="" />
            </div>

            <div className="pb-5">
                <div className="caretext text-center font-weight-bolder mt-5 ">{t("part58")}</div>
                <div><span class='line'></span></div>
                <div className="sect4">
                    <div className="aboutsect3 mr-5">
                        <img className="mr-4" src="./homepics/jimao.png" alt="" />
                        <div>
                            <h3>{t("part59")}</h3>
                            <p>
                            {t("part1111")}
                  <br/>
                  {t("part1112")}
                  <br/>
                  {t("part1113")}
                  <br/>
                  {t("part1114")}
                                
                                
                                </p>
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
