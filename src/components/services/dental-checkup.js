import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "../slider";

function ComprehensiveCare() {
  const { t } = useTranslation();
  return (
    <div className="ml-5 mr-5 blogpage">
      <div className="care-hero">
        <img className="w-100" src="./homepics/blog.png" alt="" />
        <div className="care-hero-text herotext">
          <h2>{t("comprehensive_care")}</h2>
          <div className="padding-bottom">{t("part951")}</div>
          <a className="team-btn mt-5"  href="tel:+8602151699696">{t("callus")}</a>
        </div>
      </div>

      <div>
        <h2 className="mt-5 mb-5 cardheading">{t("part961")}</h2>
        <div className="blogsect care-blogsect">
          <div className="treatment-image">
            <img src="./homepics/whitening.jpg" alt="" />
          </div>
          <div className="p-2 ml-4 treatment-text">
            <div className="mt-3">
              <h5>{t("part971")}</h5>
              <p>{t("part972")}</p>
            </div>
            <div className="mt-3">
              <h5>{t("part974")}</h5>
              <p>{t("part975")}</p>
            </div>
            <div className="mt-3">
              <h5>{t("part976")}</h5>
              <p>{t("part977")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-0 other-treatment" >
        <h2 className="mt-0">{t("part103")} </h2>
        <div className="blogbtn">
          <a className="team-btn mb-3 mb-md-0 mr-md-5 mr-0" href="/teeth-whitening">{t("part104")}</a>
          <a className="team-btn mb-3 mb-md-0 mr-md-5 mr-0" href="/orthodontics">{t("part105")}</a>
          <a className="team-btn mb-3 mb-md-0 mr-md-5 mr-0" href="/dental-implants">{t("part106")}</a>
          <a className="team-btn mb-3 mb-md-0 mr-md-5 mr-0" href="/porcelain-veneers">{t("part107")}</a>
        </div>
      </div>
      {/* carousal efect */}
      <Slider />
    </div>
  );
}

export default ComprehensiveCare;
