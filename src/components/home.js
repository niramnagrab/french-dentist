import React from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import Video from "../home3.mp4";
import Slider from "./slider";
import ReadMore from "./util-components/ReadMore";
import CarouselComponent from "./util-components/Carousel";

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="homeherosection">
        <div className="homevada zindexx">
          <video className="heroimg" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="hometxt1 zindexx">
          <div className="caretext maintxthome font-weight-bold">
            {t("part25")}
          </div>
          <p className="p-text subhead">{t("part26")}</p>
          <div className="webbtn">{t("callus")} </div>
        </div>
      </div>
      <div className="carouselContainer">
        <CarouselComponent />
        <CarouselComponent orderNumber={2} />
      </div>

      <div className="section1 zindexx">
        <div className="secttext">
          <div className="caretext paddinghome text-center font-weight-bolder">
            {t("part27")}
          </div>
          <ReadMore
            text={[t("part28"), t("part29")]}
            readMore={t("part30")}
            seeLess={t("seeLess")}
          />
        </div>
        <div className="about-image">
          <img className="homeimg2" src="./homepics/reception1.jpg" alt="" />
          <img className="homeimg3" src="./homepics/section1.png" alt="" />
        </div>
      </div>

      <div className="homeservices">
        <div className="caretext paddingtophome text-center font-weight-bolder mt-5 ">
          {t("part31")}
        </div>
        <span class="line-middle"></span>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/checkup.png" alt="" />
          </div>
          <div className="hometxtsect ml-5">
            <div className="h3-bold font-weight-bolder mb-3">
              <a href="/comprehensive-care">{t("part32")}</a>
            </div>
            <div className="p-text">{t("part33")}</div>
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
          <div className="ml-5">
            <div className="h3-bold font-weight-bolder mb-3">
              <a href="/comprehensive-care">{t("part34")}</a>
            </div>
            <div className="p-text">{t("part35")} </div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/veneer.png" alt="" />
          </div>
          <div className="ml-5">
            <div className="h3-bold font-weight-bolder mb-3">
              <a href="/porcelain-veneers">{t("part36")}</a>
            </div>
            <div className="p-text">{t("part37")}</div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img
              className="homefullwid"
              src="./homepics/tooth-whitening.png"
              alt=""
            />
          </div>
          <div className="ml-5">
            <div className="h3-bold font-weight-bolder mb-3">
              <a href="/teeth-whitening">{t("part38")}</a>
            </div>
            <div className="p-text">{t("part39")} </div>
          </div>
        </div>
        <div className="servtab">
          <div>
            <img className="homefullwid" src="./homepics/braces.png" alt="" />
          </div>
          <div className="ml-5">
            <div className="h3-bold font-weight-bolder mb-3">
              <a href="/orthodontics">{t("part40")}</a>
            </div>
            <div className="p-text">{t("part41")}</div>
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
          <div className="ml-5">
            <div className="h3-bold font-weight-bolder mb-3">
              <a href="/emergencies-and-more">{t("part42")}</a>
            </div>
            <div className="p-text">{t("part43")}</div>
          </div>
        </div>
      </div>

      <div className="zindexx pt-5 pb-3">
        <div className="caretext text-center font-weight-bolder mt-5 ">
          {t("part44")}
        </div>
        <span class="line-middle"></span>
      </div>

      {/* carousal efect */}
      <Slider />

      <div className="homebilling">
        <div className="caretext text-center font-weight-bolder ">
          {t("part47")}
        </div>
        <span class="line-middle"></span>
        <h3 className="intro-text p-text">
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
            <div className="p-text-bold font-weight-bolder mt-3">
              {t("part48")}
            </div>
            <div className="p-text"> {t("part481")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/fluency/48/4a90e2/privacy-policy.png"
              width="75px"
              height="75px"
              alt=""
            />
            <div className="p-text-bold font-weight-bolder mt-3">
              {t("part49")}
            </div>
            <div className="p-text">{t("part491")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/4a90e2/external-good-customer-review-xnimrodx-blue-xnimrodx.png"
              width="75px"
              height="75px"
              alt=""
            />
            <div className="p-text-bold font-weight-bolder mt-3">
              {t("part50")}
            </div>
            <div className="p-text">{t("part501")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
