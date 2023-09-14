import React from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
// import { useGoogleMaps } from "react-hook-google-maps";
import { asyncWrapper } from "react-baidu-maps";
import { BaiduMap } from "react-baidu-maps";
import { Map, APILoader } from "@uiw/react-baidu-map";

function Contactus() {
  const { t } = useTranslation();
  //     const AsyncMap = asyncWrapper(BaiduMap);

  // const MAP_KEY = 'AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk'

  //     const { ref, map, google } = useGoogleMaps(
  //         // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
  //         "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
  //         // NOTE: even if you change options later
  //         {
  //           center: { lat: 0, lng: 0 },
  //           zoom: 3,
  //         },
  //       );

  return (
    <div>
      <div className="contact-hero" style={{backgroundImage: 'url("./photos/slide/9.jpg")'}}>

      </div>

      <div className="careupper">
        <div className="caresect mr-3">
          <img
            className="m-4 sectimg"
            src="https://img.icons8.com/ios-filled/50/4a90e2/wall-clock.png"
            height="75px"
            width="75px"
            alt=""
          />
          <h6 className="cardheading-md">{t("part109")}</h6>
          <p className="super-small">
            {t("part13")}
            <br />
            {t("saturday")}
          </p>
        </div>
        <div className="caresect mr-3">
          <img
            className="m-4 sectimg"
            src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/4a90e2/external-email-contact-us-xnimrodx-lineal-xnimrodx-4.png"
            height="75px"
            width="75px"
            alt=""
          />
          <h6 className="cardheading-md">{t("part111")}</h6>
          <p className="super-small">
            info@frenchdentist.cn thefrenchdentalclinic@gmail.com
          </p>
        </div>
        <div className="caresect mr-3">
          <img
            className="m-4 sectimg"
            src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/4a90e2/external-emergency-health-care-and-medical-flatart-icons-solid-flatarticons.png"
            height="75px"
            width="75px"
            alt=""
          />
          <h6 className="cardheading-md">{t("part112")}</h6>
          <p className="super-small">{t("phone")}</p>
        </div>
        <div className="caresect mr-3">
          <img
            className="m-4 sectimg"
            src="https://img.icons8.com/ios-filled/50/4a90e2/weixing.png"
            height="75px"
            width="75px"
            alt=""
          />
          <h6 className="cardheading-md">{t("wechat")}</h6>
          <img style={{width: '60px',height: '60px'}} src="./homepics/QR.png" alt="" />
        </div>
      </div>

      <h2 className="title-header-center mt-5 ">{t("part113")}</h2>

      <div className="contactdetails">
        <div className="contactsect mt-0 mt-md-5">
          <img
            className="mr-0 mr-md-5 mt-4 imgggg"
            src="./homepics/appointment.png"
            alt=""
          />
          <div className="mt-3">
            <h5 className="mb-3 subheader-bold-left">{t("part114")}</h5>
            <h6 className="pcon p-text">{t("part115")}</h6>
          </div>
        </div>
        <div className="contactsect mt-0 mt-md-5">
          <img
            className="mr-0 mr-md-5 mt-4 imgggg"
            src="./homepics/payment-mehotd.png"
            alt=""
          />
          <div className="mt-3">
            <h5 className="mb-3 subheader-bold-left">{t("part116")}</h5>
            <h6 className="pcon p-text">{t("part117")}</h6>
          </div>
        </div>
        <div className="contactsect mt-0 mt-md-5">
          <img
            className="mr-0 mr-md-5 mt-4 imgggg"
            src="./homepics/affection 1.png"
            alt=""
          />
          <div className="mt-3">
            <h5 className="mb-3 subheader-bold-left">{t("part118")}</h5>
            <h6 className="pcon p-text">{t("part119")}</h6>
          </div>
        </div>
        <div className="contactsect mt-0 mt-md-5">
          <img
            className="mr-0 mr-md-5 mt-4 imgggg"
            src="./homepics/care.png"
            alt=""
          />
          <div className="mt-3">
            <h5 className="mb-3 subheader-bold-left">{t("part1181")}</h5>
            <h6 className="pcon p-text">{t("part1182")}</h6>
          </div>
        </div>
        <div className="contactsect mt-0 mt-md-5">
          <img
            className="mr-0 mr-md-5 mt-4 imgggg"
            src="./homepics/relax.png"
            alt=""
          />
          <div className="mt-3">
            <h5 className="mb-3 subheader-bold-left">{t("part1191")}</h5>
            <h6 className="pcon p-text">{t("part1192")}</h6>
          </div>
        </div>
      </div>

      <div className="contact-benefits">
        <div className="caretext text-center font-weight-bolder mt-5 ">
          {t("part47")}
        </div>
        <span className="line-middle"></span>
        <h3 className="subheader-bold-60" style={{fontWeight: 'normal'}}>
          {t("billing_facility_intro_text")}
        </h3>
        <div className="text-center billingsect">
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/external-flat-wichaiwi/64/000000/external-convenient-generation-z-flat-wichaiwi.png"
              width="75px"
              height="75px"
              alt=""
            />
            <div className="subheader-bold mb-3">{t("part48")}</div>
            <div className="p-text">{t("part481")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/fluency/48/4a90e2/privacy-policy.png"
              width="75px"
              height="75px"
              alt=""
            />
            <div className="subheader-bold mb-3">{t("part49")}</div>
            <div className="p-text">{t("part491")}</div>
          </div>
          <div className="billingsect-card">
            <img
              src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/4a90e2/external-good-customer-review-xnimrodx-blue-xnimrodx.png"
              width="75px"
              height="75px"
              alt=""
            />
            <div className="subheader-bold mb-3">{t("part50")} </div>
            <div className="p-text">{t("part501")}</div>
          </div>
        </div>
      </div>

      <div className="map">
        <div className="w-100">
          <div className="title-header-center mt-5 ">{t("part124")} </div>
          <span className="line-middle"></span>
          <div className="contactlst">
            <div className="map-container">
              <div className="contactlast">
                <img
                  className="mr-4"
                  src="./homepics/shanghaimart.png"
                  alt=""
                />
                <div className="contact-address">
                  <h3 className="h3-bold">{t("part10")}</h3>
                  <p style={{marginBottom: '0px'}}>
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
{/*              <div className="contactlast mt-5">
                <img className="mr-4" src="./homepics/jimao.png" alt="" />
                <div>
                  <h3 className="h3-bold">{t("part14")}</h3>
                  {t("part1411")}
                  <br />
                  {t("part1412")}
                  <br />
                  {t("part1413")}
                  <br />
                  {t("part1414")}
                  <br />
                  {t("part1415")}
                </div>
              </div>*/}
            </div>
            <div className={"contactLstChild"}>
              <img
                className="w-100"
                src="./photos/map.png"
                alt=""
              />
              {/* <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
                <Map center="上海">
                    {({ BMap, map, container }) => {
                    return;
                    }}
                </Map>
                </APILoader> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
