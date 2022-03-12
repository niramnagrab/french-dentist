import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";
import Video from '../home3.mp4'
import Slider from "./slider";

function Home() {
    const { t } = useTranslation();
    return (
        <div >
            <div className="homeherosection">
                <div className='homevada zindexx'>
                    <video className="heroimg" autoPlay muted loop>
                        <source src={Video} type="video/mp4"/>
                    </video>
                </div>

                <div className="hometxt1 text-justify zindexx">
                    <div className="caretext maintxthome font-weight-bold">{t("part24")}<br></br> {t("part25")}</div>
                    <h5 className="subhead mt-2">{t("part26")}</h5>
                    <div className="webbtn">{t("part30")} </div>
                </div>
            </div>

            <div className="section1 zindexx">
                <div className="secttext">
                    <div className="caretext paddinghome text-center font-weight-bolder ml-5">{t("part27")}</div>
        
                <span class='line'></span>
                    <p className="text-justify">
                        {t("part28")}
                        <br></br>
                        <br />
                        {t("part29")} 
                    </p>
                    <div className="webbtn ">{t("part30")} </div>
                </div>
                <div>
                    <img className="homeimg2" src="./homepics/section.png" alt="" />
                    <img className="homeimg3" src="./homepics/section1.png" alt="" />
                </div>
            </div>

            <div className="homeservices">
            <div className="caretext paddingtophome text-center font-weight-bolder mt-5 ">{t("part31")}</div>
                <span class='line'></span>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/checkup.png" alt="" /></div>
                    <div className="hometxtsect ml-5">
                        <div className="font-weight-bolder mb-3">{t("part32")}</div>
                        <div>{t("part33")} </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part34")}</div>
                        <div>{t("part35")}  </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/veneer.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part36")}</div>
                        <div>{t("part37")}</div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/tooth-whitening.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part38")}</div>
                        <div>{t("part39")}  </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/braces.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part40")}</div>
                        <div>{t("part41")}</div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part42")}</div>
                        <div>{t("part43")}</div>
                    </div>
                </div>
            </div>

            <div className='zindexx pt-5 pb-3'>
            <div className="caretext text-center font-weight-bolder mt-5 ">{t("part44")}</div>
                <span class='line'></span>

            </div>

            {/* carousal efect */}
            <Slider />

            <div className="homebilling">
            <div className="caretext text-center font-weight-bolder mt-5 ">{t("part47")}</div>
                <span class='line'></span>
                <h3 className="intro-text" >{t("billing_facility_intro_text")}</h3>
                <div className="billingsect mt-5">
                    <div className="billingsect-card">
                        <img src="./homepics/banda.png" alt="" />
                        <div className="font-weight-bolder mt-3">{t("part48")}</div>
                        <div>{t("part481")}</div>
                    </div>
                    <div className="billingsect-card">
                        <img src="./homepics/carbon_security.png" alt="" />
                        <div className="font-weight-bolder mt-3">{t("part49")}</div>
                        <div>{t("part491")}</div>
                    </div> 
                    <div className="billingsect-card">
                        <img src="./homepics/emoji.png" alt="" />
                        <div className="font-weight-bolder mt-3">{t("part50")}</div>
                        <div>{t("part501")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
