import React from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import Video from "../home3.mp4";
import Slider from "./slider";
import ReadMore from "./util-components/ReadMore";

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

      <div>
        <div>
          <video className="heroimg" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="hometxt1">
          <div className="title-header-left">{t("part25")}</div>
          <p className="">{t("part26")}</p>
          <a className="team-btn" href="tel:+8602151699696">
            {t("callus")}
          </a>
        </div>
      </div>

      <div className="section1 zindexx">
        <div className="secttext">
          <div className="title-header-center">{t("part27")}</div>
          <span className="line-middle"></span>
          <div className="text-center">{[t("part28")]}</div>
        </div>
        <div className="about-image">
          <img className="homeimg2" src="./homepics/reception1.jpg" alt="" />
          <img className="homeimg3" src="./homepics/section1.png" alt="" />
        </div>
      </div>

      <div className="homeservices">
        <div className="title-header-center mt-5 ">{t("part31")}</div>
        <span className="line-middle"></span>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/001.png" alt="" />
          </div>
          <div className="hometxtsect ml-5">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a href="/comprehensive-care">{t("part32")}</a>
            </div>
            <div className="subheader-normal-left">{t("part33")}</div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img
              className="homefullwid"
              src="./homepics/noun_dental care_3740157 2.png"
              alt=""
            />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a href="/comprehensive-care">{t("part34")}</a>
            </div>
            <div className="subheader-normal-left">{t("part35")} </div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/003.png" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a href="/porcelain-veneers">{t("part36")}</a>
            </div>
            <div className="subheader-normal-left">{t("part37")}</div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/004.png" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a href="/teeth-whitening">{t("part38")}</a>
            </div>
            <div className="subheader-normal-left">{t("part39")} </div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/braces.png" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a href="/orthodontics">{t("part40")}</a>
            </div>
            <div className="subheader-normal-left">{t("part41")}</div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/006.png" alt="" />
          </div>
          <div className="ml-5 hometxtsect">
            <div className="h3-bold font-weight-bolder mb-3 servLink">
              <a href="/emergencies-and-more">{t("part42")}</a>
            </div>
            <div className="subheader-normal-left">{t("part43")}</div>
          </div>
        </div>
      </div>

      <div className="zindexx what-our-patient pt-3 pt-md-5 pb-3">
        <div className="title-header-center mt-0 mt-md-5 ">{t("part44")}</div>
        <span className="line-middle"></span>
      </div>

      {/* carousal efect */}
      <Slider />

      <div className="homebilling">
        <div className="title-header-center ">{t("part47")}</div>
        <span className="line-middle"></span>
        <h3 className="subheader-bold-60">
          {t("billing_facility_intro_text")}
        </h3>
        <div className="billingsect mt-5">
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/external-flat-wichaiwi/64/000000/external-convenient-generation-z-flat-wichaiwi.png"
              width="75px"
              height="75px"
              alt=""
            />
            <div className="subheader-bold mt-3">{t("part48")}</div>
            <div className="normal-p-text"> {t("part481")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/fluency/48/4a90e2/privacy-policy.png"
              width="75px"
              height="75px"
              alt=""
            />
            <div className="subheader-bold mt-3">{t("part49")}</div>
            <div className="normal-p-text">{t("part491")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/4a90e2/external-good-customer-review-xnimrodx-blue-xnimrodx.png"
              width="75px"
              height="75px"
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
