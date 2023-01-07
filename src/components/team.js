import React from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import ReadMore from "./util-components/ReadMore";

function Team() {
  const { t } = useTranslation();

  let firstDesc = t("part66") + t("part67") + t("part68") + t("part69")
  let secondDesc = t("part72") + t("part73") + t("part74")
  let thirdDesc = t("part77") + t("part78") + t("part79")

  return (
    <div>
      {/* <div className="team-hero">
                <img className="teamcover" src="./homepics/teamhero.jpg" alt="" />
                <div className="teamhero iphone">
                    <h1 className="mb-5 maintxtteam h2-bold ">{t("part61")} <br /> {t("part62")}</h1>
                    <p className="iphonetxt p-text">{t("part63")}</p>
                </div>
            </div> */}

      <div className="home-hero">
        <div className="hero-img">
          <img src="./homepics/girl-smiling.jpg" alt="blog-photo-dentist" />
        </div>
        <div className="main main-team">
          <p className="title-header-left">
            A team of <span>international dentists</span>
          </p>
          <p className="subheader-bold-left">
            French Dentist dentists and staff were selected for their
            experience, commitment to excellent results and quality patient
            care. Our mission is to provide a patient-first focus on ensuring
            you are always comfortable during your visit.
          </p>
          <div className="call-us-btn">
            <a href="/contact" className="team-btn">
              Call us now
            </a>
          </div>
        </div>
      </div>

      <div className="new-doctor">
        <div className="doctor-image">
          <img src="./homepics/costa.jpeg" alt="" />
        </div>

        <div className="doctor-description">
          <h1>Dr. Louis Costa</h1>
          <p className="subheader-bold-left">
            Dental surgeon and implantologist
          </p>
          <ReadMore
            className="normal-p-text"
            text={[
              firstDesc,
              false
            ]}
            readMore={"Read More"}
            seeLess={"See Less"}
            paraNo = '1st'
          />
        </div>
      </div>

      <div className="new-doctor new-doctor-alt">
        <div className="doctor-description">
          <h1>Dr Honda Zheng</h1>
          <p className="subheader-bold-left">
            Dental surgeon and cosmetic dentist
          </p>
          <ReadMore
            className="normal-p-text"
            text={[
              secondDesc,
              false
            ]}
            readMore={"Read More"}
            seeLess={"See Less"}
            paraNo = '2nd'

          />
        </div>
        <div className="doctor-image">
          <img src="./homepics/zheng.jpg" alt="" />
        </div>
      </div>

      <div className="new-doctor">
        <div className="doctor-image">
          <img src="./homepics/chiou.jpg" alt="" />
        </div>

        <div className="doctor-description">
          <h1>Dr Daan Chiou</h1>
          <p className="subheader-bold-left">
            Pediatric dentist and orthodontist
          </p>
          <ReadMore
            className="normal-p-text"
            text={[
              thirdDesc,
              false
            ]}
            readMore={"Read More"}
            seeLess={"See Less"}
            paraNo = '3rd'

          />
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
