import React, { useState } from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import ReadMore from "./util-components/ReadMore";

function Team() {
  const { t } = useTranslation();
  const [viewMore, setViewMore] = useState(false);
  const [viewMore1, setViewMore1] = useState(false);
  const [viewMore2, setViewMore2] = useState(false);
  let firstDesc = t("part66") + t("part67") + t("part68") + t("part69")
  let secondDesc = t("part72") + t("part73") + t("part74")
  let thirdDesc = t("part77") + t("part78") + t("part79")
  let seeMore = t("seemore")

  return (
    <div>
      {/* <div className="team-hero">
                <img className="teamcover" src="./homepics/teamhero.jpg" alt="" />
                <div className="teamhero iphone">
                    <h1 className="mb-5 maintxtteam h2-bold ">{t("part61")} <br /> {t("part62")}</h1>
                    <p className="iphonetxt p-text">{t("part63")}</p>
                </div>
            </div> */}
      <div className="bloghero">
        <div className="blogherotext team">
          <h1 className="title-header-left">
            <span className="underline">{t("team1")}</span>
          </h1>
          <p className="subheader-normal-left">
            {t("team2")}
          </p>
          <p className="mt-5">
            <a className="team-btn" href="tel:+8602151699696">
              {t("callus")}
            </a>
          </p>
        </div>
        <div className="blogheroimage team">
          <img src="./photos/banner/team.jpeg" alt="blog-photo-dentist" />
        </div>
      </div>


      <div className="teamss-container">
        <div className="teamss-card-container">
          <div class="teamss-card">
            <img src="./photos/Costa_profile_600.jpg" alt="Dr. Louis Costa" className="imgBorder" />
            <h2><span class="underline" >{t("team3")}</span></h2>
            <ReadMore
              className="normal-p-text"
              text={[
                firstDesc,
                false
              ]}
              readMore={[
                seeMore
              ]}
              seeLess={"See Less"}
              paraNo='1st'
              viewMore={viewMore1}
            />
            <div className="read-more team-btn" onClick={() => setViewMore1(!viewMore1)}>
              {viewMore1 ? "See Less" : seeMore}
            </div>
          </div>
          <div class="teamss-card">
            <img src="./homepics/zheng.jpg" alt="zheng" className="imgBorder" />
            <h2><span class="underline" >{t("team6")}</span></h2>
            <ReadMore
              className="normal-p-text"
              text={[
                secondDesc,
                false
              ]}
              readMore={[
                seeMore
              ]}
              seeLess={"See Less"}
              viewMore={viewMore2}
            />
            <div className="read-more team-btn" onClick={() => setViewMore2(!viewMore2)}>
              {viewMore2 ? "See Less" : seeMore}
            </div>
          </div>

          <div class="teamss-card">
            <img src="./homepics/chiou.jpg" alt="zheng" className="imgBorder" />
            <h2><span class="underline" >{t("team9")}</span></h2>
            <ReadMore
              className="normal-p-text"
              text={[
                thirdDesc,
                false
              ]}
              readMore={[
                seeMore
              ]}
              seeLess={"See Less"}
              paraNo='3rd'
              viewMore={viewMore}
            />
            <div className="read-more team-btn" onClick={() => setViewMore(!viewMore)}>
              {viewMore ? "See Less" : seeMore}
            </div>
          </div>

        </div>
      </div>


      {/*
            <div className="teamsect text-justify p-text">
                <img className="costa-photo mr-5" src="./homepics/teamimg.png" alt="" />
                <div className="mt-5">
                    <h3>{t("part64")}</h3>
                    <h5>{t("part65")}</h5> <br />
                    <p>{t("part66")}<br /><br />

                    {t("part67")} <br /><br />

                    {t("part68")}<br /> <br />

                    {t("part69")}</p>
                </div>
            </div>

            <div className="teamsect text-justify p-text">
                <div className="mt-5">
                    <h3>{t("part70")}</h3>
                    <h5>{t("part71")}</h5> <br />
                    <p>{t("part72")}
                        <br />
                        <br />
                        {t("part73")}
                        <br />
                        <br />
                        {t("part74")}</p>
                </div>
                <img className="ml-5" src="./homepics/Zheng.jpg" alt="" />
            </div>

            <div className="teamsect text-justify p-text">
                <img className="mr-5" src="./homepics/chiou.jpg" alt="" />
                <div className="mt-5">
                    <h3>{t("part75")}</h3>
                    <h5>{t("part76")}</h5> <br />
                    <p>{t("part77")}
                        <br />
                        <br />
                        {t("part78")}
                        <br />
                        <br />
                        {t("part79")}
                    </p>
                </div>
            </div> */}
    </div>
  );
}

export default Team;
