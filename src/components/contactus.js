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
            <div>
                <img className="w-100 contacthero" src="./homepics/contact.png" alt="" />
            </div>

            <div className="careupper">
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contactimg.png" alt="" />
                    <h6 className="cardheading">{t("part109")}</h6>
                    <p>{t("part13")} 
                    <br/>
                    {t("part131")}</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contact3.png" alt="" />
                    <h6 className="cardheading">{t("part111")}</h6>
                    <p>info@frenchdentist.cn thefrenchdentalclinic@gmail.com</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contact1.png" alt="" />
                    <h6 className="cardheading">{t("part112")}</h6>
                    <p>187 1781 2487</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contactimg.png" alt="" />
                    <h6 className="cardheading">WeChat</h6>
                    <img src="./homepics/QR.png" alt="" />
                </div>
            </div>

            <h2 className="caretext text-center font-weight-bold mt-5 ">
            {t("part113")}
            </h2>

            <div className="contactdetails">
                <div className="contactsect mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/appointment.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">{t("part114")}</h5>
                        <h6 className="pcon">{t("part115")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/payment-mehotd.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">{t("part116")}</h5>
                        <h6 className="pcon">{t("part117")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/affection 1.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">{t("part118")}</h5>
                        <h6 className="pcon">{t("part119")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/affection 1.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">{t("part1181")}</h5>
                        <h6 className="pcon">{t("part1182")}</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5 mt-4 imgggg" src="./homepics/affection 1.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">{t("part1191")}</h5>
                        <h6 className="pcon">{t("part1192")}</h6>
                    </div>
                </div>
            </div>

            <div>
                <div className="caretext text-center font-weight-bolder mt-5 ">{t("part47")}</div>
                <span class='line'></span>
                <div className="text-center contactpros">
                    <div>
                        <img src="./homepics/banda.png" alt="" />
                        <div className="font-weight-bolder mb-3 ">{t("part48")}</div>
                        <div>{t("part481")}</div>
                    </div>
                    <div>
                        <img src="./homepics/carbon_security.png" alt="" />
                        <div className="font-weight-bolder mb-3 ">{t("part49")}</div>
                        <div>{t("part491")}</div>
                    </div> 
                    <div>
                        <img src="./homepics/emoji.png" alt="" />
                        <div className="font-weight-bolder mb-3 ">{t("part50")} </div>
                        <div>{t("part501")}</div>
                    </div>
                </div>
            </div>

            <div className="map">

            <div className="w-100">
            <div className="caretext text-center font-weight-bolder mt-5 ">{t("part124")} </div>
            <span class='line'></span>
            <div className="contactlst">
                <div className="map-container">
                <div className="contactlast">
                    <img className="mr-4" src="./homepics/jimao.png" alt="" />
                    <div>
                        <h5 className="mt-3">{t("part125")}</h5>
                        <div className="mt-2">{t("part126")}
                        </div>
                    </div>
                </div>
                <div className="contactlast mt-5">
                    <img className="mr-4" src="./homepics/shanghaimart.png" alt="" />
                    <div>
                        <h5 className="mt-3">{t("part125")}</h5>
                        <div className="mt-2">{t("part126")}
                        </div>
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