import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";
import { useGoogleMaps } from "react-hook-google-maps";
import { asyncWrapper } from 'react-baidu-maps';
import { BaiduMap } from 'react-baidu-maps';
import { Map, APILoader } from '@uiw/react-baidu-map';


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
            <div className="contact-hero">
                <img className="w-100 contacthero" src="./homepics/contact3.jpeg" alt="" />
            </div>

            <div className="careupper">
                <div className="caresect mr-3">
                    <img className="m-4 sectimg" src="https://img.icons8.com/ios-filled/50/4a90e2/wall-clock.png"  height="75px" width="75px" alt="" />
                    <h6 className="cardheading">{t("part109")}</h6>
                    <p>{t("part13")} 
                    <br/>
                    {t("part131")}</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-4 sectimg" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/4a90e2/external-email-contact-us-xnimrodx-lineal-xnimrodx-4.png"  height="75px" width="75px" alt="" />
                    <h6 className="cardheading">{t("part111")}</h6>
                    <p>info@frenchdentist.cn thefrenchdentalclinic@gmail.com</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-4 sectimg" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/4a90e2/external-emergency-health-care-and-medical-flatart-icons-solid-flatarticons.png"  height="75px" width="75px" alt="" />
                    <h6 className="cardheading">{t("part112")}</h6>
                    <p>187 1781 2487</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-4 sectimg" src="https://img.icons8.com/ios-filled/50/4a90e2/weixing.png" height="75px" width="75px" alt="" />
                    <h6 className="cardheading">WeChat</h6>
                    <img src="./homepics/QR.png" alt="" />
                </div>
            </div>

            <h2 className="text-center font-weight-bold mt-5 ">
            {t("part113")}
            </h2>

            <div className="contactdetails">
                <div className="contactsect mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/appointment.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3 p-text-bold">{t("part114")}</h5>
                        <h6 className="pcon p-text">{t("part115")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/payment-mehotd.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3 p-text-bold">{t("part116")}</h5>
                        <h6 className="pcon p-text">{t("part117")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/affection 1.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3 p-text-bold">{t("part118")}</h5>
                        <h6 className="pcon p-text">{t("part119")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/care.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3 p-text-bold">{t("part1181")}</h5>
                        <h6 className="pcon p-text">{t("part1182")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/relax.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3 p-text-bold">{t("part1191")}</h5>
                        <h6 className="pcon p-text">{t("part1192")}</h6>
                    </div>
                </div>
            </div>

            <div className="contact-benefits">
                <div className="caretext text-center font-weight-bolder mt-5 ">{t("part47")}</div>
                <span class='line-middle'></span>
                <div className="text-center billingsect">
                    <div className="billingsect-card">
                        <img src="https://img.icons8.com/external-flat-wichaiwi/64/000000/external-convenient-generation-z-flat-wichaiwi.png" width="75px" height="75px" alt="" />
                        <div className="font-weight-bolder mb-3">{t("part48")}</div>
                        <div className="p-text">{t("part481")}</div>
                    </div>
                    <div className="billingsect-card">
                        <img src="https://img.icons8.com/fluency/48/4a90e2/privacy-policy.png" width="75px" height="75px" alt="" />
                        <div className="font-weight-bolder mb-3">{t("part49")}</div>
                        <div className="p-text">{t("part491")}</div>
                    </div> 
                    <div className="billingsect-card">
                        <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/4a90e2/external-good-customer-review-xnimrodx-blue-xnimrodx.png" width="75px" height="75px" alt="" />
                        <div className="font-weight-bolder mb-3">{t("part50")} </div>
                        <div className="p-text">{t("part501")}</div>
                    </div>
                </div>
            </div>

            <div className="map">

            <div className="w-100">
            <div className="caretext text-center font-weight-bolder mt-5 ">{t("part124")} </div>
            <span class='line-middle'></span>
            <div className="contactlst">
                <div className="map-container">
                <div className="contactlast">
                    <img className="mr-4" src="./homepics/shanghaimart.png" alt="" />
                    <div>
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
                <div className="contactlast mt-5">
                    <img className="mr-4" src="./homepics/jimao.png" alt="" />
                    <div>
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
                <div style={{ width: '50%' }}>
                <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
                <Map center="上海">
                    {({ BMap, map, container }) => {
                    return;
                    }}
                </Map>
                </APILoader>
            </div>
            </div>
         
            </div>
           
            </div>
        </div>
    )
}

export default Contactus