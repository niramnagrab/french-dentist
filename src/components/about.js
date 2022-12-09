import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";
import CarouselComponent from "./util-components/Carousel";



function About() {
    const { t } = useTranslation();
    return (
        <div>
            {/* <div className="heroabout">
                <img className="abouthero" src="./homepics/reception.jpg" alt="" />
            </div> */}


<div className="home-hero">
            <div className="hero-img">
            <img src="./homepics/aboutus7.png" alt="blog-photo-dentist"  />
            </div>
            <div className="about-hero-text">
                <p className="title-header-left">A dedicated dental clinic offering <span>a full range of dental services</span></p>
                <p className="subheader-bold-left">Our treatments include cosmetic dentistry, implant dentistry, prosthetic dentistry, pediatric dentistry, periodontic dentistry, orthodontics, general dentistry, and hygiene services. Our dentists and specialists follow international protocols and have extensive dental backgrounds. </p>
                <a href="/contact" className="hero-btn">Call us now</a>
            </div>
        </div>

            {/* <div className="about-text">
                <h1 className="caretext text-center font-weight-bolder mt-5">{t("part51")}</h1>
                <div className="hrr">
                  <span class="line-middle"></span>
                </div>
                <div className="aboutsect p-text text-justify">
                    <div className=" p-text col-6 text-left">{t("part52")}
                    </div>
                    <div className="p-text col-6 text-left">{t("part53")}
                    </div>
                </div>
            </div> */}

<div className="home-team">
            <div className="left">
                <div className="main-img">
                    <img src="./homepics/about10.jpg" alt="blog-photo-dentist"  />
                </div>
            </div>
            <div className="right">
                <p className="title-header-center">{t("part51")}</p>
                <div className='hrr'><span class='line-middle'></span></div>
                <p className="normal-p-text">Born out of the idea of a patient-focused practice, French Dentist has transformed dentistry. Our dental clinic in Shanghai has been designed to make our patients feel relaxed and comfortable throughout their visit. With sophisticated styling, a soothing environment, state-of-the-art tech, and a warm friendly staff, any fear of going to the dentist is put at ease. Each visit and treatment is personalized, clear, and inspiring so we can focus on what matters most - you and your comfort. We are conveniently located in central Shanghai, just 15 minutes away from downtown/ central Shanghai / Former French Concession. Open 6 days a week, we offers unparalleled luxury dentistry in a bespoke dental spa. With state-of-the-art technology and a warm ambient surrounding, our staff are here to help.</p>
                <a href="/" className="team-btn">See Treatments</a>
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

            {/* <div className="aboutclinicimage">
                <img className="imgwidabout" src="./homepics/medicalchair.jpg" alt="" />
            </div> */}


{/* <div className="aboutsect2">
                <img className="imgwid" src="./homepics/reception1.jpg" alt="" />
                <img className="ml-2 imgwid" src="./homepics/reception2.jpg" alt="" />
            </div> */}
         <div className="carouselContainer">
        <CarouselComponent />
        <CarouselComponent orderNumber={2} />
      </div>

            <div className="aboutsect1 patient">
                <div>
                    {t("part56")}
                </div>
                <div className='hrr'><span className='line'></span></div>
                <div>{t("part57")}</div>
            </div>


            <div className="pb-5">
                <div className="title-header-center mt-5 ">{t("part58")}</div>
                <div><span class='line-middle'></span></div>
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
