import React from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import CarouselComponent from "./util-components/Carousel";

import CarousalRightComponent from "./util-components/CarouselRight";

import { Box, useMediaQuery } from "@material-ui/core";

function About() {
  const { t } = useTranslation();

  const greaterThen1400 = useMediaQuery('(min-width:1400px)')
  return (
    <div>
      <div className="bloghero" style={{padding: "0 5%"}}>
        <div className="blogherotext about">
          <h1 className="title-header-left">
            {t("abouthero")}
          </h1>
          <p className="subheader-bold-left">
            {t("abouttext")}
          </p>
          <p className="mt-5">
            <a href="tel:+8602151699696" className="team-btn" >
              {t("aboutbutton")}
            </a>
          </p>
        </div>
        <div className="blogheroimage about">
          <img src="./homepics/aboutus7.png" alt="blog-photo-dentist" />
        </div>
      </div>

      <div className="home-team">
        <div className="left">
          <div className="main-img">
            <img src="./homepics/about10.jpg" alt="blog-photo-dentist" />
          </div>
        </div>
        <div className="right">
          <p className="title-header-center">{t("part51")}</p>
          <div className="hrr hrr2">
            <span class="line-middle"></span>
          </div>
          <p className="normal-p-text">{t("aboutintro1")}

          </p>
          <p className="normal-p-text">
         {t("aboutintro2")}
          </p>
          <div className="seeTreatbtn">
            <a href="/care" className="team-btn">
              {t("abouttreatments")}
            </a>
          </div>
        </div>
      </div>

      <div className="aboutsect1">
        <div className="doctor-quotation">
          <div>{t("part54")}</div>
          <div className="hrr">
            <span class="line"></span>
          </div>
        </div>
        <div className="doctor-photo">
          <img className="costa-photo" src="./photos/Costa_profile.jpg" alt="" />
        </div>
        <div>{t("part55")}</div>
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
        <CarousalRightComponent orderNumber={2} />
      </div>

      <div className="aboutsect1 patient">
        <div>{t("part56")}</div>
        <div className="hrr">
          <span className="line"></span>
        </div>
        <div>{t("part57")}</div>
      </div>

      <div className="pb-5">
        <div className="title-header-center mt-5 ">{t("part58")}</div>
        <div>
          <span className="line-middle"></span>
        </div>
        <div className="sect4">
          <div className="aboutsect3 mr-5">
            <img
              className="locationimages mr-4 aboutSecImg"
              src="./homepics/shanghaimart.png"
              alt=""
            />
            <div className="locationtext">
              <h3 className="h3-bold">{t("part10")}</h3>
              <p>
                {t("part1111")}
                <br />
                {t("part1112")}
                <br />
                {t("part1113")}
                <br />
                {t("part1114")}
                <br />
                {t("part1115")}
                <br />
                {t("part1116")}
              </p>
            </div>
          </div>
          <div className="aboutsect3">
            <img
              className="mr-4 aboutSecImg"
              style={{borderRadius: '10px'}}
              src="./photos/jimao.jpg"
              alt=""
            />
            <div className="locationtext">
              <h3 className="h3-bold">{t("part12")}</h3>
              {t("monday")}
              <br />
              {t("tuesday")}
              <br />
              {t("wednesday")}
              <br />
              {t("thursday")}
              <br />
              {t("friday")}
              <br />
              {t("saturday")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
