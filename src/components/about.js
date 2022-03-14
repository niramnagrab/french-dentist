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
                <h1 className="caretext text-center font-weight-bolder mt-5">{t("part51")}</h1>
                <div className="hrr">
                  <span class="line"></span>
                </div>
                <div className="aboutsect p-text text-justify">
                    <div className=" p-text col-6 text-left">{t("part52")}
                    </div>
                    <div className="p-text col-6 text-left">{t("part53")}
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
                        <img className="locationimages mr-4" src="./homepics/shanghaimart.png" alt="" />
                        <div classname="locationtext">
                            <h3 className="h3-bold">{t("part10")}</h3>
                            <p>
                            {t("part1111")}
                  <br/>
                  {t("part1112")}
                  <br/>
                  {t("part1113")}
                  <br/>
                  {t("part1114")}
                  <br/>
                  {t("part1115")}
                  <br/>
                  {t("part1116")}
                                
                                
                                </p>
                        </div>
                    </div>
                    <div className="aboutsect3">
                        <img className="mr-4" src="./homepics/jimao.png" alt="" />
                        <div classname="locationtext">
                            <h3 className="h3-bold">{t("part14")}</h3>
                            {t("part1411")}
                  <br/>
                  {t("part1412")}
                  <br/>
                  {t("part1413")}
                  <br/>
                  {t("part1414")}
                  <br/>
                  {t("part1415")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
