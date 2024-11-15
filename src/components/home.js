import React from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import Video from "../assets/homepage.mov";
import Slider from "./slider";

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      {/* <div className="homeherosection">
        <div className="homevada zindexx">
          <video className="heroimg" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="hometxt1 zindexx">
          <div className="title-header-left">{t("part25")}</div>
          <p className="subheader-bold-left">{t("part26")}</p>
          <a className="team-btn" href="tel:+8602151699696">
            {t("callus")}
          </a>{" "}
        </div>


      </div> */}

      <div className="homeherosection homepage-bg">
        <div className="main home-hero-main">
          <p className="title-main-header-left">
            {t("part25")}
          </p>
          <p className="subheader-bold-left padding-bottom">
            {t("part26")}
          </p>
          <div className="call-us-btn">
            <a className="team-btn" href="tel:+8602151699696">
              {t("callus")}
            </a>
          </div>
        </div>
        <div>
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={Video} type="video/mp4" />
          </video>
        </div>

      </div>

      <div className="section1 zindexx">
        <div className="secttext">
          <div className="title-header-center">{t("part27")}</div>
          <span className="line-middle"></span>
          <div className="normal-p-text">{[t("part28")]}</div>
        </div>
        <div className="about-image">
          <img className="homeimg2" src="./homepics/reception-new.png" alt="" />
        </div>
      </div>

      <div className="homeservices">
        <div className="title-header-center mt-5 ">{t("part31")}</div>
        <span className="line-middle"></span>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/icons/DENTA-CHECK-UP.svg" alt="" />
          </div>
          <div className="hometxtsect ml-5">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a className="sub-title" href="/comprehensive-care">{t("part32")}</a>
            </div>
            <div className="subheader-normal-left">{t("part33")}</div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img
              className="homefullwid"
              src="./homepics/icons/TEETH-CLEANINGS.svg"
              alt=""
            />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a className="sub-title" href="/comprehensive-care">{t("part34")}</a>
            </div>
            <div className="subheader-normal-left">{t("part35")} </div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/icons/VENEERS.svg" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a className="sub-title" href="/porcelain-veneers">{t("part36")}</a>
            </div>
            <div className="subheader-normal-left">{t("part37")}</div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/icons/WHITENING.svg" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a className="sub-title" href="/teeth-whitening">{t("part38")}</a>
            </div>
            <div className="subheader-normal-left">{t("part39")} </div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/icons/INVISALIGN.svg" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a className="sub-title" href="/orthodontics">{t("part40")}</a>
            </div>
            <div className="subheader-normal-left">{t("part41")}</div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/icons/EMERGENCIES-AND-MORE.svg" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a className="sub-title" href="/emergencies-and-more">{t("part42")}</a>
            </div>
            <div className="subheader-normal-left">{t("part43")}</div>
          </div>
        </div>
      </div>

      <div className="zindexx what-our-patient pt-3 pt-md-5 pb-3">
        <div className="title-header-center mt-0 mt-md-0 mt-sm-5">
          {t("part44")}
        </div>
        <span className="line-middle"></span>
      </div>
   

      {/* carousal efect */}
      <Slider />

      <div className="homebilling">
        <div className="title-header-center ">{t("part47")}</div>
        <span className="line-middle"></span>
        <h3 className="subheader-bold-60" style={{ fontWeight: 'normal' }}>
          {t("billing_facility_intro_text")}
        </h3>
        <div className="billingsect mt-5">
          <div className="billingsect-card">
            <img
              src="./photos/icon1.svg"
              width="65px"
              height="65px"
              alt=""
            />
            <div className="subheader-bold mt-3">{t("part48")}</div>
            <div className="normal-p-text"> {t("part481")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="./photos/icon2.svg"
              width="65px"
              height="65px"
              alt=""
            />
            <div className="subheader-bold mt-3">{t("part49")}</div>
            <div className="normal-p-text">{t("part491")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="./photos/icon3.svg"
              width="65px"
              height="65px"
              alt=""
            />
            <div className="subheader-bold mt-3">{t("part50")}</div>
            <div className="normal-p-text">{t("part501")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
